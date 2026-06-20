export default function AuthLayout({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f0ede5] px-6 py-10">
      
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">

        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#004643]">
            {title}
          </h1>

          <p className="mt-3 text-gray-600">
            {subtitle}
          </p>
        </div>

        <div className="mt-8">
          {children}
        </div>
      </div>
    </main>
  );
}