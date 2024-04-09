import React from 'react';

const Loading = () => {
  return (
    <div className="flex flex-col min-h-[80vh] items-center justify-center h-screen">
      <div className="inline-block h-16 w-16 mb-10 animate-spin rounded-full border-8 border-solid border-current border-e-transparent align-center text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-[#F0B337]" role="status">
        {/* Spinner content */}
      </div>
      <h2 className="text-center text-2xl font-bold text-gray-900 max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">Finding learning path recommendations for you based on your responses</h2>
    </div>
  );
};

export default Loading;
