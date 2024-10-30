"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";

const BlogPage = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left Section */}
      <div className="w-1/2 bg-gray-900 p-12 flex flex-col justify-center relative">
        <div className="absolute top-8 left-8">
        <li className="hover:text-red-400 text-gray-400 cursor-pointer transition-colors duration-300">
              <Link href="/">Home</Link>
            </li>        </div>

        <nav className="absolute top-8 right-8">
          <ul className="flex space-x-8 text-gray-400">
          <li className="hover:text-red-400 cursor-pointer transition-colors duration-300">
              <Link href="/blogsection">About</Link>
            </li>
            <li className="hover:text-red-400 cursor-pointer transition-colors duration-300">
              <Link href="/skills">Skills</Link>
            </li>
            <li className="hover:text-red-400 cursor-pointer transition-colors duration-300">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>


        <div className="relative w-64 h-64 mx-auto mb-8">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-400 to-gray-700 p-1 animate-pulse">
            <div className="absolute inset-1 bg-gray-900 rounded-full">
              <Image
                src="/images/rehema.png"
                alt="Profile"
                layout="fill"
                className="rounded-full object-cover p-2"
              />
            </div>
          </div>
        </div>

        {/* Added Social Links */}
        <div className="flex justify-center space-x-6 mt-8">
          <a href="https://github.com/rehema-funani" className="text-gray-400 hover:text-red-400 transition-colors duration-300">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/rehema-funani-1782842b3" className="text-gray-400 hover:text-red-400 transition-colors duration-300">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://x.com/RehemaFunani" className="text-gray-400 hover:text-red-400 transition-colors duration-300">
            <Twitter className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 bg-gray-800 p-12 flex flex-col justify-center">
        <div className="max-w-lg">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-1 bg-red-400 rounded-full"></div>
            <span className="text-gray-400 text-sm tracking-wider">PORTFOLIO</span>
          </div>

          <h1 className="text-6xl font-bold mb-6 text-white">
            MY <span className="text-red-400">WORK</span>
          </h1>

          <h2 className="text-xl text-gray-300 mb-8 font-medium">
            Full Stack Developer
          </h2>

          <p className="text-gray-400 mb-12 leading-relaxed">
          I am a passionate developer with a strong enthusiasm for designing and building efficient, scalable systems. My focus lies in creating robust APIs and seamlessly integrating them into applications, ensuring smooth data flow and exceptional user experiences.In addition to my backend expertise, I have a solid understanding of frontend development.I actively consume my APIs within frontend applications, using technologies such as React and Next.js to create dynamic, responsive user interfaces.
          </p>

          <div className="flex space-x-6">
            <Link href="/projects">
              <button className="group flex items-center space-x-2 bg-red-400 text-white px-8 py-4 rounded-full hover:bg-red-500 transition-all duration-300 font-bold">
                <span>View Projects</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>

            <Link href="/contact">
              <button className="px-8 py-4 border-2 border-red-400 text-red-400 rounded-full hover:bg-red-400 hover:text-white transition-all duration-300 font-bold">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;