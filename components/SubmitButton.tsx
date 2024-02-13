"use client";

import React, { useState } from "react";
import { useFormStatus } from "react-dom";
import { FaArrowRight, FaSpinner } from "react-icons/fa6";

type Props = {};

const SubmitButton = (props: Props) => {
  const { pending } = useFormStatus();

  return (
    <div className="">
      <button
        disabled={pending}
        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 justify-center items-center inline-flex"
      >
        Proceed <FaArrowRight className="inline-block ml-2" />
      </button>
      {pending && <LoadingOverlay />}
    </div>
  );
};

const LoadingOverlay = ({}) => {
  return (
    <div className="absolute inset-0 bg-gray-900 opacity-80 flex justify-center items-center">
      <div className="flex flex-col items-center">
        <FaSpinner className="animate-spin text-gray-200 h-16 w-16" />
        <p className="text-gray-200 mt-4">{"This will take a minute..."}</p>
      </div>
    </div>
  );
};

export default SubmitButton;
