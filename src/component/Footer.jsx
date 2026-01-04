import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full z-40 bg-slate-950/50 backdrop-blur-2xl border-t border-white/10 text-white py-4">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-sm text-gray-400">
          © {currentYear} Shivam S. Ramoliya. Built with React & Tailwind CSS.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
