'use client';

import { useState } from 'react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillsData = [
    {
      name: 'HTML',
      level: 90,
      color: 'from-orange-400 to-red-500',
      icon: '🌐',
    },
    { name: 'CSS', level: 85, color: 'from-blue-400 to-blue-600', icon: '🎨' },
    {
      name: 'JavaScript',
      level: 88,
      color: 'from-yellow-400 to-orange-500',
      icon: '⚡',
    },
    {
      name: 'React',
      level: 92,
      color: 'from-cyan-400 to-blue-500',
      icon: '⚛️',
    },
    {
      name: 'Tailwind',
      level: 85,
      color: 'from-teal-400 to-cyan-500',
      icon: '💨',
    },
    {
      name: 'Node.js',
      level: 75,
      color: 'from-green-400 to-emerald-600',
      icon: '🚀',
    },
    {
      name: 'Express',
      level: 80,
      color: 'from-gray-400 to-gray-600',
      icon: '🛠️',
    },
    {
      name: 'MongoDB',
      level: 78,
      color: 'from-green-500 to-green-700',
      icon: '🍃',
    },
  ];

  const SkillCard = ({ skill, index }) => (
    <div
      className={`group relative bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 
        hover:border-gray-600/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl
        ${hoveredSkill === index ? 'shadow-2xl scale-105' : ''}`}
      onMouseEnter={() => setHoveredSkill(index)}
      onMouseLeave={() => setHoveredSkill(null)}
    >
      {/* Gradient overlay on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 
        rounded-2xl transition-opacity duration-500`}
      />

      {/* Skill header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{skill.icon}</span>
          <h3
            className="text-xl font-bold text-white group-hover:text-transparent 
            group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300
            transition-all duration-300"
          >
            {skill.name}
          </h3>
        </div>
        <span
          className={`text-sm font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${skill.color} 
          text-white shadow-lg`}
        >
          {skill.level}%
        </span>
      </div>

      {/* Progress bar */}
      <div className="relative">
        <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out
              shadow-lg relative overflow-hidden`}
            style={{
              width: hoveredSkill === index ? `${skill.level}%` : '0%',
              transition: 'width 1s ease-out',
            }}
          >
            {/* Shimmer effect */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
              -skew-x-12 animate-pulse"
            />
          </div>
        </div>

        {/* Skill level indicator */}
        <div
          className={`absolute top-0 h-3 w-1 bg-white rounded-full shadow-lg transition-all duration-1000 ease-out
            ${hoveredSkill === index ? 'opacity-100' : 'opacity-0'}`}
          style={{
            left: hoveredSkill === index ? `${skill.level}%` : '0%',
            transform: 'translateX(-50%)',
          }}
        />
      </div>

      {/* Decorative elements */}
      <div
        className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 
        rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"
      />
    </div>
  );

  return (
    <div
      id="skills"
      className="min-h-screen bg-black
      relative overflow-hidden py-20 px-6"
    >
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl " />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl " />
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        w-[600px] h-[600px] bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-6xl md:text-8xl font-black text-transparent bg-gradient-to-r 
            from-white via-gray-200 to-gray-400 bg-clip-text mb-6 tracking-tight"
          >
            My Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto rounded-full" />
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences with modern technologies and creative
            solutions
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillsData.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Skills;
