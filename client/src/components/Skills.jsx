
import React from 'react';

const skills = [
  { name: 'HTML', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1280px-HTML5_logo_and_wordmark.svg.png', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { name: 'CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1280px-CSS3_logo.svg.png', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { name: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/1280px-JavaScript-logo.png', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png', link: 'https://reactjs.org/' },
  { name: 'Node.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png', link: 'https://nodejs.org/' },
  { name: 'MongoDB', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc6nYbJje18p5tPU2DEHDxcXncvrVpHwvfwdfdIeCpIQDfpzaqZc6890o&s=10', link: 'https://www.mongodb.com/' },
  { name: 'Express', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Expressjs.png/1280px-Expressjs.png', link: 'https://expressjs.com/' },
  { name: 'C++', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQs86jDXWZu_DQ5-r-CXcGq7vdXZ4neXSqEW8CJJPL2a_MjOlCUnNPVKyf&s=10', link: 'https://en.wikipedia.org/wiki/C%2B%2B' },
  { name: 'Bootstrap', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png', link: 'https://getbootstrap.com/' },
  { name: 'Git', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1280px-Git-logo.svg.png', link: 'https://git-scm.com/' },
];

export default function Skills() {
  return (
    <section id='skills' className="bg-black min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-white text-center mb-12 hover:text-indigo-600">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <a
              key={skill.name}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-110 hover:shadow-xl"
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="h-16 w-16 mb-4"
              />
              <p className="text-white text-center">{skill.name}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
