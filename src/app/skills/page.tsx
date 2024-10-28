"use client";

import React, { useState } from "react";
import { Code2, Server, Palette, Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-red-400 text-xl font-bold">Portfolio</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-300 hover:text-red-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-red-400"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="block px-3 py-2 text-gray-300 hover:text-red-400"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const SkillsSection = () => {
  const categories = [
    {
      icon: <Server className="h-8 w-8" />,
      title: "Backend",
      description: "Building robust APIs and server infrastructure",
      className: "text-red-400",
    },
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Development",
      description: "Creating responsive and dynamic applications",
      className: "text-red-400",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Frontend",
      description: "Crafting beautiful user interfaces",
      className: "text-red-400",
    },
  ];

  const skills = [
    { name: "Python", percentage: 90, category: "Backend" },
    { name: "Django", percentage: 85, category: "Backend" },
    { name: "Django REST Framework", percentage: 85, category: "Backend" },
    { name: "React", percentage: 80, category: "Frontend" },
    { name: "Next.js", percentage: 75, category: "Frontend" },
    { name: "DevOps", percentage: 70, category: "Development" },
    { name: "HTML & CSS", percentage: 90, category: "Frontend" },
    { name: "Kotlin", percentage: 65, category: "Development" },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <div className="p-8">
        {/* Categories Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-white shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <div className={`${category.className} mb-4`}>{category.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-red-400">
                {category.title}
              </h3>
              <p className="text-gray-600">{category.description}</p>
            </div>
          ))}
        </div>

        {/* Skills Progress Bars */}
       {/* Skills Progress Bars */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
  {skills.map((skill, index) => (
    <div key={index}>
    <div className="flex justify-between items-center mb-2">
      <span className="text-gray-300 font-medium">{skill.name}</span>
      <span className="text-gray-400">{skill.percentage} %</span>
    </div>
    <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
      <div 
        className="h-full bg-red-400 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${skill.percentage}%` }}
      />
    </div>
  </div>
))}
</div>

      </div>
    </div>
  );
};

export default SkillsSection;

