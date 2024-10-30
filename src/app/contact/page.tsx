// src/app/contact/page.tsx
import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contacts = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-400 font-sans">
      <header className="bg-gradient-to-r from-red-400/10 to-gray-800 py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-red-400 mb-4">Connect with Me</h1>
          <p className="text-lg text-gray-400 mb-8">
            I create outstanding solutions to help your business thrive
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-md shadow-lg">
            <h2 className="text-2xl font-bold text-red-400 mb-4">Location</h2>
            <p className="text-gray-600">Nairobi, Kenya</p>
          </div>
          <div className="bg-white p-6 rounded-md shadow-lg">
            <h2 className="text-2xl font-bold text-red-400 mb-4">Phone</h2>
            <p className="text-gray-600">+254 74253 0058</p>
          </div>
          <div className="bg-white p-6 rounded-md shadow-lg">
            <h2 className="text-2xl font-bold text-red-400 mb-4">Email</h2>
            <p className="text-gray-600">rehemafunan@gmail.com</p>
          </div>
          <div className="bg-white p-6 rounded-md shadow-lg">
            <h2 className="text-2xl font-bold text-red-400 mb-4">Social</h2>
            <div className="flex space-x-4">
              <a href="https://x.com/RehemaFunani" className="text-gray-600 hover:text-red-400">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.linkedin.com/in/rehema-funani-1782842b3" className="text-gray-600 hover:text-red-400">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com/rehema-funani" className="text-gray-600 hover:text-red-400">
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contacts;
