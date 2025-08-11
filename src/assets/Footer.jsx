import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#101517] text-white py-10 mt-8 shadow-inner">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">LetssBlog.com</h1>
        <p className="text-center text-sm md:text-base max-w-xl opacity-80 mb-2">
          LetssBlog.com is your modern platform for sharing stories, ideas, and expertise. Effortlessly create, customize, and grow your blog with intuitive tools and a vibrant community.
        </p>
        <span className="text-xs opacity-60">&copy; {new Date().getFullYear()} LetssBlog.com. All rights reserved. Abhinav Raman</span>
      </div>
    </footer>
  );
};

export default Footer;
