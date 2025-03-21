import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import CourseCard from '@/components/CourseCard';
import { FaGraduationCap, FaLaptop, FaBook, FaUsers } from 'react-icons/fa';
import { featuredCourses } from '@/data/courses';

function HomePage() {
  const features = [
    {
      icon: <FaLaptop className="h-8 w-8 text-blue-600" />,
      title: 'Access to Coursera',
      description: 'Get full access to Coursera courses with step-by-step guidance to overcome regional restrictions.'
    },
    {
      icon: <FaGraduationCap className="h-8 w-8 text-blue-600" />,
      title: 'Degree Programs',
      description: 'Earn accredited degrees from top global universities through Coursera\'s degree programs.'
    },
    {
      icon: <FaBook className="h-8 w-8 text-blue-600" />,
      title: 'Learning Resources',
      description: 'Access supplementary learning materials specifically curated for Iranian students.'
    },
    {
      icon: <FaUsers className="h-8 w-8 text-blue-600" />,
      title: 'Community Support',
      description: 'Connect with other Iranian students studying on Coursera to share tips and advice.'
    }
  ];

  return (
    <div>
      <Hero />
      
      {/* Features section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">How EduBridge Helps</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Breaking down barriers to global education for Iranian students
            </p>
          </div>
          
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured courses section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Featured Courses</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Popular courses available through our platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Link to="/courses" className="btn-primary inline-block cursor-pointer">
              View All Courses
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Student Success Stories</h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Hear from Iranian students who've successfully used our platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src={`https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=200&height=200`}
                    data-image-request={`professional headshot of student ${i} from Iran`}
                    alt="Student testimonial"
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-bold">Student {i}</h4>
                    <p className="text-gray-600">Computer Science Student</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Thanks to EduBridge, I was able to complete my specialization in Machine Learning from Stanford University through Coursera. The guidance provided was invaluable."
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to Start Learning?</h2>
          <p className="mt-4 max-w-2xl text-xl text-blue-100 mx-auto">
            Join thousands of Iranian students accessing world-class education through EduBridge
          </p>
          <div className="mt-8">
            <Link to="/courses" className="btn-primary bg-white text-blue-600 hover:bg-gray-100 inline-block cursor-pointer">
              Browse Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;