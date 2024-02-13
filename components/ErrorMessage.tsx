import React from "react";

const ErrorMessage = ({
  message,
  cause,
  onRetry,
}: {
  message: string;
  cause?: string;
  onRetry?: () => void;
}) => {
  return (
    <div
      className="max-w-md mx-auto bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <strong className="font-bold">Error:</strong>
      <span className="block sm:inline">{message}</span>
      {cause && <p className="text-sm text-gray-600 mt-2">{cause}</p>}
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-2 inline-block bg-red-500 text-white px-4 py-2 rounded focus:outline-none hover:bg-red-600"
        >
          Go back
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;
