'use server';

import bcrypt from 'bcrypt';
import { createSession } from '@/lib/auth';
import { loginSchema, LoginSchemaType, LoginState } from '@/validations/login';
import {
  signUpSchema,
  SignUpSchemaType,
  SignUpState,
} from '@/validations/sign-up';
import prisma from '@/lib/db';

export async function signUp(
  redirectUrl = '',
  _state: SignUpState,
  formData: FormData
): Promise<SignUpState> {
  const data = Object.fromEntries(formData) as unknown as SignUpSchemaType;
  const validatedFields = signUpSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      data,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { firstName, lastName, email, password } = validatedFields.data;

  const existingUser = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (existingUser) {
    return {
      data,
      message: 'Email already exists, please use a different email or login.',
    };
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      firstName,
      lastName,
      email,
      passwordHash,
      gender: 'FEMALE',
    },
  });

  if (!user) {
    return {
      data,
      message: 'An error occurred while creating your account.',
    };
  }

  await createSession(user.id, redirectUrl);
}

export async function login(
  redirectUrl = '',
  _state: LoginState,
  formData: FormData
): Promise<LoginState> {
  const data = Object.fromEntries(formData) as unknown as LoginSchemaType;
  const validatedFields = loginSchema.safeParse(data);
  const errorMessage = 'Invalid login credentials.';

  if (!validatedFields.success) {
    return {
      data,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validatedFields.data;

  const user = await prisma.user.findFirst({
    where: { email },
  });

  if (!user) {
    return {
      data,
      message: errorMessage,
    };
  }

  const passwordMatch = await bcrypt.compare(password, user.passwordHash!);

  if (!passwordMatch) {
    return {
      data,
      message: errorMessage,
    };
  }

  await createSession(user.id, redirectUrl);
}
