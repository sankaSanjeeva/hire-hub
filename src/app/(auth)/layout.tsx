export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-svh items-center justify-center">
      <div className="mt-20 rounded-xl bg-theme/10 p-10 shadow-card">
        {children}
      </div>
    </div>
  );
}
