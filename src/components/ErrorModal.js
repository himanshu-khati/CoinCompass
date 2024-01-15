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
      <>
        <div
          className="fixed inset-0 flex items-center justify-center "
          onClick={closeErrorModal}
        >
          <div
            className="bg-white p-8 rounded shadow-md w-96 z-50"
            onClick={(e) => e.stopPropagation()} 
          >
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-red-500">
                {error} : Too Many API Calls
              </h2>
              <hr className="my-2" />
            </div>
            <p className="text-gray-700">
              CoinGecko Free API provides limited number of API calls per
              minute. Please wait a while and try again.
            </p>
            <div className="mt-4 flex justify-end">
              <div className="flex gap-4">
                <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:shadow-outline-red">
                  <a href="/">Try Again</a>
                </button>
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:shadow-outline-red"
                  onClick={closeErrorModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
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
