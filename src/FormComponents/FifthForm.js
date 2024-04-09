import React, { useState, useEffect } from 'react';

const FifthForm = () => {
   const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 750);
    };

    window.addEventListener('resize', handleResize);

    // Initial check on mount
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
     <div>
       <div className="min-h-[70vh] flex items-center justify-center  px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl w-full ">
          <div className={`flex gap-20  ${isSmallScreen ? 'flex-col' : 'flex'} gap-8`}>
            <video className="self-center w-80 h-80" autoPlay loop muted>
              <source src="cheerleader-blorb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
			
            <div className='self-center flex flex-col gap-6'>
              <h2 className="text-left text-3xl font-extrabold text-gray-900">
					You're on your way!
              </h2>
              
              <p className="mt-2 text-left  w-80 h-80 text-md text-black gap-5">
                <div className='flex gap-2 mb-3'>
                  <img src="star.png" alt="star" className="w-[3rem] h-[3rem]"></img>
                  <img src="star.png" alt="star" className="w-[3rem] h-[3rem]"></img>
                  <img src="star.png" alt="star" className="w-[3rem] h-[3rem]"></img>
                  <img src="star.png" alt="star" className="w-[3rem] h-[3rem]"></img>
                  <img src="star.png" alt="star" className="w-[3rem] h-[3rem]"></img>
                </div>
                <em>
                  “For all people like me, who love problem solving and all areas related, this app is heaven. If you like bending your mind over interesting problems or want to explore a rich world full of beautiful mysteries, this app will be a sure thing for you.”</em>
                <em>— Bob V.</em>
              </p>
              </div>
			</div>

		</div>
	</div>
  </div>
  )
}

export default FifthForm
