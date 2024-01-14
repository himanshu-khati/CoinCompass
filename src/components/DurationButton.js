import React from "react";

const DurationButton = ({ duration, title }) => {
  return (
    <button
      className="border bg-[#FAFBFF] py-1 px-3 rounded-lg mx-2"
      value={duration}
    >
      {title}
    </button>
  );
};

export default DurationButton;
