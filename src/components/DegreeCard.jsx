import React from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaClock, FaUniversity } from 'react-icons/fa';

function DegreeCard({ degree }) {
  return (
    <div className="card hover:border-blue-500 hover:border transition-all duration-300">
      <div className="relative h-40 mb-4 overflow-hidden rounded-lg">
        <img 
          src={degree.imageUrl} 
          alt={degree.title} 
          className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
        />
        <div className="absolute top-0 right-0 bg-green-600 text-white px-2 py-1 text-xs font-bold">
          {degree.type}
        </div>
      </div>
      
      <h3 className="text-lg font-bold mb-2 line-clamp-2 h-14">{degree.title}</h3>
      
      <div className="flex items-center text-sm text-gray-600 mb-2">
        <FaUniversity className="mr-1" />
        <span>{degree.university}</span>
      </div>
      
      <div className="flex justify-between mb-3">
        <div className="flex items-center text-sm text-gray-600">
          <FaGraduationCap className="mr-1" />
          <span>{degree.field}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <FaClock className="mr-1" />
          <span>{degree.duration}</span>
        </div>
      </div>
      
      <p className="text-sm text-gray-600 mb-4 line-clamp-3">{degree.description}</p>
      
      <div className="flex items-center justify-between mt-auto">
        <span className="font-bold text-blue-600">${degree.tuition}/year</span>
        <Link 
          to={`/courses?degree=${degree.id}`} 
          className="btn-primary text-sm cursor-pointer"
        >
          View Courses
        </Link>
      </div>
    </div>
  );
}

export default DegreeCard;