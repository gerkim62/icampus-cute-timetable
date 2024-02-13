"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowLeft } from "react-icons/fa6";

type Props = {};

const BackButton = (props: Props) => {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.back();
        console.log(JSON.stringify(window.history.state, null, 2));
      }}
      className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex justify-center items-center"
    >
      <FaArrowLeft className="mr-2" /> Go back
    </button>
  );
};

export default BackButton;
