import React from "react";

const About = ({ bio, image, stats }) => {
  return (
    <section id="about" className="py-12 md:py-20">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-500 to-emerald-500">
              Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-sky-500 to-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image Side - Responsive sizing for decorative elements */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl shine-effect">
              <img
                src={image}
                alt="About me"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-emerald-900/50 to-transparent"></div>
            </div>

            {/* Decorative elements adjusted for small screens */}
            <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-24 sm:h-24 bg-sky-200 dark:bg-emerald-900 rounded-full -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 sm:w-32 sm:h-32 bg-emerald-200 dark:bg-sky-900 rounded-full -z-10"></div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              {bio}
            </p>

            {/* Stats - Responsive grid: 2 columns on small, 3 columns on large */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 pt-4 md:pt-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 sm:p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-slate-700"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-sky-500 to-emerald-500 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Skills or Highlights - Responsive spacing and text size */}
            <div className="flex flex-wrap gap-2 sm:gap-3 pt-4 md:pt-6">
              {[
                "Creative",
                "Problem Solver",
                "Team Player",
                "Fast Learner",
              ].map((trait, index) => (
                <span
                  key={index}
                  className="px-3 py-1 sm:px-4 sm:py-2 bg-linear-to-r from-sky-500 to-emerald-500 text-white rounded-full text-xs sm:text-sm font-medium shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
