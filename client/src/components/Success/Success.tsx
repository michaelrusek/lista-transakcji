import React from "react";

const Success = () => {
  return (
    <div
      className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 relative rounded-[10px]"
      role="alert"
    >
      <strong className="font-bold">Sukces: </strong>
      <span className="block sm:inline">
        Twoje zlecenie zostało utworzone i wkrótce pojawi się na stronie WWW.
      </span>
    </div>
  );
};

export default Success;
