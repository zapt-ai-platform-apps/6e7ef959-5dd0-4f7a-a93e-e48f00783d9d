import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaUser, FaClock } from 'react-icons/fa';

function CourseCard({ course }) {
  return (
    <div className="card hover:border-blue-500 hover:border transition-all duration-300">
      <div className="relative h-40 mb-4 overflow-hidden rounded-lg">
        <img 
          src={course.imageUrl} 
          alt={course.title} 
          className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 bg-blue-600 text-white px-2 py-1 text-xs font-bold">
          {course.provider}
        </div>
      </div>
      
      <h3 className="text-lg font-bold mb-2 line-clamp-2 h-14">{course.title}</h3>
      
      <div className="flex items-center text-sm text-gray-600 mb-2">
        <FaUser className="mr-1" />
        <span>{course.instructor}</span>
      </div>
      
      <div className="flex justify-between mb-3">
        <div className="flex items-center">
          <FaStar className="text-yellow-500 mr-1" />
          <span className="text-sm">{course.rating} ({course.reviewCount})</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <FaClock className="mr-1" />
          <span>{course.duration}</span>
        </div>
      </div>
      
      <p className="text-sm text-gray-600 mb-4 line-clamp-2">{course.description}</p>
      
      <div className="flex items-center justify-between mt-auto">
        <span className="font-bold text-blue-600">
          {course.isFree ? 'Free' : `$${course.price}`}
        </span>
        <Link 
          to={`/courses/${course.id}`} 
          className="btn-primary text-sm cursor-pointer"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default CourseCard;