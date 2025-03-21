import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar, FaUser, FaClock, FaGlobe, FaBook, FaListAlt, FaChalkboardTeacher, FaFileDownload, FaGraduationCap } from 'react-icons/fa';
import { courses } from '@/data/courses';

function CourseDetailPage() {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    // Simulate API fetch
    setLoading(true);
    setTimeout(() => {
      const foundCourse = courses.find(c => c.id === id);
      setCourse(foundCourse);
      setLoading(false);
    }, 800);
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex justify-center">
        <div className="w-12 h-12 border-4 border-t-transparent border-blue-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900">Course not found</h2>
        <p className="mt-2 text-gray-600">The course you're looking for doesn't exist.</p>
        <Link to="/courses" className="mt-4 btn-primary inline-block cursor-pointer">
          Back to Courses
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link to="/courses" className="text-blue-600 hover:text-blue-800 flex items-center">
          ← Back to Courses
        </Link>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main content */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-64 w-full">
              <img
                src={course.imageUrl}
                alt={course.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-blue-600 text-white px-3 py-1 text-sm font-bold">
                {course.provider}
              </div>
            </div>
            
            <div className="p-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{course.title}</h1>
              
              <div className="flex flex-wrap items-center mb-4 gap-4">
                <div className="flex items-center">
                  <FaStar className="text-yellow-500 mr-1" />
                  <span>{course.rating} ({course.reviewCount} reviews)</span>
                </div>
                <div className="flex items-center">
                  <FaUser className="text-gray-500 mr-1" />
                  <span>{course.instructor}</span>
                </div>
                <div className="flex items-center">
                  <FaClock className="text-gray-500 mr-1" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <FaGlobe className="text-gray-500 mr-1" />
                  <span>English (Farsi subtitles available)</span>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex border-b">
                  <button
                    className={`px-4 py-2 font-medium cursor-pointer ${
                      activeTab === 'overview'
                        ? 'border-b-2 border-blue-600 text-blue-600'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                    onClick={() => setActiveTab('overview')}
                  >
                    Overview
                  </button>
                  <button
                    className={`px-4 py-2 font-medium cursor-pointer ${
                      activeTab === 'syllabus'
                        ? 'border-b-2 border-blue-600 text-blue-600'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                    onClick={() => setActiveTab('syllabus')}
                  >
                    Syllabus
                  </button>
                  <button
                    className={`px-4 py-2 font-medium cursor-pointer ${
                      activeTab === 'instructor'
                        ? 'border-b-2 border-blue-600 text-blue-600'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                    onClick={() => setActiveTab('instructor')}
                  >
                    Instructor
                  </button>
                  <button
                    className={`px-4 py-2 font-medium cursor-pointer ${
                      activeTab === 'access'
                        ? 'border-b-2 border-blue-600 text-blue-600'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                    onClick={() => setActiveTab('access')}
                  >
                    Access Guide
                  </button>
                </div>
                
                <div className="py-4">
                  {activeTab === 'overview' && (
                    <div>
                      <h3 className="text-xl font-bold mb-3">About this Course</h3>
                      <p className="text-gray-700 mb-4">{course.description}</p>
                      <p className="text-gray-700 mb-4">
                        This course is part of the {course.relatedDegree} program on Coursera. 
                        When you enroll, you'll have access to all videos, readings, quizzes, and 
                        programming assignments.
                      </p>
                      
                      <h3 className="text-xl font-bold mb-3 mt-6">What You'll Learn</h3>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        {Array(5).fill().map((_, i) => (
                          <li key={i}>Key learning outcome {i+1}</li>
                        ))}
                      </ul>
                      
                      <h3 className="text-xl font-bold mb-3 mt-6">Skills You'll Gain</h3>
                      <div className="flex flex-wrap gap-2">
                        {["Critical Thinking", "Problem Solving", "Communication", "Data Analysis", "Technical Writing"].map((skill) => (
                          <span key={skill} className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 'syllabus' && (
                    <div>
                      <h3 className="text-xl font-bold mb-3">Course Syllabus</h3>
                      
                      <div className="space-y-4">
                        {[1, 2, 3, 4].map((week) => (
                          <div key={week} className="border rounded-lg p-4">
                            <h4 className="font-bold text-lg mb-2">Week {week}: Module Title</h4>
                            <p className="text-gray-700 mb-3">
                              Description of what will be covered in this module of the course.
                            </p>
                            <div className="flex flex-col space-y-2">
                              <div className="flex items-center">
                                <FaBook className="text-blue-600 mr-2" />
                                <span>4 readings</span>
                              </div>
                              <div className="flex items-center">
                                <FaChalkboardTeacher className="text-blue-600 mr-2" />
                                <span>3 videos (45 minutes)</span>
                              </div>
                              <div className="flex items-center">
                                <FaListAlt className="text-blue-600 mr-2" />
                                <span>2 quizzes</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 'instructor' && (
                    <div>
                      <h3 className="text-xl font-bold mb-3">About the Instructor</h3>
                      
                      <div className="flex items-start mb-6">
                        <img
                          src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=100&height=100"
                          data-image-request="professional headshot of a university professor"
                          alt="Course instructor"
                          className="w-20 h-20 rounded-full mr-4 object-cover"
                        />
                        <div>
                          <h4 className="font-bold text-lg">{course.instructor}</h4>
                          <p className="text-gray-600 mb-2">Professor at University of Example</p>
                          <p className="text-gray-700">
                            Brief biography of the instructor highlighting their expertise in this field
                            and why they are qualified to teach this course.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 'access' && (
                    <div>
                      <h3 className="text-xl font-bold mb-3">Access Guide for Iranian Students</h3>
                      
                      <div className="bg-blue-50 p-4 rounded-lg mb-6">
                        <p className="text-gray-700 mb-3">
                          We understand that Iranian students face challenges accessing Coursera content.
                          Here's a step-by-step guide to help you successfully complete this course:
                        </p>
                        
                        <h4 className="font-bold mb-2">1. VPN Configuration</h4>
                        <p className="text-gray-700 mb-4">
                          Instructions for setting up a reliable VPN to access Coursera content.
                          We recommend using X, Y, or Z services for the best experience.
                        </p>
                        
                        <h4 className="font-bold mb-2">2. Alternative Payment Methods</h4>
                        <p className="text-gray-700 mb-4">
                          Information about payment options available to Iranian students
                          for accessing paid content or certificates.
                        </p>
                        
                        <h4 className="font-bold mb-2">3. Supplementary Materials</h4>
                        <p className="text-gray-700 mb-4">
                          We provide downloadable supplementary materials in case of connectivity issues.
                        </p>
                        
                        <div className="flex space-x-4 mt-6">
                          <a 
                            href="#" 
                            className="flex items-center text-blue-600 hover:text-blue-800 cursor-pointer"
                          >
                            <FaFileDownload className="mr-2" />
                            Download Access Guide
                          </a>
                          <a 
                            href="#" 
                            className="flex items-center text-blue-600 hover:text-blue-800 cursor-pointer"
                          >
                            <FaGraduationCap className="mr-2" />
                            Student Resources
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">
                {course.isFree ? 'Free' : `$${course.price}`}
              </h3>
              {!course.isFree && (
                <p className="text-gray-600 text-sm mb-4">
                  Financial aid available for eligible students
                </p>
              )}
              
              <a
                href="https://www.coursera.org"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center mb-3 cursor-pointer"
              >
                Enroll Now
              </a>
              
              <Link
                to="/resources"
                className="btn-secondary w-full text-center cursor-pointer"
              >
                Access Guide
              </Link>
            </div>
            
            <div className="border-t pt-4">
              <h4 className="font-bold mb-2">This course includes:</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaChalkboardTeacher className="text-gray-500 mr-2" />
                  <span>24 hours of video content</span>
                </li>
                <li className="flex items-center">
                  <FaBook className="text-gray-500 mr-2" />
                  <span>Readings and resources</span>
                </li>
                <li className="flex items-center">
                  <FaListAlt className="text-gray-500 mr-2" />
                  <span>Practice quizzes</span>
                </li>
                <li className="flex items-center">
                  <FaGraduationCap className="text-gray-500 mr-2" />
                  <span>Certificate upon completion</span>
                </li>
              </ul>
            </div>
            
            <div className="border-t mt-4 pt-4">
              <h4 className="font-bold mb-2">Related Courses:</h4>
              <ul className="space-y-2">
                {courses.filter(c => c.category === course.category && c.id !== course.id)
                  .slice(0, 3)
                  .map(relatedCourse => (
                    <li key={relatedCourse.id}>
                      <Link 
                        to={`/courses/${relatedCourse.id}`}
                        className="text-blue-600 hover:text-blue-800 cursor-pointer"
                      >
                        {relatedCourse.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetailPage;