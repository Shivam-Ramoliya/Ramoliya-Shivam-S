import React from "react";

// Portfolio Data Configuration
// Replace the placeholder data with your actual information

export const portfolioData = {
  // Personal Info
  personal: {
    name: "Shivam S. Ramoliya",
    titles: [
      "Passionate Developer, love to craft scalable web applications",
      "Exploring AI, Algorithms, and Systems Engineering",
      "AI-ML Enthusiast",
      "Problem Solver",
      "Tech Explorer",
    ],
    profileImage: "/Shivam-1.png",
    aboutImage: "/Shivam-2.png",
    bio: "I'm a passionate developer with deep expertise in modern web technologies and a keen eye for creating elegant, user-friendly applications. With a strong foundation in software engineering principles, I excel at designing scalable architectures, writing maintainable code, and implementing design patterns that stand the test of time. I transform ideas into reality through clean, efficient code and innovative solutions. My approach to problem-solving involves breaking down complex challenges into manageable components, analyzing edge cases, and applying algorithmic thinking to deliver robust solutions. I love tackling intricate technical problems, optimizing performance bottlenecks, and architecting systems that are both powerful and intuitive. Continuously learning new technologies and best practices allows me to stay at the forefront of web development while maintaining a deep commitment to code quality and software craftsmanship.",
  },

  // Statistics
  stats: [
    { value: "5+", label: "Projects" },
    { value: "99.54", label: "12th Percentile" },
    { value: "99.14", label: "JEE Mains Percentile" },
  ],

  // Projects
  projects: [
    {
      title: "NewsXpress",
      category: "Web / Mobile",
      description:
        "An AI-powered, personalized news aggregation platform featuring intelligent article summarization via Groq SDK, multi-language translation support, text-to-speech capabilities, and a hybrid ML recommendation engine combining content-based and collaborative filtering. Built with React and Tailwind CSS frontend, Node.js/Express backend with PostgreSQL database, and Python ML models achieving 100% test coverage with Jest and Vitest.",
      image: "/NewsXpress.png",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Python",
        "Tailwind CSS",
        "Groq API",
        "Google Cloud APIs",
        "Firebase Auth",
      ],
      liveUrl: "https://newsxpress-7bjk.onrender.com/",
      githubUrl: "https://github.com/Shivam-Ramoliya/NewsXpress",
    },
    {
      title: "TwinTrails",
      category: "Web / Mobile",
      description:
        "An advanced spatial navigation laboratory enabling real-time comparison between Dead Reckoning (IMU-based inertial navigation) and Visual SLAM (camera-first simultaneous localization and mapping) technologies. Features dual path visualization with grid/map views, obstacle detection with depth-based clustering, GPS integration, sensor fusion algorithms, and glassmorphic UI with OpenStreetMap integration. Supports touch gestures, live camera overlays with FAST corner detection, and real-time performance metrics.",
      image: "/TwinTrails.png",
      technologies: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Leaflet.js",
        "Device APIs",
        "MediaDevices API",
        "Geolocation API",
        "WebGL",
      ],
      liveUrl: "https://twintrails.vercel.app/",
      githubUrl: "https://github.com/Shivam-Ramoliya/TwinTrails",
    },
    {
      title: "TextUtils",
      category: "Web / Mobile",
      description:
        "A powerful React-based text manipulation utility application offering 12+ text transformation features including case conversions (uppercase, lowercase, sentence, capitalized, alternating, inverse), space removal, character filtering (numbers/punctuation removal), text reversal, Base64 encoding/decoding, and text-to-speech synthesis. Includes advanced analytics like vowel/consonant counting, character frequency analysis, word/character summaries, dark/light mode toggle, and seamless copy/clear functionality with a responsive Bootstrap interface.",
      image: "/TextUtils.png",
      technologies: ["React.js", "JavaScript", "HTML", "CSS", "Bootstrap 5"],
      liveUrl: "https://textutils-by-shivam.vercel.app/",
      githubUrl: "https://github.com/Shivam-Ramoliya/TextUtils",
    },
    {
      title: "DLS-System",
      category: "Web / Mobile",
      description:
        "An academic project dashboard for the Project DLS-System under the course SC107: Calculus, demonstrating the Duckworth-Lewis-Stern method used for determining target scores in limited-overs cricket matches interrupted by weather or other circumstances, with calculations made using calculus-based resources.",
      image: "/DLS-System.png",
      technologies: ["HTML", "CSS", "JavaScript", "Calculus/Matlab Concepts"],
      liveUrl: "https://shivam-ramoliya.github.io/DLS-System-SC107-Project/",
      githubUrl: "https://github.com/Shivam-Ramoliya/DLS-System-SC107-Project",
    },
    {
      title: "No-Capcoders: Club Management System",
      category: "DSA/Terminal",
      description:
        "A comprehensive DSA capstone project implementing an efficient club management system using optimal data structures. Designed to manage DA-IICT clubs with O(1) search by ID and O(n) by name/category using hash table-based architecture. Features member management (add/delete/view/search), club administration, role-based access control with password protection, CSV-based persistent storage, and category-based filtering. Demonstrates practical application of hash tables over traditional maps for superior search complexity without unnecessary lexicographical sorting.",
      image: "/noCapCoderz.png",
      technologies: [
        "C++",
        "Data Structures",
        "Hash Tables",
        "CSV File Handling",
      ],
      liveUrl: "https://github.com/Shivam-Ramoliya/noCapCoderz",
      githubUrl: "https://github.com/Shivam-Ramoliya/noCapCoderz",
    },
  ],

  // Skills
  skillCategories: [
    {
      title: "Languages",
      icon: "📚",
      skills: [
        {
          name: "C",
          svgIcon: (
            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="20" fill="#0071C5" />
              <text
                x="24"
                y="32"
                fontSize="20"
                fill="white"
                textAnchor="middle"
                fontWeight="bold"
              >
                C
              </text>
            </svg>
          ),
        },
        {
          name: "C++",
          svgIcon: (
            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="20" fill="#00599C" />
              <text
                x="24"
                y="32"
                fontSize="16"
                fill="white"
                textAnchor="middle"
                fontWeight="bold"
              >
                C++
              </text>
            </svg>
          ),
        },
        {
          name: "Python",
          svgIcon: (
            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
              <path
                fill="#3776AB"
                d="M24 8c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.2-16-16-16z"
              />
              <path
                fill="#FFD43B"
                d="M24 12c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12z"
              />
            </svg>
          ),
        },
        {
          name: "SQL",
          svgIcon: (
            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
              <rect width="48" height="48" fill="#00758F" rx="4" />
              <text
                x="24"
                y="32"
                fontSize="16"
                fill="white"
                textAnchor="middle"
                fontWeight="bold"
              >
                SQL
              </text>
            </svg>
          ),
        },
        {
          name: "Matlab",
          svgIcon: (
            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
              <rect width="48" height="48" fill="#0078D4" rx="4" />
              <text
                x="24"
                y="32"
                fontSize="14"
                fill="white"
                textAnchor="middle"
                fontWeight="bold"
              >
                MATLAB
              </text>
            </svg>
          ),
        },
        {
          name: "HTML",
          svgIcon: (
            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
              <path fill="#E34C26" d="M6 6h36l-3 34-15 4-15-4z" />
              <polygon points="24,24 18,24 16,16 32,16" fill="white" />
            </svg>
          ),
        },
        {
          name: "CSS",
          svgIcon: (
            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
              <path fill="#264DE4" d="M6 6h36l-3 34-15 4-15-4z" />
              <polygon points="24,24 18,24 16,16 32,16" fill="white" />
            </svg>
          ),
        },
        {
          name: "JavaScript",
          svgIcon: (
            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
              <rect width="48" height="48" fill="#F7DF1E" rx="4" />
              <text
                x="24"
                y="32"
                fontSize="18"
                fill="#323330"
                textAnchor="middle"
                fontWeight="bold"
              >
                JS
              </text>
            </svg>
          ),
        },
      ],
    },
    {
      title: "Developer Tools",
      icon: "🛠️",
      skills: [
        {
          name: "Git",
          svgIcon: (
            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="18" fill="#F1502F" />
              <path
                d="M24 12c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12z"
                fill="white"
              />
            </svg>
          ),
        },
        {
          name: "Github",
          svgIcon: (
            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="20" fill="#181717" />
              <path
                d="M24 8c-8.8 0-16 7.2-16 16 0 7.1 4.6 13.1 11 15.2.8.15 1.1-.35 1.1-.78v-2.8c-4.5.98-5.4-2.2-5.4-2.2-.7-1.8-1.8-2.3-1.8-2.3-1.5-1 .1-1 .1-1 1.6.12 2.5 1.7 2.5 1.7 1.5 2.6 3.9 1.8 4.8 1.4.15-1.1.6-1.8 1-2.2-3.5-.4-7.2-1.8-7.2-8 0-1.8.6-3.2 1.6-4.3-.2-.4-.7-2 .2-4.2 0 0 1.3-.4 4.3 1.6 1.2-.3 2.5-.5 3.8-.5 1.3 0 2.6.2 3.8.5 3-2 4.3-1.6 4.3-1.6.9 2.2.4 3.8.2 4.2 1 1.1 1.6 2.5 1.6 4.3 0 6.2-3.8 7.6-7.4 8 .6.5 1.1 1.5 1.1 3v4.5c0 .4.3.9 1.1.8 6.5-2.1 11-8.2 11-15.2 0-8.8-7.2-16-16-16z"
                fill="white"
              />
            </svg>
          ),
        },
        {
          name: "VS Code",
          svgIcon: (
            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
              <rect width="48" height="48" fill="#0078D4" rx="4" />
              <path
                fill="white"
                d="M12 16l16 12-16 12zm16 0l16 12-16 12z"
                opacity="0.8"
              />
            </svg>
          ),
        },
        {
          name: "Linux Shell",
          svgIcon: (
            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
              <rect width="48" height="48" fill="#000" rx="4" />
              <text
                x="24"
                y="30"
                fontSize="16"
                fill="#0F0"
                textAnchor="middle"
                fontFamily="monospace"
                fontWeight="bold"
              >
                $
              </text>
            </svg>
          ),
        },
        {
          name: "Figma",
          svgIcon: (
            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
              <circle cx="12" cy="12" r="5" fill="#F24E1E" />
              <circle cx="36" cy="12" r="5" fill="#A259FF" />
              <circle cx="36" cy="36" r="5" fill="#1ABCFE" />
              <circle cx="12" cy="36" r="5" fill="#0ACF83" />
              <rect x="7" y="7" width="10" height="10" fill="#F24E1E" rx="0" />
            </svg>
          ),
        },
        {
          name: "pgAdmin",
          svgIcon: (
            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
              <rect width="48" height="48" fill="#336791" rx="4" />
              <text
                x="24"
                y="32"
                fontSize="14"
                fill="white"
                textAnchor="middle"
                fontWeight="bold"
              >
                pgAdmin
              </text>
            </svg>
          ),
        },
        {
          name: "Jupyter Notebook",
          svgIcon: (
            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="20" fill="#F37626" />
              <circle cx="24" cy="12" r="2" fill="white" />
              <circle cx="24" cy="36" r="2" fill="white" />
              <circle cx="24" cy="24" r="2" fill="white" />
            </svg>
          ),
        },
        {
          name: "Cursor",
          svgIcon: (
            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
              <rect width="48" height="48" fill="#000" rx="4" />
              <path
                d="M12 12l12 24 6-12 12-6z"
                fill="#4A9EFF"
                stroke="white"
                strokeWidth="1"
              />
            </svg>
          ),
        },
      ],
    },
    {
      title: "Frameworks",
      icon: "⚡",
      skills: [
        {
          name: "React.js",
          svgIcon: (
            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="4" fill="#61DAFB" />
              <circle
                cx="24"
                cy="24"
                r="16"
                fill="none"
                stroke="#61DAFB"
                strokeWidth="2"
              />
              <circle cx="24" cy="10" r="2" fill="#61DAFB" />
              <circle cx="34" cy="32" r="2" fill="#61DAFB" />
              <circle cx="14" cy="32" r="2" fill="#61DAFB" />
            </svg>
          ),
        },
        {
          name: "Vite",
          svgIcon: (
            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
              <polygon points="24,6 42,38 6,38" fill="#646CFF" />
              <polygon points="24,14 34,30 14,30" fill="white" />
            </svg>
          ),
        },
        {
          name: "Node.js",
          svgIcon: (
            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
              <path
                fill="#68A063"
                d="M24 6c9.9 0 18 8.1 18 18s-8.1 18-18 18S6 33.9 6 24 14.1 6 24 6z"
              />
              <path fill="white" d="M20 22h8v2h-8zm0 4h8v2h-8z" />
            </svg>
          ),
        },
        {
          name: "Express.js",
          svgIcon: (
            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
              <rect width="48" height="48" fill="#000" rx="4" />
              <text
                x="24"
                y="32"
                fontSize="18"
                fill="white"
                textAnchor="middle"
                fontWeight="bold"
              >
                E
              </text>
            </svg>
          ),
        },
        {
          name: "Tailwind CSS",
          svgIcon: (
            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="20" fill="#38B2AC" />
              <path
                d="M16 28c-2.5 0-4-1-4-2.5s1.5-2.5 4-2.5c.2-.8.5-1.5 1-2C15 19 12 20.5 12 23c0 2 2.5 3.5 4.5 3.5.5.7.9 1.5 1.2 2.3z"
                fill="white"
                opacity="0.7"
              />
            </svg>
          ),
        },
      ],
    },
    {
      title: "Cloud/Databases",
      icon: "☁️",
      skills: [
        {
          name: "MongoDB",
          svgIcon: (
            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
              <path
                fill="#13AA52"
                d="M24 8c-7 3-10 10-10 14 0 7 4.8 12.5 10 14.5 5.2-2 10-7.5 10-14.5 0-4-3-11-10-14z"
              />
              <ellipse cx="24" cy="10" rx="3" ry="2" fill="#13AA52" />
            </svg>
          ),
        },
        {
          name: "Mongoose ODM",
          svgIcon: (
            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
              <rect width="48" height="48" fill="#800000" rx="4" />
              <circle
                cx="24"
                cy="24"
                r="10"
                fill="none"
                stroke="#fff"
                strokeWidth="1.5"
              />
            </svg>
          ),
        },
        {
          name: "PostgreSQL",
          svgIcon: (
            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="18" fill="#336791" />
              <path
                d="M24 14c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 4c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6z"
                fill="white"
              />
            </svg>
          ),
        },
        {
          name: "SupaBase",
          svgIcon: (
            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
              <rect x="8" y="8" width="32" height="32" fill="#3FCF8E" rx="4" />
              <path
                d="M20 16l8 18 8-18"
                stroke="white"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ),
        },
        {
          name: "Firebase",
          svgIcon: (
            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
              <path d="M24 38L8 28L12 8l8 14 4-8 16 12z" fill="#FFA000" />
              <path d="M24 38L8 28l4-4 12 8z" fill="#F57C00" />
            </svg>
          ),
        },
        {
          name: "Redis",
          svgIcon: (
            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
              <rect width="48" height="48" fill="#DC382D" rx="4" />
              <path
                d="M12 20l12-4 12 4v8l-12 4-12-4z"
                fill="white"
                opacity="0.8"
              />
            </svg>
          ),
        },
      ],
    },
    {
      title: "Libraries",
      icon: "📦",
      skills: [
        {
          name: "Mongoose",
          svgIcon: (
            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
              <rect width="48" height="48" fill="#800000" rx="4" />
              <circle
                cx="24"
                cy="24"
                r="10"
                fill="none"
                stroke="#fff"
                strokeWidth="1.5"
              />
            </svg>
          ),
        },
        {
          name: "React-Router-Dom",
          svgIcon: (
            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="3" fill="#F04231" />
              <path
                d="M24 8L32 14v12L24 32l-8-6V14z"
                fill="#F04231"
                opacity="0.3"
              />
              <path
                d="M16 20l8-6 8 6"
                fill="none"
                stroke="#F04231"
                strokeWidth="1.2"
              />
            </svg>
          ),
        },
        {
          name: "React Hook Form",
          svgIcon: (
            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
              <rect width="48" height="48" fill="#EC5990" rx="4" />
              <path
                d="M12 20h24v2H12zm0 4h24v2H12zm0 4h16v2H12z"
                fill="white"
                opacity="0.8"
              />
            </svg>
          ),
        },
        {
          name: "Bootstrap",
          svgIcon: (
            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
              <rect width="48" height="48" fill="#7952B3" rx="4" />
              <text
                x="24"
                y="32"
                fontSize="18"
                fill="white"
                textAnchor="middle"
                fontWeight="bold"
              >
                B
              </text>
            </svg>
          ),
        },
      ],
    },
    {
      title: "Coursework",
      icon: "📖",
      skills: [
        {
          name: "Data Structures & Algorithms",
          svgIcon: (
            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
              <rect width="48" height="48" fill="#4CAF50" rx="4" />
              <circle cx="12" cy="12" r="2" fill="white" />
              <circle cx="36" cy="12" r="2" fill="white" />
              <circle cx="12" cy="36" r="2" fill="white" />
              <circle cx="36" cy="36" r="2" fill="white" />
              <line
                x1="12"
                y1="12"
                x2="36"
                y2="12"
                stroke="white"
                strokeWidth="1.5"
              />
              <line
                x1="12"
                y1="12"
                x2="12"
                y2="36"
                stroke="white"
                strokeWidth="1.5"
              />
              <line
                x1="36"
                y1="12"
                x2="36"
                y2="36"
                stroke="white"
                strokeWidth="1.5"
              />
              <line
                x1="12"
                y1="36"
                x2="36"
                y2="36"
                stroke="white"
                strokeWidth="1.5"
              />
            </svg>
          ),
        },
        {
          name: "Database Management System",
          svgIcon: (
            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
              <rect width="48" height="48" fill="#FF9800" rx="4" />
              <ellipse cx="24" cy="14" rx="12" ry="4" fill="white" />
              <path
                d="M12 14v6c0 2.2 5.4 4 12 4s12-1.8 12-4v-6"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
              />
              <path
                d="M12 20v6c0 2.2 5.4 4 12 4s12-1.8 12-4v-6"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
              />
            </svg>
          ),
        },
        {
          name: "Design & Analysis of Algorithm",
          svgIcon: (
            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
              <rect width="48" height="48" fill="#9C27B0" rx="4" />
              <path
                d="M12 36L24 12L36 36"
                fill="none"
                stroke="white"
                strokeWidth="2"
              />
              <circle cx="24" cy="24" r="3" fill="white" />
            </svg>
          ),
        },
        {
          name: "Object Oriented Programming",
          svgIcon: (
            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
              <rect width="48" height="48" fill="#2196F3" rx="4" />
              <rect x="12" y="12" width="10" height="10" fill="white" rx="1" />
              <rect x="26" y="12" width="10" height="10" fill="white" rx="1" />
              <rect x="12" y="26" width="10" height="10" fill="white" rx="1" />
              <rect x="26" y="26" width="10" height="10" fill="white" rx="1" />
            </svg>
          ),
        },
        {
          name: "Computer Networks",
          svgIcon: (
            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
              <rect width="48" height="48" fill="#00BCD4" rx="4" />
              <circle cx="12" cy="24" r="3" fill="white" />
              <circle cx="24" cy="24" r="3" fill="white" />
              <circle cx="36" cy="24" r="3" fill="white" />
              <line
                x1="15"
                y1="24"
                x2="21"
                y2="24"
                stroke="white"
                strokeWidth="1.5"
              />
              <line
                x1="27"
                y1="24"
                x2="33"
                y2="24"
                stroke="white"
                strokeWidth="1.5"
              />
            </svg>
          ),
        },
        {
          name: "Human-Computer Interaction",
          svgIcon: (
            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
              <rect width="48" height="48" fill="#E91E63" rx="4" />
              <circle cx="18" cy="18" r="5" fill="white" />
              <path d="M18 24v8M14 28h8" stroke="white" strokeWidth="2" />
              <rect x="28" y="14" width="12" height="16" fill="white" rx="1" />
            </svg>
          ),
        },
      ],
    },
    {
      title: "Other Technologies",
      icon: "🚀",
      skills: [
        {
          name: "REST API",
          svgIcon: (
            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
              <rect width="48" height="48" fill="#61AFFE" rx="4" />
              <text
                x="24"
                y="32"
                fontSize="14"
                fill="white"
                textAnchor="middle"
                fontWeight="bold"
              >
                REST
              </text>
            </svg>
          ),
        },
        {
          name: "Agile",
          svgIcon: (
            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
              <rect width="48" height="48" fill="#009688" rx="4" />
              <path d="M12 24h8v8h-8zm12-8h8v16h-8z" fill="white" />
            </svg>
          ),
        },
        {
          name: "Jest",
          svgIcon: (
            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
              <rect width="48" height="48" fill="#C21325" rx="4" />
              <text
                x="24"
                y="32"
                fontSize="16"
                fill="white"
                textAnchor="middle"
                fontWeight="bold"
              >
                Jest
              </text>
            </svg>
          ),
        },
        {
          name: "Vercel",
          svgIcon: (
            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
              <polygon points="24,8 8,40 40,40" fill="#000" />
              <polygon points="24,16 16,32 32,32" fill="#fff" />
            </svg>
          ),
        },
        {
          name: "Render",
          svgIcon: (
            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
              <rect width="48" height="48" fill="#46E3B7" rx="4" />
              <text
                x="24"
                y="32"
                fontSize="16"
                fill="white"
                textAnchor="middle"
                fontWeight="bold"
              >
                R
              </text>
            </svg>
          ),
        },
        {
          name: "Railway",
          svgIcon: (
            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
              <rect width="48" height="48" fill="#0B0D0E" rx="4" />
              <path
                d="M24 10L36 16v16L24 38L12 32V16L24 10z"
                fill="none"
                stroke="#0EA5E9"
                strokeWidth="1.5"
              />
              <circle cx="24" cy="24" r="3" fill="#0EA5E9" />
            </svg>
          ),
        },
        {
          name: "Netlify",
          svgIcon: (
            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
              <rect width="48" height="48" fill="#00C7B7" rx="4" />
              <path d="M24 12l12 12-12 12-12-12z" fill="white" />
            </svg>
          ),
        },
        {
          name: "Lovable",
          svgIcon: (
            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
              <rect width="48" height="48" fill="#FF6B9D" rx="4" />
              <path
                d="M24 34c-5-4-10-8-10-12 0-3 2-5 5-5 2 0 4 1 5 3 1-2 3-3 5-3 3 0 5 2 5 5 0 4-5 8-10 12z"
                fill="white"
              />
            </svg>
          ),
        },
      ],
    },
    {
      title: "Soft Skills",
      icon: "💡",
      skills: [
        {
          name: "Team Collaboration",
          svgIcon: (
            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
              <rect width="48" height="48" fill="#673AB7" rx="4" />
              <circle cx="18" cy="18" r="4" fill="white" />
              <circle cx="30" cy="18" r="4" fill="white" />
              <path
                d="M18 24c-4 0-8 2-8 5v3h16v-3c0-3-4-5-8-5z"
                fill="white"
                opacity="0.7"
              />
              <path
                d="M30 24c-4 0-8 2-8 5v3h16v-3c0-3-4-5-8-5z"
                fill="white"
                opacity="0.7"
              />
            </svg>
          ),
        },
        {
          name: "Leadership",
          svgIcon: (
            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
              <rect width="48" height="48" fill="#FF5722" rx="4" />
              <circle cx="24" cy="16" r="5" fill="white" />
              <path d="M24 24l8 4v8l-8 4-8-4v-8z" fill="white" opacity="0.8" />
            </svg>
          ),
        },
        {
          name: "Problem Solving",
          svgIcon: (
            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
              <rect width="48" height="48" fill="#FFC107" rx="4" />
              <path d="M24 10l6 12h-12z" fill="white" />
              <rect
                x="18"
                y="24"
                width="12"
                height="12"
                fill="white"
                opacity="0.8"
              />
            </svg>
          ),
        },
        {
          name: "Communication",
          svgIcon: (
            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
              <rect width="48" height="48" fill="#03A9F4" rx="4" />
              <path d="M12 32V16l20-4v20l-20 4z" fill="white" />
              <circle cx="32" cy="24" r="4" fill="white" opacity="0.7" />
            </svg>
          ),
        },
        {
          name: "Time Management",
          svgIcon: (
            <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
              <rect width="48" height="48" fill="#607D8B" rx="4" />
              <circle
                cx="24"
                cy="24"
                r="12"
                fill="none"
                stroke="white"
                strokeWidth="2"
              />
              <path d="M24 24V14M24 24h8" stroke="white" strokeWidth="2" />
            </svg>
          ),
        },
      ],
    },
  ],

  // Resume
  resume: {
    pdfUrl: "/Shivam_S_Ramoliya.pdf",
    positionsOfResponsibility: [
      {
        position: "Core",
        organization: "Concours 2025",
        period: "Sept 2025 - Nov 2025",
        description:
          "Core member of Team Concours’25, organized the eSports event E-Verse with around 1000 eSports enthusiasts participating.",
        responsibilities: [
          "Led planning and coordination for E-Verse eSports event",
          "Managed participant experience for 1000+ gamers",
        ],
        image: "/Concours.png",
      },
      {
        position: "Coordinator",
        organization: "i.Fest 2024",
        period: "Nov 2024",
        description:
          "Leading Coordinator of e-Sports event named i.Clash in i.Fest 2024 in which about 500 gaming enthusiasts took part.",
        responsibilities: [
          "Oversaw end-to-end operations for i.Clash eSports tournament",
          "Coordinated logistics and engagement for 500+ participants",
        ],
        image: "/ifest.jpeg",
      },
    ],
    codingProfiles: [
      {
        platform: "LeetCode",
        username: "ShivamRS0712",
        url: "https://leetcode.com/u/ShivamRS0712/",
        rating: "1500+",
        description:
          "Active problem solver with consistent progress in algorithmic challenges",
        icon: (
          <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
            <rect width="48" height="48" fill="#FFA116" rx="8" />
            <image
              href="https://cdn.simpleicons.org/leetcode/ffffff"
              x="8"
              y="8"
              width="32"
              height="32"
              preserveAspectRatio="xMidYMid meet"
            />
          </svg>
        ),
      },
      {
        platform: "Codeforces",
        username: "ShivamRS0712",
        url: "https://codeforces.com/profile/ShivamRS0712",
        rating: "Specialist (1400+)",
        description:
          "Participating in competitive programming contests and improving problem-solving skills",
        icon: (
          <svg className="w-full h-full" viewBox="0 0 48 48" fill="none">
            <rect width="48" height="48" fill="#1F8ACB" rx="8" />
            <image
              href="https://cdn.simpleicons.org/codeforces/ffffff"
              x="8"
              y="8"
              width="32"
              height="32"
              preserveAspectRatio="xMidYMid meet"
            />
          </svg>
        ),
      },
    ],
    experience: [
      {
        position: "Social Work Intern",
        company: "Shri Bolbala Charitable Trust",
        period: "Dec 2024 - Jan 2025",
        description:
          "Participated in a humanitarian project in collaboration with an NGO, helping to organize and distribute essential items such as food, clothing, and blankets to families in need across neededs, reaching and supporting over 200+ individuals.",
        technologies: ["Social Work", "Team Collaboration", "Humanitarian Aid"],
        location: "Rajkot, Gujarat, India",
        locationUrl: "https://maps.app.goo.gl/eHyLwyV6PGAd51Si8",
        image: "/Bolbala_Trust.jpeg",
      },
    ],
    education: [
      {
        degree: "B.Tech - Information and Communication Technology",
        institution: "Dhirubhai Ambani University (Formerly DA-IICT)",
        period: "2023 - Present",
        description:
          "Current coursework includes Data Structures and Algorithms, DBMS, Design and Analysis of Algorithm, OOPs, and Introduction to ICT.",
        gpa: "6.55 CPI",
        location: "Gandhinagar, Gujarat, India",
        locationUrl: "https://maps.app.goo.gl/wVcUaGkWX3d9eH1r6",
        image: "/DAU.png",
      },
      {
        degree: "12TH (Science, GHSEB)",
        institution: "Purohit Science School",
        period: "2022-2023",
        description:
          "Secured 83.53% and achieved a 99.54 percentile rank in the GHSEB 12th Examination.",
        gpa: "83.53%",
        location: "Jamnagar, Gujarat, India",
        locationUrl: "https://maps.app.goo.gl/MyoYBGxDRTw9cmC37",
        image: "/Purohit_School.jpeg",
      },
      {
        degree: "10TH (GSEB)",
        institution: "Krishna Science School",
        period: "2020-2021",
        description: "Secured 95.33% in the GSEB 10th Examination.",
        gpa: "95.33%",
        location: "Jamnagar, Gujarat, India",
        locationUrl: "https://maps.app.goo.gl/MFhUZkHQi5GRCAgA9",
        image: "/Krishna_School.jpeg",
      },
    ],
  },

  // Contact
  contact: {
    email: "shivamramoliya2005@gmail.com",
    phone: "+91 79844 06542",
    location: "Jamnagar, Gujarat, India",
    socialLinks: [
      {
        name: "GitHub",
        url: "https://github.com/Shivam-Ramoliya/",
        icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        ),
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ramoliya-shivam-sureshbhai-753265287/",
        icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        ),
      },
      {
        name: "X",
        url: "https://x.com/_s_s_ramolia_07/",
        icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.6l-5.165-6.75-5.916 6.75h-3.308l7.73-8.835L.424 2.25h6.7l4.67 6.168L17.67 2.25h.574zm-1.106 17.92h1.828L5.283 4.126H3.32L17.138 20.17z" />
          </svg>
        ),
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/ss_ramoliya07/",
        icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        ),
      },
      {
        name: "Codeforces",
        url: "https://codeforces.com/profile/ShivamRS0712",
        icon: (
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
          >
            <title>Codeforces</title>
            <path
              d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 0.828 -0.672 1.5 -1.5 1.5h-3C0.673 21 0 20.328 0 19.5V9c0 -0.828 0.673 -1.5 1.5 -1.5h3zm9 -4.5c0.828 0 1.5 0.672 1.5 1.5v15c0 0.828 -0.672 1.5 -1.5 1.5h-3c-0.827 0 -1.5 -0.672 -1.5 -1.5v-15c0 -0.828 0.673 -1.5 1.5 -1.5h3zm9 7.5c0.828 0 1.5 0.672 1.5 1.5v7.5c0 0.828 -0.672 1.5 -1.5 1.5h-3c-0.828 0 -1.5 -0.672 -1.5 -1.5V12c0 -0.828 0.672 -1.5 1.5 -1.5h3z"
              fill="#99a1af"
            ></path>
          </svg>
        ),
      },
      {
        name: "LeetCode",
        url: "https://leetcode.com/u/ShivamRS0712/",
        icon: (
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
          >
            <title>LeetCode</title>
            <path
              d="M13.483 0a1.374 1.374 0 0 0 -0.961 0.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0 -1.209 2.104 5.35 5.35 0 0 0 -0.125 0.513 5.527 5.527 0 0 0 0.062 2.362 5.83 5.83 0 0 0 0.349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193 0.039 0.038c2.248 2.165 5.852 2.133 8.063 -0.074l2.396 -2.392c0.54 -0.54 0.54 -1.414 0.003 -1.955a1.378 1.378 0 0 0 -1.951 -0.003l-2.396 2.392a3.021 3.021 0 0 1 -4.205 0.038l-0.02 -0.019 -4.276 -4.193c-0.652 -0.64 -0.972 -1.469 -0.948 -2.263a2.68 2.68 0 0 1 0.066 -0.523 2.545 2.545 0 0 1 0.619 -1.164L9.13 8.114c1.058 -1.134 3.204 -1.27 4.43 -0.278l3.501 2.831c0.593 0.48 1.461 0.387 1.94 -0.207a1.384 1.384 0 0 0 -0.207 -1.943l-3.5 -2.831c-0.8 -0.647 -1.766 -1.045 -2.774 -1.202l2.015 -2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0 -1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38 -1.382 1.38 1.38 0 0 0 -1.38 -1.382z"
              fill="#99a1af"
            ></path>
          </svg>
        ),
      },
    ],
  },
};
