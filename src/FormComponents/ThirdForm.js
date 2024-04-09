import React, { useState, useEffect } from 'react';

const ThirdForm = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 672);
    };

    window.addEventListener('resize', handleResize);

    // Initial check on mount
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className={`max-w-[672px]  ${isSmallScreen ? 'flex-col' : 'flex'} gap-8`}>
          <video className="w-80 h-80" autoPlay loop muted>
            <source src="pulley-blob.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className='self-center w-80 h-80 mt-10'>
            <h2 className="text-left text-3xl font-extrabold text-gray-900">
              You're in the right place
            </h2>
            <p className="mt-2 text-left text-sm text-gray-600">
              Brilliant gets you hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in math, science, and computer science.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdForm;
