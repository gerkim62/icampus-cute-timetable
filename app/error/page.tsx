import BackButton from "@/components/BackButton";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";

export default function Page({
  searchParams,
}: {
  searchParams?: { message?: string; possible_cause?: string; code?: string };
}) {
  // Destructure searchParams and set default values if they are undefined
  const {
    message = "Error",
    possible_cause = "Unknown cause",
    code = "500",
  } = searchParams || {};

  return (
    <div className="flex justify-center items-center">
      <div className="max-w-md w-full mx-auto p-8 rounded-lg">
        <h2 className=" text-8xl font-bold opacity-10">{code}</h2>

        <h2 className="text-2xl font-bold mb-4">{message}</h2>
        <p className="text-gray-100">{possible_cause}</p>

        <p>
          {code === "500" && "Go back and try again."}{" "}
          <Link
            href={`https://wa.me/254715870654?text=Cute timetable says ${message} (${code}). Please help me.`}
            className="inline-block px-2 py-1 bg-pink-200 text-pink-800 font-semibold rounded-full shadow-md hover:bg-pink-300 hover:text-pink-900"
          >
            WhatsApp developer.gerison on +254715870654
          </Link>
        </p>

        <BackButton />
      </div>
    </div>
  );
}
