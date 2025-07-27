import React from 'react';
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="bg-zinc-700 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">

        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Get in Touch
        </h2>

        {/* Description */}
        <p className="text-rose-200 text-lg mb-10">
          Connect with me through these platforms:
        </p>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {/* WhatsApp - Uncomment to Enable */}
          {/* 
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 border rounded-xl shadow-md hover:shadow-lg transition duration-300 hover:text-green-500"
          >
            <FaWhatsapp className="text-4xl mb-2" />
            <span className="font-medium text-lg">WhatsApp</span>
          </a> 
          */}

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/mehjabin-rashid-jerin/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 border rounded-xl shadow-md hover:shadow-lg transition duration-300 hover:text-fuchsia-300"
          >
            <FaLinkedin className="text-4xl mb-2" />
            <span className="font-medium text-lg">LinkedIn</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Mehjabin-Rashid"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 border rounded-xl shadow-md hover:shadow-lg transition duration-300 hover:text-fuchsia-300"
          >
            <FaGithub className="text-4xl mb-2" />
            <span className="font-medium text-lg">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
