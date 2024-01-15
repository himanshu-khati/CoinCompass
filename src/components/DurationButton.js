import React from "react";

const DurationButton = ({ duration, title }) => {
  return (
    <button
      className="border bg-[#FAFBFF] py-1 px-3 rounded-lg mx-2 hover:border-blue-700"
      value={duration}
    >
      {title}
    </button>
  );
};

export default DurationButton;
