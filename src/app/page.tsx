import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1>Home Page / Landing Page</h1>
      <br />
      <Link
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        href="/login"
      >
        Login
      </Link>
    </div>
  );
}
