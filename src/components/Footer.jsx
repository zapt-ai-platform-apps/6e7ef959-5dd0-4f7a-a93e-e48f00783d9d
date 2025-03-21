import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">EduBridge</h3>
            <p className="text-gray-300 text-sm">
              Making education accessible for Iranian students by providing simple
              access to Coursera's world-class courses and degree programs.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-white text-sm">
                  Browse Courses
                </Link>
              </li>
              <li>
                <Link to="/degrees" className="text-gray-300 hover:text-white text-sm">
                  Degree Programs
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-white text-sm">
                  Learning Resources
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white text-sm">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaGithub className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaTwitter className="h-6 w-6" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="text-gray-300 hover:text-white"
              >
                <FaEnvelope className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-300 text-sm">
            © {new Date().getFullYear()} EduBridge. Not affiliated with Coursera.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;