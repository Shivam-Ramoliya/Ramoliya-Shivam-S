import React, { useState, useEffect } from "react";

const PageTitleHero = ({ title, gradientText, description }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900 animate-fadeIn">
      <div className="text-center px-4">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-white animate-scaleInUp">
          {title}{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-500 to-emerald-500">
            {gradientText}
          </span>
        </h1>
        <div className="w-32 h-1.5 bg-linear-to-r from-sky-500 to-emerald-500 mx-auto rounded-full mt-8 animate-scaleInUp"></div>
        {description && (
          <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl mt-6 animate-fadeIn max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageTitleHero;
