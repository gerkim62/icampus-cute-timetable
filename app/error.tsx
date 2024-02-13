"use client"
import React from "react";
import { FaArrowRotateRight } from "react-icons/fa6";

const ErrorPage = () => {

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className=" flex flex-col justify-center items-center p-4">
      <h1 className="text-4xl text-red-600 font-bold mb-4">Oops! Something went wrong.</h1>
      <p className="text-gray-200 mb-8">We are sorry, but an error occurred while processing your request.</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={refreshPage}
      >
        Try Again <FaArrowRotateRight className="inline-block" />
      </button>
    </div>
  );
};

export default ErrorPage;
