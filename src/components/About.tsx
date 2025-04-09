import React from 'react';

const About: React.FC = () => {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python',
    'SQL', 'MongoDB', 'AWS', 'firebase', 'Git', "NestJS","REST/GraphQL APIs"," WebSocket" , "React Native" , "Kotlin "
  ];

  return (
    <div className="about">
      <section className="about-section">
        <h2>About Me</h2>
        <p>
          I'm a pragmatic developer who enjoys building smart tools and systems that make things simpler, faster, or more fun.
          I explore technology not just to follow trends, but to find shortcuts, automate workflows, and solve problems that others overlook.
        </p>
      </section>

      <section className="skills-section">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="experience-section">
        <h2>My recent projects include:</h2>
        <div className="experience-item">
          <ul>
            <li>Interactive web platforms for simulating financial systems,casino
            </li>
            <li>Automation tools for social media (TikTok bots, data tracking)</li>
            <li>Real-time backends with clean, scalable frontends</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default About; 