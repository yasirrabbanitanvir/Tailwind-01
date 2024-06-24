import React from 'react';

const MainContent = () => {
  return (
    <div className="p-6 md:p-8 max-w-lg mx-auto bg-white rounded-xl shadow-lg space-y-6 dark:bg-gray-800 dark:text-gray-300">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white">
        Welcome to the Dark Mode Toggle App
      </h1>
      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-400 leading-relaxed">
      It enables users to easily switch between light and dark display modes on their devices, such as smartphones, tablets or laptops.
      </p>
    </div>
  );
};

export default MainContent;
