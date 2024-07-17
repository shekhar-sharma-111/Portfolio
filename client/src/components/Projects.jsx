import React from 'react';

const projects = [

  {
    name: 'Online Voting System',
    description: 'Platform for online voting using Mern stack technologies.',
    codeLink: 'https://github.com/shekhar-sharma-111/Online-Voting-System',
    liveLink: '',
  },
  {
    name: 'Portfolio',
    description: 'Personal Portfolio Website using MERN  and Tailwind CSS',
    codeLink: 'https://github.com/shekhar-sharma-111/Portfolio',
    liveLink: 'https://portfolio-shekhar-sharmas-projects-52c851c1.vercel.app/',
  },
  {
    name: 'Ecommerce',
    description: 'Online Shoping Website using MERN stack and Tailwind CSS',
    codeLink: 'https://github.com/shekhar-sharma-111/Ecommerce',
    liveLink: '',
  },
    {
    name: 'Password generator',
    description: 'HTML CSS ans JS',
    codeLink: '',
    liveLink: '',
  },
  {
    name: 'Unit Converter',
    description: 'Uint converter for length conversion using HTML CSS and Js',
    codeLink: 'https://github.com/shekhar-sharma-111/Unit-Converter',
      liveLink: 'https://unit-converter-flax-two.vercel.app/',
  },
  {
    name: 'Temp. Converter',
    description: 'Temperature converter for temp conversion using HTML CSS and Js',
    codeLink: 'https://github.com/shekhar-sharma-111/OIBSIP_TASK3_LEVEL3_temperature_converter',
    liveLink: 'https://temperature-converter-orpin-six.vercel.app/',
  },

  {
    name: 'Calculator',
    description: 'Calculator using HTMl CSS and JS',
    codeLink: 'https://github.com/shekhar-sharma-111/Calculator',
    liveLink: 'https://calculator-xi-tan-40.vercel.app/',
  },
  {
    name: 'Digital Clock',
    description: 'Calculator using HTMl CSS and JS',
    codeLink: 'https://github.com/shekhar-sharma-111/DIGITAL-CLOCK',
    liveLink: 'https://digital-clock-liard-pi.vercel.app/',
  },
 
  // Add more projects as needed
];

export default function Projects() {
  return (
    <section id='projects' className="bg-black min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-white text-center mb-12  hover:text-indigo-600">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.name} className="border border-gray-700 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold text-white mb-4">{project.name}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex justify-between">
                <a
                  href={project.codeLink}
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
                {project.liveLink&& <a
                  href={project.liveLink}
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
