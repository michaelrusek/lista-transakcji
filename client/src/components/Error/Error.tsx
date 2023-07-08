import React from "react";

const Error = ({ message }: { message: string }) => {
  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-6 py-3 relative rounded-[10px]"
      role="alert"
    >
      <strong className="font-bold">Error: </strong>
      <span className="block sm:inline">{message}</span>
    </div>
  );
};

export default Error;
