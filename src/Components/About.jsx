import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-zinc-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-lg text-rose-200 max-w-3xl mx-auto">
            I'm a passionate web developer with expertise in modern frontend technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* About Image */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="./image/hero.jpg" 
              alt="Profile" 
              className="w-full h-auto"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = './image/hero.jpg';
              }}
            />
          </div>
          
          {/* About Content */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-300">My Journey</h3>
            <p className="text-gray-200 mb-6">
              Passionate full-stack developer actively learning and building modern 
              web applications using the MERN stack. I specialize in creating responsive, 
              fast, and scalable solutions that enhance user experiences. Through hands-on 
              projects, I’ve developed functional applications and enjoy collaborating on 
              meaningful builds. Let’s connect and create something awesome!
            </p>
            
            <h3 className="text-2xl font-semibold mb-4 text-gray-300">My Approach</h3>
            <p className="text-gray-200 mb-6">
              I believe in clean, well-structured code and thoughtful user experiences.
              Every project is an opportunity to solve problems and create something
              that provides real value to users.
            </p>
            
            {/*<div className="flex flex-wrap gap-4 mt-8">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-lg font-semibold transition duration-300">
                Download CV
              </button>
              <button className="border border-indigo-600 text-indigo-600 hover:bg-indigo-50 py-2 px-6 rounded-lg font-semibold transition duration-300">
                Hire Me
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
