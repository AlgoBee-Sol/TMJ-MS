export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="bg-[#c8d3f7] text-white flex flex-col justify-center items-center p-10  rounded-r-full">
        <h1 className="text-[#615fff] text-5xl font-bold">
          The Muscular Junction
        </h1>
        <p className="text-black text-right font-bold">
          Where recovery meets precision
        </p>
      </div>
      <div className="flex flex-col justify-center items-center p-10">
        {children}
      </div>
    </div>
  );
}
