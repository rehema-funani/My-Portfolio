"use client"
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Code2, ChevronLeft, ChevronRight, Github } from 'lucide-react';

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  const projects = [
    {
      title: "Auth System",
      description: "Secure authentication system with Sign Up, Sign In, and SSO integration using OAuth2.0 and JWT tokens for enhanced security",
      category: "development",
      image: "/images/auth-system.png",
      link: "/projects/auth",
      tech: ["NextAuth.js", "JWT", "OAuth"],
      github: "https://github.com/yourusername/auth-project"
    },
    {
      title: "Design Concept",
      description: "UI/UX design focusing on user experience with modern design patterns and intuitive interfaces",
      category: "design",
      image: "/images/design-a.png",
      link: "https://www.figma.com/design/53MyXIIv6x3KPAFbZpyBGj/Inyange-Design?node-id=22-3&node-type=canvas&t=z4VBq6PuXetaCnQz-0",
      tech: ["Figma", "UI/UX"],
    },
    {
      title: "Portfolio Site",
      description: "My Next.js portfolio with custom REST APIs and modern design principles",
      category: "development",
      image: "/images/portfolio.png",
      link: "/projects/portfolio",
      tech: ["Next.js", "REST API"],
    },
    {
      title: "E-Commerce",
      description: "Full-stack platform with RESTful API integration and secure payment processing",
      category: "development",
      image: "/images/ecommerce.png",
      link: "https://inyange-frontend-z5s3.vercel.app/",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Designs",
      description: "Collection of UI/UX Designs showcasing modern web interfaces and user experiences",
      category: "design",
      image: "/images/blogging.png",
      link: "http://be.net/rehemafunani",
      tech: ["Figma", "Adobe XD"],
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  useEffect(() => {
    if (autoplay) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => 
          prev === filteredProjects.length - 1 ? 0 : prev + 1
        );
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [autoplay, filteredProjects.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === filteredProjects.length - 1 ? 0 : prev + 1
    );
    setAutoplay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? filteredProjects.length - 1 : prev - 1
    );
    setAutoplay(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 p-8 flex flex-col">
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-red-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-400/10 rounded-full blur-3xl" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto mb-16">
        <div className="flex flex-col items-center gap-8">
          {/* Header Section */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-12 h-1 bg-red-400 rounded-full"></div>
              <span className="text-gray-400 text-sm tracking-wider">PORTFOLIO</span>
              <div className="w-12 h-1 bg-red-400 rounded-full"></div>
            </div>
            
            <h1 className="text-6xl font-bold text-white text-center">
              My <span className="text-red-400">Projects</span>
            </h1>
            
            <p className="text-lg text-gray-400 text-center max-w-2xl">
              Specializing in building robust REST APIs and creating seamless frontend integrations. 
              Full-stack developer with expertise in API development and consumption.
            </p>
            
            <Link href="/skills">
              <button className="flex items-center gap-2 px-8 py-4 bg-red-400 text-white rounded-full hover:bg-red-500 transition-all duration-300 font-bold">
                <Code2 className="w-5 h-5" />
                View My Skills
              </button>
            </Link>
          </div>
          
          {/* Category Filters */}
          <div className="flex gap-4 p-1 bg-gray-800 rounded-full">
            {['all', 'design', 'development'].map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setCurrentSlide(0);
                }}
                className={`px-8 py-3 rounded-full transition-all duration-300 font-medium ${
                  activeCategory === category 
                    ? 'bg-red-400 text-white shadow-lg' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Carousel */}
      <div className="relative z-10 flex-grow flex items-center">
        <div className="w-full max-w-6xl mx-auto px-4">
          <div className="relative">
            {/* Project Cards */}
            <div className="overflow-hidden relative rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {filteredProjects.map((project, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="p-4">
                      <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-red-400/50 transition-all duration-300">
                        <div className="relative h-80 w-full">
                          <Image
                            src={project.image}
                            alt={project.title}
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-6">
                            <h3 className="text-2xl font-bold text-white mb-2">
                              {project.title}
                            </h3>
                            <p className="text-gray-300 mb-4">
                              {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.tech?.map((tech, i) => (
                                <span key={i} className="text-xs px-3 py-1 bg-gray-700 text-gray-300 rounded-full">
                                  {tech}
                                </span>
                              ))}
                            </div>
                            <div className="flex items-center justify-between">
                              <Link href={project.link}>
                                <button className="px-6 py-2 bg-red-400 text-white rounded-full hover:bg-red-500 transition-colors duration-300">
                                  View Project
                                </button>
                              </Link>
                              {project.github && (
                                <Link href={project.github}>
                                  <Github className="w-6 h-6 text-gray-400 hover:text-white transition-colors" />
                                </Link>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 flex items-center justify-center bg-red-400 text-white rounded-full shadow-lg hover:bg-red-500 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 flex items-center justify-center bg-red-400 text-white rounded-full shadow-lg hover:bg-red-500 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Navigation */}
            <div className="flex justify-center mt-6 gap-2">
              {filteredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                    setAutoplay(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-red-400 w-6' : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;


