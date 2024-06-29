import React, { useEffect, useState } from "react";

const ErrorModal = ({ error, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (error) {
      setIsVisible(true);
    }
  }, [error]);

  const closeErrorModal = () => {
    setIsVisible(false);
    onClose && onClose();
  };

  return (
    isVisible && (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Modal backdrop */}
        <div
          className="fixed inset-0 bg-black opacity-25"
          onClick={closeErrorModal}
        ></div>
        {/* Modal content */}
        <div className="fixed bg-white p-8 rounded shadow-md max-w-md z-50">
          {/* Modal header */}
          <h2 className="text-2xl font-bold text-red-500 mb-2">{error}</h2>
          <hr className="my-2" />
          {/* Modal body */}
          <p className="text-gray-700 mb-4">
            CoinGecko Free API provides a limited number of API calls per
            minute. Please wait a while and try again.
          </p>
          {/* Modal actions */}
          <div className="flex justify-end">
            {/* "Try Again" button */}
            <button
              className="px-4 py-2 bg-red-500 text-white rounded mr-2 hover:bg-red-600 focus:outline-none focus:shadow-outline-red"
              onClick={() => window.location.reload()}
            >
              Try Again
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
    )
  );
};

export default ErrorModal;
