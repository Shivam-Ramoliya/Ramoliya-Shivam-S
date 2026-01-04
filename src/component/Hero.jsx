import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Hero = ({ profileImage, name, titles }) => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentTitle.length) {
            setDisplayText(currentTitle.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(currentTitle.slice(0, displayText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTitleIndex, titles]);

  return (
    <section className="flex items-center justify-center bg-linear-to-br from-slate-950 via-sky-950 to-slate-950 text-white px-4 py-8 md:py-16 lg:py-20 relative overflow-hidden min-h-screen">
      {/* Animated background elements (sizes kept for consistency/visuals) */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-sky-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute w-96 h-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content Grid: Stacked on small, 2 columns on medium and large */}
      <div className="max-w-[90rem] mx-auto grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center relative z-10">
        {/* Text Content: Order 2 on mobile, Order 1 on medium/large */}
        <div className="space-y-4 md:space-y-6 text-center md:text-left order-2 md:order-1 animate-slide-in-left">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-400 to-emerald-400 hover:animate-glow transition-all duration-300">
              {name}
            </span>
          </h1>

          <div className="h-16 md:h-20 flex items-center justify-center md:justify-start animate-slide-in-up animate-stagger-2">
            {/* Responsive Text Sizing for typewriter effect */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-300">
              <span className="text-emerald-300">{displayText}</span>
              <span className="animate-pulse">|</span>
            </h2>
          </div>

          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto md:mx-0 animate-slide-in-up animate-stagger-3">
            Passionate about creating elegant solutions to complex problems.
            Let's build something amazing together!
          </p>

          {/* Action Buttons: Responsive sizing and positioning */}
          <div className="flex gap-4 flex-wrap justify-center md:justify-start pt-2 md:pt-0 animate-slide-in-up animate-stagger-4">
            <Link
              to="/contact"
              className="px-6 py-3 sm:px-8 sm:py-4 bg-linear-to-r from-sky-500 to-emerald-500 rounded-full font-semibold hover:scale-110 hover:shadow-2xl hover:shadow-emerald-500/60 transition-all duration-300 shadow-lg text-sm sm:text-base transform hover:-translate-y-1"
            >
              Get In Touch
            </Link>
            <Link
              to="/projects"
              className="px-6 py-3 sm:px-8 sm:py-4 bg-white/10 backdrop-blur-sm rounded-full font-semibold hover:bg-white/20 hover:border-emerald-400/50 transition-all duration-300 border border-white/20 text-sm sm:text-base group"
            >
              View Work
              <span className="inline-block group-hover:translate-x-1 transition-transform duration-300 ml-1">
                →
              </span>
            </Link>
          </div>

          {/* Social Links: Responsive sizing and positioning */}
          <div className="flex gap-4 sm:gap-6 justify-center md:justify-start pt-4 flex-wrap animate-slide-in-up animate-stagger-5">
            <a
              href="https://github.com/Shivam-Ramoliya/"
              className="text-gray-400 hover:text-emerald-400 transition-all duration-300 hover:scale-125 hover:-translate-y-1 transform"
              title="GitHub"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/ramoliya-shivam-sureshbhai-753265287/"
              className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
              title="LinkedIn"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://x.com/_s_s_ramolia_07/"
              className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
              title="X"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.6l-5.165-6.75-5.916 6.75h-3.308l7.73-8.835L.424 2.25h6.7l4.67 6.168L17.67 2.25h.574zm-1.106 17.92h1.828L5.283 4.126H3.32L17.138 20.17z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/ss_ramoliya07/"
              className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
              title="Instagram"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://codeforces.com/profile/ShivamRS0712"
              className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
              title="Codeforces"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 sm:w-6 sm:h-6"
              >
                <title>Codeforces</title>
                <path
                  d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 0.828 -0.672 1.5 -1.5 1.5h-3C0.673 21 0 20.328 0 19.5V9c0 -0.828 0.673 -1.5 1.5 -1.5h3zm9 -4.5c0.828 0 1.5 0.672 1.5 1.5v15c0 0.828 -0.672 1.5 -1.5 1.5h-3c-0.827 0 -1.5 -0.672 -1.5 -1.5v-15c0 -0.828 0.673 -1.5 1.5 -1.5h3zm9 7.5c0.828 0 1.5 0.672 1.5 1.5v7.5c0 0.828 -0.672 1.5 -1.5 1.5h-3c-0.828 0 -1.5 -0.672 -1.5 -1.5V12c0 -0.828 0.672 -1.5 1.5 -1.5h3z"
                  fill="#99a1af"
                ></path>
              </svg>
            </a>
            <a
              href="https://leetcode.com/u/ShivamRS0712/"
              className="text-gray-400 hover:text-emerald-400 transition-colors duration-300"
              title="LeetCode"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 sm:w-6 sm:h-6"
              >
                <title>LeetCode</title>
                <path
                  d="M13.483 0a1.374 1.374 0 0 0 -0.961 0.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0 -1.209 2.104 5.35 5.35 0 0 0 -0.125 0.513 5.527 5.527 0 0 0 0.062 2.362 5.83 5.83 0 0 0 0.349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193 0.039 0.038c2.248 2.165 5.852 2.133 8.063 -0.074l2.396 -2.392c0.54 -0.54 0.54 -1.414 0.003 -1.955a1.378 1.378 0 0 0 -1.951 -0.003l-2.396 2.392a3.021 3.021 0 0 1 -4.205 0.038l-0.02 -0.019 -4.276 -4.193c-0.652 -0.64 -0.972 -1.469 -0.948 -2.263a2.68 2.68 0 0 1 0.066 -0.523 2.545 2.545 0 0 1 0.619 -1.164L9.13 8.114c1.058 -1.134 3.204 -1.27 4.43 -0.278l3.501 2.831c0.593 0.48 1.461 0.387 1.94 -0.207a1.384 1.384 0 0 0 -0.207 -1.943l-3.5 -2.831c-0.8 -0.647 -1.766 -1.045 -2.774 -1.202l2.015 -2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0 -1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38 -1.382 1.38 1.38 0 0 0 -1.38 -1.382z"
                  fill="#99a1af"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Profile Image: Order 1 on mobile, Order 2 on medium/large */}
        <div className="order-1 md:order-2 flex justify-center mt-10 md:mt-0 animate-slide-in-right">
          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-sky-500 to-emerald-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse group-hover:animate-float"></div>
            {/* Responsive image sizing: w-48 h-48 on small, w-64 h-64 on medium, w-96 h-96 on large */}
            <img
              src={profileImage}
              alt={name}
              className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-white/10 group-hover:border-emerald-400/50 transition-all duration-300 group-hover:scale-105 shine-effect"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
