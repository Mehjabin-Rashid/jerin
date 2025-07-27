import React from "react";

export default function HeroSection() {
  return (
    <section className="relative bg-zinc-700 text-white">
      {/* Container to center content and apply padding - Updated to match Menubar and Footer zinc-700 background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Hello, my name Mehjabin Rashid
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-gray-300">
            Web Designer, Web Developer, Front End Developer, Apps Designer, Apps Developer
          </p>
        </div>

        {/* Hero Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="./image/mypic.jpg" 
            alt="Hero Illustration"
            className="w-full h-auto rounded-full py-10 px-10 shadow-lg"
          />
          {/* Fixed: Removed '/public' from the image path - Vite serves the public folder at the root */}
        </div>
      </div>

      {/* Optional background overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-zinc-800/60 to-indigo-900/30 pointer-events-none"></div>
    </section>
  );
}
