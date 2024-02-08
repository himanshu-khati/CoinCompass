import React, { useEffect, useState } from "react";

const ErrorModal = ({ error, onClose }) => {
  // State to control the visibility of the error modal
  const [isVisible, setIsVisible] = useState(false);

  // Effect to show the error modal when an error is received
  useEffect(() => {
    if (error) {
      setIsVisible(true);
    }
  }, [error]);

  // Function to close the error modal
  const closeErrorModal = () => {
    setIsVisible(false);
    // Call onClose function if provided
    onClose && onClose();
  };

  // Render the error modal if isVisible is true
  return (
    isVisible && (
      <>
        {/* Error modal overlay */}
        <div
          className="fixed z-40 inset-0 flex items-center justify-center"
          onClick={closeErrorModal}
        >
          {/* Error modal content */}
          <div
            className="bg-white p-8 rounded shadow-md w-96 z-50"
            onClick={(e) => e.stopPropagation()} // Prevent modal closure on content click
          >
            <div className="mb-4">
              {/* Error title */}
              <h2 className="text-2xl font-bold text-red-500">
                {error} : Too Many API Calls
              </h2>
              <hr className="my-2" />
            </div>
            {/* Error description */}
            <p className="text-gray-700">
              CoinGecko Free API provides a limited number of API calls per
              minute. Please wait a while and try again.
            </p>
            {/* Buttons for user interaction */}
            <div className="mt-4 flex justify-end">
              <div className="flex gap-4">
                {/* "Try Again" button */}
                <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:shadow-outline-red">
                  <a href="/">Try Again</a>
                </button>
                {/* "Close" button */}
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:shadow-outline-red"
                  onClick={closeErrorModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
          {/* Background overlay */}
          <div
            className="fixed inset-0 bg-black opacity-25"
            onClick={closeErrorModal} // Close modal on click anywhere
          ></div>
        </div>
      </>
    )
  );
};

export default ErrorModal;
