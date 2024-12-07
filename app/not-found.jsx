import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-gray-400">
      <h1 className="text-6xl font-bold ">404</h1>
      <p className="text-lg  mt-4">
        Oops! The page you are looking for doesnt exist.
      </p>
      <Link
        href="/"
        className="mt-6 px-6 py-3 text-white bg-color-purple  rounded-lg shadow"
      >
        Go Back Home
      </Link>
    </div>
  );
}
