import React, { useState, useEffect } from 'react';
import CourseCard from '@/components/CourseCard';
import SearchFilter from '@/components/SearchFilter';
import { courses } from '@/data/courses';

function CoursesPage() {
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 12;

  const filterOptions = {
    categories: [
      { value: 'computer-science', label: 'Computer Science' },
      { value: 'business', label: 'Business' },
      { value: 'data-science', label: 'Data Science' },
      { value: 'health', label: 'Health & Medicine' },
      { value: 'humanities', label: 'Humanities' },
      { value: 'math', label: 'Mathematics' },
      { value: 'personal-development', label: 'Personal Development' },
      { value: 'physical-science', label: 'Physical Science & Engineering' },
      { value: 'social-sciences', label: 'Social Sciences' },
      { value: 'language-learning', label: 'Language Learning' }
    ],
    levels: [
      { value: 'beginner', label: 'Beginner' },
      { value: 'intermediate', label: 'Intermediate' },
      { value: 'advanced', label: 'Advanced' },
      { value: 'all-levels', label: 'All Levels' }
    ],
    durations: [
      { value: 'short', label: 'Less than 4 weeks' },
      { value: 'medium', label: '1-3 months' },
      { value: 'long', label: '3+ months' }
    ],
    prices: [
      { value: 'free', label: 'Free' },
      { value: 'paid', label: 'Paid' }
    ]
  };

  const handleSearch = (query) => {
    setIsLoading(true);
    setTimeout(() => {
      if (!query) {
        setFilteredCourses(courses);
      } else {
        const searchResults = courses.filter(course => 
          course.title.toLowerCase().includes(query.toLowerCase()) ||
          course.instructor.toLowerCase().includes(query.toLowerCase()) ||
          course.description.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredCourses(searchResults);
      }
      setCurrentPage(1);
      setIsLoading(false);
    }, 500);
  };

  const handleFilter = (filters) => {
    setIsLoading(true);
    setTimeout(() => {
      let results = [...courses];
      
      // Apply category filter
      if (filters.category !== 'all') {
        results = results.filter(course => course.category === filters.category);
      }
      
      // Apply level filter
      if (filters.level !== 'all') {
        results = results.filter(course => course.level === filters.level);
      }
      
      // Apply duration filter
      if (filters.duration !== 'all') {
        results = results.filter(course => course.durationCategory === filters.duration);
      }
      
      // Apply price filter
      if (filters.price !== 'all') {
        if (filters.price === 'free') {
          results = results.filter(course => course.isFree);
        } else {
          results = results.filter(course => !course.isFree);
        }
      }
      
      setFilteredCourses(results);
      setCurrentPage(1);
      setIsLoading(false);
    }, 500);
  };

  // Get current courses for pagination
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900">Explore Courses</h1>
        <p className="mt-4 text-xl text-gray-500">
          Discover world-class courses from top universities and instructors
        </p>
      </div>
      
      <SearchFilter 
        onSearch={handleSearch} 
        onFilter={handleFilter} 
        filterOptions={filterOptions} 
      />
      
      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <div className="w-12 h-12 border-4 border-t-transparent border-blue-600 rounded-full animate-spin"></div>
        </div>
      ) : filteredCourses.length > 0 ? (
        <>
          <p className="mb-4 text-gray-600">Showing {filteredCourses.length} courses</p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {currentCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium ${
                    currentPage === 1
                      ? 'text-gray-300 cursor-not-allowed'
                      : 'text-gray-500 hover:bg-gray-50 cursor-pointer'
                  }`}
                >
                  Previous
                </button>
                
                {[...Array(totalPages).keys()].map((number) => (
                  <button
                    key={number + 1}
                    onClick={() => paginate(number + 1)}
                    className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium cursor-pointer ${
                      currentPage === number + 1
                        ? 'z-10 bg-blue-50 border-blue-500 text-blue-600'
                        : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                    }`}
                  >
                    {number + 1}
                  </button>
                ))}
                
                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium ${
                    currentPage === totalPages
                      ? 'text-gray-300 cursor-not-allowed'
                      : 'text-gray-500 hover:bg-gray-50 cursor-pointer'
                  }`}
                >
                  Next
                </button>
              </nav>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-gray-900">No courses found</h3>
          <p className="mt-2 text-gray-500">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
}

export default CoursesPage;