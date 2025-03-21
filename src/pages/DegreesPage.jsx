import React, { useState } from 'react';
import DegreeCard from '@/components/DegreeCard';
import { degrees } from '@/data/degrees';
import { FaUniversity, FaGraduationCap, FaGlobe } from 'react-icons/fa';

function DegreesPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filteredDegrees = activeFilter === 'all' 
    ? degrees 
    : degrees.filter(degree => degree.type === activeFilter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900">Degree Programs</h1>
        <p className="mt-4 text-xl text-gray-500">
          Earn accredited degrees from top global universities through Coursera
        </p>
      </div>
      
      {/* Degree information section */}
      <div className="bg-blue-50 rounded-lg p-6 mb-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
            <h2 className="text-2xl font-bold mb-4">Why Pursue an Online Degree?</h2>
            <p className="text-gray-700 mb-4">
              Online degrees from Coursera offer the same high-quality education as on-campus programs,
              but with the flexibility of remote learning. These accredited degrees are recognized globally
              and can significantly enhance your career prospects.
            </p>
            <p className="text-gray-700">
              With EduBridge's guidance, Iranian students can successfully navigate the process of
              enrolling in and completing these degree programs despite regional restrictions.
            </p>
          </div>
          <div className="md:w-1/3">
            <img
              src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=300&height=300"
              data-image-request="graduation ceremony with diverse students in caps and gowns"
              alt="Graduation ceremony"
              className="rounded-lg shadow-md w-full"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center mb-3">
              <FaUniversity className="text-blue-600 mr-2 text-xl" />
              <h3 className="font-bold">Accredited Universities</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Degrees offered by prestigious institutions recognized worldwide
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center mb-3">
              <FaGraduationCap className="text-blue-600 mr-2 text-xl" />
              <h3 className="font-bold">Global Recognition</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Credentials valued by employers around the world
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center mb-3">
              <FaGlobe className="text-blue-600 mr-2 text-xl" />
              <h3 className="font-bold">Remote Learning</h3>
            </div>
            <p className="text-gray-700 text-sm">
              Complete your degree from anywhere with internet access
            </p>
          </div>
        </div>
      </div>
      
      {/* Filters */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-md text-sm font-medium cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            All Programs
          </button>
          <button
            onClick={() => setActiveFilter("Bachelor's")}
            className={`px-4 py-2 rounded-md text-sm font-medium cursor-pointer ${
              activeFilter === "Bachelor's"
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            Bachelor's Degrees
          </button>
          <button
            onClick={() => setActiveFilter("Master's")}
            className={`px-4 py-2 rounded-md text-sm font-medium cursor-pointer ${
              activeFilter === "Master's"
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            Master's Degrees
          </button>
          <button
            onClick={() => setActiveFilter('Certificate')}
            className={`px-4 py-2 rounded-md text-sm font-medium cursor-pointer ${
              activeFilter === 'Certificate'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
            }`}
          >
            Professional Certificates
          </button>
        </div>
      </div>
      
      {/* Degree cards grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredDegrees.map((degree) => (
          <DegreeCard key={degree.id} degree={degree} />
        ))}
      </div>
      
      {/* Application process section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">Application Process</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              step: 1,
              title: 'Choose a Program',
              description: 'Browse available degree programs and select one that aligns with your goals.'
            },
            {
              step: 2,
              title: 'Check Requirements',
              description: 'Review admission requirements and prepare necessary documents.'
            },
            {
              step: 3,
              title: 'Apply with Support',
              description: 'Use our resources to navigate the application process and overcome regional barriers.'
            },
            {
              step: 4,
              title: 'Start Learning',
              description: 'Once accepted, begin your educational journey with ongoing support from EduBridge.'
            }
          ].map((item) => (
            <div key={item.step} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-4">
                {item.step}
              </div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA section */}
      <div className="mt-16 bg-blue-600 rounded-lg p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Need Help with Your Application?</h2>
        <p className="text-xl mb-6">
          Our team can guide you through every step of the application process
        </p>
        <a
          href="#"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 inline-block cursor-pointer"
        >
          Get Application Support
        </a>
      </div>
    </div>
  );
}

export default DegreesPage;