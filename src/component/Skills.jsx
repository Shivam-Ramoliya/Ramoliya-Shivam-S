import React from "react";

const Skills = ({ skillCategories }) => {
  return (
    <section id="skills" className="py-12 md:py-20">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-500 to-emerald-500">
              Skills
            </span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-sky-500 to-emerald-500 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        {/* Skills Grid - Responsive: 1 column on small/medium, 2 on large */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-3xl p-8 sm:p-10 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-slate-700"
            >
              {/* Category Icon - Responsive sizing */}
              <div className="w-14 h-14 sm:w-20 sm:h-20 bg-linear-to-br from-sky-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl sm:text-4xl">{category.icon}</span>
              </div>

              {/* Category Title - Responsive sizing */}
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8">
                {category.title}
              </h3>

              {/* Skills List (Tiles view with SVG icons) */}
              <div className="flex flex-wrap gap-4 sm:gap-5">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-3 px-5 sm:px-6 py-3 sm:py-4 bg-gray-100 dark:bg-slate-700 text-gray-800 dark:text-gray-200 rounded-xl font-semibold text-sm sm:text-base hover:bg-linear-to-r hover:from-sky-500 hover:to-emerald-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110 cursor-pointer"
                  >
                    {skill.svgIcon && (
                      <div className="w-6 h-6 sm:w-7 sm:h-7 shrink-0">
                        {skill.svgIcon}
                      </div>
                    )}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
