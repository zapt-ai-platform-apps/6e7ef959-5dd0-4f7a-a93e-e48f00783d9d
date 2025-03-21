import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBook, FaFileAlt, FaVideo, FaQuestionCircle, FaDownload, FaLaptop, FaCreditCard, FaFileContract, FaRegFileAlt } from 'react-icons/fa';

function ResourcesPage() {
  const [activeTab, setActiveTab] = useState('access-guides');
  
  const resources = {
    'access-guides': [
      {
        title: 'VPN Setup Guide for Coursera',
        description: 'Step-by-step instructions for configuring reliable VPNs to access Coursera content from Iran.',
        icon: <FaLaptop className="text-blue-600" />,
        type: 'PDF Guide'
      },
      {
        title: 'Alternative Payment Methods',
        description: 'Guide to payment options available for Iranian students to access Coursera paid content.',
        icon: <FaCreditCard className="text-blue-600" />,
        type: 'PDF Guide'
      },
      {
        title: 'Course Enrollment Walkthrough',
        description: 'Visual guide to enrolling in courses and navigating Coursera from restricted regions.',
        icon: <FaRegFileAlt className="text-blue-600" />,
        type: 'Tutorial'
      },
      {
        title: 'Financial Aid Application',
        description: 'Step-by-step guide to successfully applying for Coursera\'s financial aid program.',
        icon: <FaFileContract className="text-blue-600" />,
        type: 'PDF Guide'
      }
    ],
    'study-materials': [
      {
        title: 'Data Science Supplementary Notes',
        description: 'Additional reading materials and practice problems for data science courses.',
        icon: <FaBook className="text-blue-600" />,
        type: 'PDF'
      },
      {
        title: 'Computer Science Algorithm Workbook',
        description: 'Practice exercises for common algorithm and data structure problems.',
        icon: <FaFileAlt className="text-blue-600" />,
        type: 'Workbook'
      },
      {
        title: 'Business Analytics Case Studies',
        description: 'Real-world case studies to supplement business and analytics courses.',
        icon: <FaFileAlt className="text-blue-600" />,
        type: 'PDF'
      },
      {
        title: 'Programming Practice Problems',
        description: 'Coding exercises and solutions for computer science courses.',
        icon: <FaFileAlt className="text-blue-600" />,
        type: 'Code Repository'
      }
    ],
    'video-tutorials': [
      {
        title: 'Navigating Coursera Interface',
        description: 'Video walkthrough of Coursera\'s platform and key features.',
        icon: <FaVideo className="text-blue-600" />,
        type: 'Video Tutorial'
      },
      {
        title: 'VPN Configuration Tutorial',
        description: 'Visual guide to setting up VPNs for educational access.',
        icon: <FaVideo className="text-blue-600" />,
        type: 'Video Tutorial'
      },
      {
        title: 'Course Assignment Submission Tips',
        description: 'Best practices for submitting assignments on Coursera.',
        icon: <FaVideo className="text-blue-600" />,
        type: 'Video Tutorial'
      },
      {
        title: 'Participating in Course Forums',
        description: 'How to get the most out of course discussion forums.',
        icon: <FaVideo className="text-blue-600" />,
        type: 'Video Tutorial'
      }
    ],
    'faqs': [
      {
        title: 'Payment and Financial Aid FAQs',
        description: 'Answers to common questions about course payments and financial aid.',
        icon: <FaQuestionCircle className="text-blue-600" />,
        type: 'FAQ Document'
      },
      {
        title: 'Technical Access FAQs',
        description: 'Solutions to common technical issues when accessing Coursera from Iran.',
        icon: <FaQuestionCircle className="text-blue-600" />,
        type: 'FAQ Document'
      },
      {
        title: 'Degree Program FAQs',
        description: 'Information about applying to and completing online degree programs.',
        icon: <FaQuestionCircle className="text-blue-600" />,
        type: 'FAQ Document'
      },
      {
        title: 'Certificate Recognition FAQs',
        description: 'Information about the recognition and validity of Coursera certificates.',
        icon: <FaQuestionCircle className="text-blue-600" />,
        type: 'FAQ Document'
      }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900">Learning Resources</h1>
        <p className="mt-4 text-xl text-gray-500">
          Comprehensive guides and materials to help Iranian students succeed with Coursera
        </p>
      </div>
      
      {/* Resources introduction */}
      <div className="bg-blue-50 rounded-lg p-6 mb-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
            <h2 className="text-2xl font-bold mb-4">How These Resources Help</h2>
            <p className="text-gray-700 mb-4">
              We've created a comprehensive set of resources specifically designed to help Iranian students
              overcome barriers to accessing Coursera content. These guides address technical access issues,
              payment challenges, and provide supplementary learning materials.
            </p>
            <p className="text-gray-700">
              All resources are regularly updated to ensure they remain effective with changing conditions
              and platform updates.
            </p>
          </div>
          <div className="md:w-1/3">
            <img
              src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=300&height=300"
              data-image-request="students studying with laptops in a library"
              alt="Students studying"
              className="rounded-lg shadow-md w-full"
            />
          </div>
        </div>
      </div>
      
      {/* Tabs navigation */}
      <div className="border-b border-gray-200 mb-8">
        <nav className="-mb-px flex space-x-8">
          {[
            { id: 'access-guides', name: 'Access Guides', icon: <FaLaptop className="mr-2" /> },
            { id: 'study-materials', name: 'Study Materials', icon: <FaBook className="mr-2" /> },
            { id: 'video-tutorials', name: 'Video Tutorials', icon: <FaVideo className="mr-2" /> },
            { id: 'faqs', name: 'FAQs', icon: <FaQuestionCircle className="mr-2" /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center cursor-pointer`}
            >
              {tab.icon} {tab.name}
            </button>
          ))}
        </nav>
      </div>
      
      {/* Resource cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {resources[activeTab].map((resource, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
            <div className="flex items-center mb-4">
              <div className="p-3 rounded-full bg-blue-100 mr-4">
                {resource.icon}
              </div>
              <div>
                <h3 className="font-bold">{resource.title}</h3>
                <span className="text-sm text-blue-600">{resource.type}</span>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-6">{resource.description}</p>
            <a
              href="#"
              className="flex items-center text-blue-600 font-medium hover:text-blue-800 cursor-pointer"
            >
              <FaDownload className="mr-2" /> Download
            </a>
          </div>
        ))}
      </div>
      
      {/* Request Resource section */}
      <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Can't Find What You Need?</h2>
        <p className="text-lg mb-6">
          If you're facing a specific challenge that isn't addressed in our resources, let us know and we'll create a solution.
        </p>
        <Link
          to="/about"
          className="btn-primary inline-block cursor-pointer"
        >
          Request a Resource
        </Link>
      </div>
    </div>
  );
}

export default ResourcesPage;