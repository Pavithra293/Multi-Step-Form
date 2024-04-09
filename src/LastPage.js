import React, { useState, useEffect } from 'react';

const LastPage = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 900);
    };

    window.addEventListener('resize', handleResize);

    // Initial check on mount
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="w-full space-y-8">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Learning paths based on your answers
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Choose one to get started. You can switch anytime.
          </p>
        </div>

        <div className="rounded bg-white overflow-hidden p-5">
          <div
            id="buttonGroup"
            className={`flex flex-wrap justify-center gap-5 ${
              isSmallScreen ? 'flex-col items-center' : ''
            }`}
          >
            <button
              onClick={refreshPage}
              type="button"
              className="shadow-xl groupButton flex items-center py-4 px-4 border border-gray-300 rounded mb-2 max-w-[27rem] h-[12rem] transition-transform transform-gpu hover:scale-105"
            >
              <div className="flex items-center justify-between w-full">
                <div style={{ maxWidth: '70%' }}>
                  {/* Text on the left side of the button */}
                  <p className="text-lg">
                    <b>Foundational Math</b> Build your foundational skills in algebra, geometry, and probability
                  </p>
                </div>
                <div>
                  {/* Image on the right side of the button */}
                  <img src="Math.png" className="w-[7rem] h-[7rem]" alt="Learn" />
                </div>
              </div>
            </button>
            <button
              onClick={refreshPage}
              type="button"
              className="shadow-xl groupButton flex items-center py-4 px-4 border border-gray-300 rounded mb-2 max-w-[27rem] h-[12rem] transition-transform transform-gpu hover:scale-105"
            >
              <div className="flex items-center justify-between w-full">
                <div style={{ maxWidth: '70%' }}>
                  {/* Text on the left side of the button */}
                  <p className="text-lg">
                    <b>Mathematical Thinking</b> Build your foundational skills in algebra, geometry, and probability
                  </p>
                </div>
                <div>
                  {/* Image on the right side of the button */}
                  <img src="Math.png" className="w-[7rem] h-[7rem]" alt="Learn" />
                </div>
              </div>
            </button>
            {/* Add more buttons as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastPage;
