import React, { useState } from 'react';

const Skills = () => {
  const [skillCategories, setSkillCategories] = useState([
    {
      title: 'Frontend Development',
      skills: [
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 80 },
        { name: 'JavaScript', level: 85 },
        { name: 'React', level: 80 },
        { name: 'Tailwind CSS', level: 85 },
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 70 },
        { name: 'Express', level: 65 },
        { name: 'MongoDB', level: 60 },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 80 },
        { name: 'VS Code', level: 85 },
        { name: 'WebStorm', level: 60 },
      ],
    },
  ]);

  // Function to handle updating skill levels
  const handleChange = (categoryIndex, skillIndex, newLevel) => {
    setSkillCategories((prevCategories) => {
      const updatedCategories = [...prevCategories];
      updatedCategories[categoryIndex].skills[skillIndex].level = newLevel;
      return updatedCategories;
    });
  };

  return (
    <section id="skills" className="py-16 bg-zinc-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Here are my technical skills and competencies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-zinc-800 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-6 text-indigo-400">
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span>{skill.name}</span>
                      <input
                        type="number"
                        value={skill.level}
                        min="0"
                        max="100"
                        className="w-16 text-black px-1 rounded"
                        onChange={(e) =>
                          handleChange(
                            categoryIndex,
                            skillIndex,
                            Number(e.target.value)
                          )
                        }
                      />
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-indigo-500 h-2.5 rounded-full transition-all duration-300"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
