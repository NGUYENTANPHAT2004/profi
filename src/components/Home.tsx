import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Home: React.FC = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Nguyen Tan Phat</h1>
          <h2>Indie Developer</h2>
          <p>Turning ideas into working web apps — fast, precise, and creative.</p>
          <div className="social-links">
            <a href="https://github.com/NGUYENTANPHAT2004" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100025113759947" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/tanp17052004" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;