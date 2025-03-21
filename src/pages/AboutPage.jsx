import React from 'react';
import { Link } from 'react-router-dom';
import { FaUsers, FaGraduationCap, FaChalkboardTeacher, FaHandsHelping } from 'react-icons/fa';

function AboutPage() {
  const teamMembers = [
    {
      name: 'Ali Hosseini',
      role: 'Founder & Director',
      bio: 'Former student who faced barriers to online education and created EduBridge to help others access global learning resources.',
      image: 'https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=100&height=100'
    },
    {
      name: 'Maryam Tehrani',
      role: 'Education Specialist',
      bio: 'Experienced educator with expertise in online learning platforms and international education standards.',
      image: 'https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=100&height=100'
    },
    {
      name: 'Reza Ahmadi',
      role: 'Technical Lead',
      bio: 'Technical expert specialized in overcoming access barriers to educational platforms and resources.',
      image: 'https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=100&height=100'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">About EduBridge</h1>
        <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
          Our mission is to ensure Iranian students have equal access to world-class education through Coursera
        </p>
      </div>
      
      {/* Our Story section */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-16">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img
              src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=600&height=400"
              data-image-request="iranian students in a library with laptops"
              alt="Students studying"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              EduBridge was founded in 2023 by a group of Iranian students and educators who recognized the challenges faced by 
              students in Iran trying to access global educational platforms like Coursera.
            </p>
            <p className="text-gray-700 mb-4">
              Due to regional restrictions and payment challenges, many talented Iranian students were unable to benefit from 
              world-class courses and degree programs offered by top universities through Coursera.
            </p>
            <p className="text-gray-700">
              Our platform was created to bridge this gap, providing tools, resources, and guidance to help Iranian 
              students access Coursera courses and earn recognized degrees despite these obstacles.
            </p>
          </div>
        </div>
      </div>
      
      {/* Mission & Values section */}
      <div className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Our Mission & Values</h2>
          <p className="mt-2 text-xl text-gray-500">
            What drives us every day
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Mission</h3>
            <p className="text-gray-700">
              Our mission is to ensure that every Iranian student has equal access to world-class educational 
              opportunities, regardless of geopolitical restrictions. We believe education is a fundamental right,
              and we work tirelessly to make quality online education accessible to all.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Vision</h3>
            <p className="text-gray-700">
              We envision a world where geographical location and political circumstances do not limit educational 
              opportunities. Our goal is to create a generation of Iranian students equipped with global knowledge 
              and skills through equal access to the world's best educational resources.
            </p>
          </div>
        </div>
      </div>
      
      {/* Core Values */}
      <div className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Core Values</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              icon: <FaUsers className="text-blue-600 w-10 h-10" />,
              title: 'Inclusivity',
              description: 'We believe education should be accessible to everyone, regardless of location or circumstance.'
            },
            {
              icon: <FaGraduationCap className="text-blue-600 w-10 h-10" />,
              title: 'Excellence',
              description: 'We maintain high standards in all our resources and support services.'
            },
            {
              icon: <FaChalkboardTeacher className="text-blue-600 w-10 h-10" />,
              title: 'Innovation',
              description: 'We continually develop creative solutions to overcome access barriers.'
            },
            {
              icon: <FaHandsHelping className="text-blue-600 w-10 h-10" />,
              title: 'Support',
              description: 'We provide continuous assistance to ensure student success.'
            }
          ].map((value, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                {value.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Our Team section */}
      <div className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Our Team</h2>
          <p className="mt-2 text-xl text-gray-500">
            The people behind EduBridge
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <img
                src={member.image}
                data-image-request={`professional headshot of ${member.name} iranian educator`}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-blue-600 mb-3">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Contact section */}
      <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p className="text-xl mb-6">
          Have questions or suggestions? We'd love to hear from you.
        </p>
        <Link
          to="/contact"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 inline-block cursor-pointer"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default AboutPage;