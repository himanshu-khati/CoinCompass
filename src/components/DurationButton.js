import React from "react";

// Component for a duration button used in the application
const DurationButton = ({ duration, title }) => {
  return (
    // Render a button with specified styles and properties
    <button
      className="border bg-[#FAFBFF] py-1 px-2 lg:px-3 rounded-lg mx-1 lg:mx-2 hover:border-blue-700 lg:text-base text-sm"
      value={duration} // Assign the duration as the value of the button
    >
      {title} {/* Display the title of the button */}
    </button>
  );
};

export default DurationButton;
