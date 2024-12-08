"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function NotFoundPage() {
  const { videoId } = useParams();
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-gray-400">
      <h1 className="text-6xl font-bold ">404</h1>
      <p className="text-lg  mt-4">
        This video with{" "}
        <span className="mx-2 text-white text-xl">{videoId}</span> id was not
        found!.
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
