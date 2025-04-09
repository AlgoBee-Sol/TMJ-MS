export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="bg-[#0D1B2A] text-white flex flex-col justify-center items-center p-10  rounded-r-full">
        <h1 className="text-amber-600 text-5xl font-bold">
          The Muscular Junction
        </h1>
        <p className="text-gray-300 text-right w-[75%]">
          Where recovery meets precision
        </p>
      </div>
      <div className="flex flex-col justify-center items-center p-10">
        {children}
      </div>
    </div>
  );
}
