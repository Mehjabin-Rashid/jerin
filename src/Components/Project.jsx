import React from "react";

const Project = () => {
  return (
    <>
      {/* Google Font for consistent typography (optional in component) */}
      <link
        href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;700&display=swap"
        rel="stylesheet"
      />

      {/* Main Container for Project Cards */}
      <div
        id="projects"
        className="flex flex-wrap justify-center gap-6 px-4 py-10 bg-zinc-700 font-[Jost]"
      >
        {/* List of individual cards */}
        {[
          {
            number: "01",
            color: "bg-green-100 text-green-600",
            title: "Weather App",
            description:
              "Track real-time weather in any city using live API data. Built with React and Tailwind CSS.",
            image:"public/image/Weather.jpg",
          },
          {
            number: "02",
            color: "bg-blue-100 text-blue-600",
            title: "Task Manager",
            description:
              "Organize your daily tasks efficiently with this user-friendly productivity app.",
            image:"public/image/Task.jpg",
          },
          {
            number: "03",
            color: "bg-orange-100 text-orange-600",
            title: "Budget Tracker",
            description:
              "Keep track of your income and expenses. Visualize where your money goes.",
            image:"public/image/Budget.jpg",
          },
        ].map((card, index) => (
          <div
            key={index}
            className="w-full sm:w-[45%] lg:w-[30%] p-5 rounded-xl shadow-md hover:shadow-lg transition bg-white flex flex-col justify-between"
          >
            {/* Card Number */}
            <div
              className={`text-3xl font-bold mb-4 w-fit px-3 py-1 rounded-full ${card.color}`}
            >
              {card.number}
            </div>

            {/* Project Title */}
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              {card.title}
            </h3>

            {/* Project Description */}
            <p className="text-sm text-gray-600 mb-4">{card.description}</p>

            {/* Project Image */}
            <div className="mt-auto">
              <img
                src={card.image}
                alt={`${card.title} Illustration`}
                className="w-full h-32 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Project;
