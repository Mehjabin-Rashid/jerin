import React from 'react';
import { CiLinkedin } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";

const Footer = () => {
  return (
    <footer className="bg-zinc-800 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Copyright */}
          <p className="text-white text-sm md:text-base text-center md:text-left">
            © {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex gap-5">
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white text-2xl hover:text-indigo-400 transition-colors duration-300"
            >
              <CiLinkedin />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-white text-2xl hover:text-indigo-400 transition-colors duration-300"
            >
              <VscGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
