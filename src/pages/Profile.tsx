import React from 'react';

const Profile: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">About Me</h1>
          
          <div className="prose prose-invert">
            <p className="text-gray-300 mb-6">
              I am a passionate Full Stack Developer with expertise in building modern web applications.
              My journey in software development started with a curiosity for creating things that live on the internet.
            </p>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {[
                'React', 'TypeScript', 'JavaScript', 'Node.js',
                'Firebase', 'MongoDB', 'SQL', 'Git',
                'HTML5', 'CSS3', 'Tailwind CSS', 'REST APIs'
              ].map((skill) => (
                <div
                  key={skill}
                  className="bg-gray-800 rounded-lg px-4 py-2 text-center text-gray-300 hover:bg-gray-700 transition-colors"
                >
                  {skill}
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Experience</h2>
            <div className="space-y-6">
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Senior Full Stack Developer</h3>
                <p className="text-gray-400 mb-2">Tech Company • 2020 - Present</p>
                <p className="text-gray-300">
                  Leading development of enterprise web applications using React, TypeScript, and Node.js.
                  Implementing modern architecture patterns and best practices.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Web Developer</h3>
                <p className="text-gray-400 mb-2">Digital Agency • 2018 - 2020</p>
                <p className="text-gray-300">
                  Developed and maintained multiple client websites and web applications.
                  Worked with various technologies including React, Firebase, and REST APIs.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Education</h2>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-2">Bachelor of Computer Science</h3>
              <p className="text-gray-400">University Name • 2014 - 2018</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 