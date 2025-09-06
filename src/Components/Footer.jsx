import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-8 md:py-12">
        {/* Top Section */}
        <div className="md:flex md:justify-between md:items-center">

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {/* Resources */}
            <div>
              <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow Us
              </h2>
              <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                <li>
                  <a
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline"
                  >
                    Github
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-200 dark:border-gray-700" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <span className="text-sm text-gray-500 dark:text-gray-400 text-center sm:text-left">
            © {new Date().getFullYear()} Flowbite. All Rights Reserved.
          </span>

          {/* Social Icons */}
          <div className="flex justify-center sm:justify-end gap-5">
            <a
              href="https://www.linkedin.com/in/mehjabin-rashid-jerin/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-600 dark:text-gray-300 text-2xl hover:text-indigo-500 transition-colors duration-300"
            >
              <CiLinkedin />
            </a>
            <a
              href="https://github.com/Mehjabin-Rashid"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-600 dark:text-gray-300 text-2xl hover:text-indigo-500 transition-colors duration-300"
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
