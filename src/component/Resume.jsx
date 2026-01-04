import React, { useMemo, useState } from "react";

const palette = [
  "from-sky-500 to-emerald-500",
  "from-indigo-500 to-sky-500",
  "from-emerald-500 to-teal-400",
  "from-amber-500 to-rose-500",
  "from-cyan-500 to-blue-500",
];

const getInitials = (text = "") =>
  text
    .split(" ")
    .filter(Boolean)
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

const getPalette = (text = "") => palette[text.length % palette.length];

const Avatar = ({ src, alt, fallbackText }) => {
  const initials = useMemo(
    () => getInitials(fallbackText || alt),
    [alt, fallbackText]
  );
  const gradient = useMemo(
    () => getPalette(fallbackText || alt),
    [alt, fallbackText]
  );

  if (src) {
    return (
      <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-xl overflow-hidden border border-white/20 shadow-md shrink-0 bg-slate-800">
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div
      className={`h-16 w-16 sm:h-20 sm:w-20 rounded-xl flex items-center justify-center text-white font-semibold shadow-md shrink-0 bg-linear-to-br ${gradient}`}
      aria-label={alt}
    >
      {initials || ""}
    </div>
  );
};

const Resume = ({
  resumePdfUrl,
  experience,
  education,
  positionsOfResponsibility = [],
  codingProfiles = [],
}) => {
  const [activeTab, setActiveTab] = useState("experience");

  const buildLocationHref = (location, locationUrl) =>
    locationUrl ||
    (location
      ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          location
        )}`
      : undefined);

  const TimelineCard = ({ item, isEducation }) => {
    const cardLink = buildLocationHref(item.location, item.locationUrl);
    const Wrapper = cardLink ? "a" : "div";
    const locationColor = isEducation
      ? "text-sky-600 dark:text-sky-400"
      : "text-emerald-600 dark:text-emerald-400";
    const focusColor = isEducation
      ? "focus-visible:outline-sky-500"
      : "focus-visible:outline-emerald-500";

    return (
      <Wrapper
        href={cardLink}
        target={cardLink ? "_blank" : undefined}
        rel={cardLink ? "noreferrer" : undefined}
        className={`mt-8 block bg-white dark:bg-slate-900 rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 ${focusColor} hover:-translate-y-0.5`}
      >
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
          <Avatar
            src={item.image}
            alt={
              isEducation ? item.institution : item.company || item.organization
            }
            fallbackText={
              isEducation ? item.institution : item.company || item.organization
            }
          />
          <div className="flex-1 space-y-2">
            <div className="flex flex-col gap-1">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                {isEducation ? item.degree : item.position}
              </h3>
              <div
                className={`flex flex-wrap items-center gap-3 font-medium text-sm sm:text-base ${locationColor}`}
              >
                <span className="inline-flex items-center gap-2">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {isEducation ? (
                      <>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 14l9-5-9-5-9 5 9 5z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01-.665-6.479L12 14z"
                        />
                      </>
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    )}
                  </svg>
                  {isEducation
                    ? item.institution
                    : item.company || item.organization}
                </span>
                {item.location && (
                  <span
                    className={`inline-flex items-center gap-1 ${locationColor}`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 11a3 3 0 100-6 3 3 0 000 6z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5.5 10.5a7 7 0 1113 0c0 3.038-2.193 5.197-3.94 6.78-.88.81-1.65 1.52-2.19 2.22-.54-.7-1.31-1.41-2.19-2.22C7.693 15.697 5.5 13.538 5.5 10.5z"
                      />
                    </svg>
                    <span className="truncate max-w-48 sm:max-w-none">
                      {item.location}
                    </span>
                  </span>
                )}
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed text-justify">
              {item.description}
            </p>

            {isEducation && item.gpa && (
              <p className="mt-1 text-emerald-600 dark:text-emerald-400 font-semibold text-sm sm:text-base">
                Score: {item.gpa}
              </p>
            )}

            {!isEducation &&
              item.responsibilities &&
              item.responsibilities.length > 0 && (
                <div className="mt-3">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Key Responsibilities:
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-300">
                    {item.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              )}

            {!isEducation && item.technologies && (
              <div className="flex flex-wrap gap-2 pt-1">
                {item.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </Wrapper>
    );
  };

  const TimelineItem = ({ item, isEducation, index }) => (
    <div className="relative pl-8 pb-10 group" key={index}>
      <div className="absolute left-4 top-0 h-full w-0.5 bg-linear-to-b from-sky-500/70 to-emerald-500/70"></div>
      <div
        className={`absolute left-2 top-3 w-4 h-4 ${
          isEducation ? "bg-sky-500" : "bg-emerald-500"
        } rounded-full border-4 border-white dark:border-slate-800 group-hover:scale-150 transition-transform duration-300`}
      ></div>
      <div
        className={`mb-2 text-xs font-semibold ${
          isEducation
            ? "text-sky-600 dark:text-sky-400 bg-sky-100 dark:bg-sky-900/30"
            : "text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30"
        } px-3 py-1 rounded-full shadow-sm inline-block`}
      >
        {item.period}
      </div>

      <TimelineCard item={item} isEducation={isEducation} />
    </div>
  );

  return (
    <section id="resume" className="py-12 md:py-20">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-500 to-emerald-500">
              Resume
            </span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-sky-500 to-emerald-500 mx-auto rounded-full mb-6 md:mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-6 md:mb-8">
            My professional journey and qualifications
          </p>

          <a
            href={resumePdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-linear-to-r from-sky-500 to-emerald-500 text-white rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 text-sm sm:text-base"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            View Resume
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 md:mb-12">
          <button
            onClick={() => setActiveTab("experience")}
            className={`px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${
              activeTab === "experience"
                ? "bg-linear-to-r from-sky-500 to-emerald-500 text-white shadow-lg"
                : "bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-slate-600"
            }`}
          >
            Experience
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${
              activeTab === "education"
                ? "bg-linear-to-r from-sky-500 to-emerald-500 text-white shadow-lg"
                : "bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-slate-600"
            }`}
          >
            Education
          </button>
          <button
            onClick={() => setActiveTab("responsibility")}
            className={`px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 ${
              activeTab === "responsibility"
                ? "bg-linear-to-r from-sky-500 to-emerald-500 text-white shadow-lg"
                : "bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-slate-600"
            }`}
          >
            Responsibility
          </button>
        </div>

        <div className="max-w-4xl mx-auto">
          {activeTab === "experience" && (
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <TimelineItem
                  key={index}
                  item={exp}
                  isEducation={false}
                  index={index}
                />
              ))}
            </div>
          )}

          {activeTab === "education" && (
            <div className="space-y-8">
              {education.map((edu, index) => (
                <TimelineItem
                  key={index}
                  item={edu}
                  isEducation={true}
                  index={index}
                />
              ))}
            </div>
          )}

          {activeTab === "responsibility" && (
            <div className="space-y-8">
              {positionsOfResponsibility.map((pos, index) => (
                <TimelineItem
                  key={index}
                  item={pos}
                  isEducation={false}
                  index={index}
                />
              ))}
            </div>
          )}
        </div>

        {/* Coding Profiles Section */}
        {codingProfiles && codingProfiles.length > 0 && (
          <div className="mt-16 max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-500 to-emerald-500">
                Competitive Programming
              </span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {codingProfiles.map((profile, index) => (
                <a
                  key={index}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-slate-700 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="h-16 w-16 shrink-0 transition-transform duration-300 group-hover:scale-110">
                      {profile.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {profile.platform}
                      </h4>
                      <p className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm mb-2">
                        @{profile.username} • {profile.rating}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {profile.description}
                      </p>
                    </div>
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-emerald-500 transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Resume;
