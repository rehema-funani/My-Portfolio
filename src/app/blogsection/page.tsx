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
          <h3 className="text-red-400 text-xl font-medium tracking-wide">Portfolio</h3>
        </div>

        <nav className="absolute top-8 right-8">
          <ul className="flex space-x-8 text-gray-400">
            <li className="hover:text-red-400 cursor-pointer transition-colors duration-300">About</li>
            <li className="hover:text-red-400 cursor-pointer transition-colors duration-300">Services</li>
            <li className="hover:text-red-400 cursor-pointer transition-colors duration-300">Contact</li>
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
          <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-red-400 transition-colors duration-300">
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
            Web & Visual Designer
          </h2>

          <p className="text-gray-400 mb-12 leading-relaxed">
            I specialize in creating engaging digital experiences through thoughtful design
            and development. My approach begins with design exploration, followed by
            implementing robust frontend and backend solutions that bring these designs to life.
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