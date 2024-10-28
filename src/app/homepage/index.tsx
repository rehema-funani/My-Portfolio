"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center h-screen bg-gray-900 text-white overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 text-center opacity-5 text-9xl font-bold tracking-widest">
        NODE PYTHON DJANGO REACT JAVASCRIPT NEXTJS 
      </div>

      {/* Main Content */}
      <div className="z-10 text-center max-w-3xl px-4">
        <h1 className="text-5xl md:text-6xl font-bold mt-2 text-red-400">
          Rehema Funani.
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold mt-2 text-gray-300">
          Full Stack Developer.
        </h2>
        <p className="text-lg mt-4 mb-8 text-gray-400">
          I'm a software engineer who translates ideas into fully functional
          features. Specialized in problem-solving to provide the best solutions
          and experienced to work in a fast-paced agile team.
        </p>

        {/* Buttons */}
        <div className="flex justify-center space-x-4">
          <a
            href="#contact"
            className="px-6 py-3 bg-red-400 text-white rounded-full shadow-md 
                     hover:bg-red-500 transition duration-300 ease-in-out
                     text-lg font-bold"
          >
            Contact Me
          </a>
          <Link href="/blogsection">
            <button 
              className="px-6 py-3 bg-transparent border-2 border-red-400 
                       text-white rounded-full hover:bg-red-400 
                       transition duration-300 ease-in-out
                       text-lg font-bold"
            >
              Check out my Blogs &rarr;
            </button>
          </Link>
        </div>
      </div>

      {/* Floating Image - Commented out but updated with new styling */}
      {/* <div className="absolute bottom-10 right-10 md:bottom-20 md:right-20 w-32 h-32 md:w-40 md:h-40">
        <Image
          src="/images/rehema.png"
          alt="Rehema Funani"
          width={160}
          height={160}
          className="rounded-full object-cover transform rotate-6 border-4 border-red-400"
        />
      </div> */}
    </section>
  );
}