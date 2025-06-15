"use client";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-[#EA0070] gap-5">
      <h1 className="text-white text-5xl font-bold">NotFound 404</h1>
      <p className="text-white">Page You are looking for is not found.</p>
      <button
        type="button"
        className="py-2 px-5 cursor-pointer border-1 border-white text-white hover:border-purple-500 transition"
        onClick={() => router.push("/")}
      >
        Go To Home Page
      </button>
    </div>
  );
};

export default NotFound;
