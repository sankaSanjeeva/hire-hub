import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { match } from 'path-to-regexp';
import { decrypt } from '@/lib/auth';

const protectedRoutes = ['/jobs/:id/apply'];
const publicRoutes = ['/login', '/sign-up', '/company-sign-up'];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  const isProtectedRoute = Boolean(match(protectedRoutes)(path));
  const isPublicRoute = Boolean(match(publicRoutes)(path));

  const cookie = req.cookies.get('session')?.value;
  const session = await decrypt(cookie);

  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(
      new URL(`/login?redirect=${encodeURIComponent(path)}`, req.nextUrl)
    );
  }

  if (isPublicRoute && session?.userId) {
    return NextResponse.redirect(new URL('/', req.nextUrl));
  }

  return NextResponse.next();
}
