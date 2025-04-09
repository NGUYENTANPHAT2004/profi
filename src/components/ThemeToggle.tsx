import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import '../styles/ThemeToggle.css';

const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsTransitioning(true);
    
    // Add transition overlay
    const overlay = document.createElement('div');
    overlay.className = 'theme-transition-overlay';
    document.body.appendChild(overlay);
    
    // Force reflow - store the value to avoid the unused expression error
    const _ = overlay.offsetHeight;
    
    // Activate overlay
    overlay.classList.add('active');
    
    // Change theme after a short delay
    setTimeout(() => {
      setIsDark(!isDark);
      
      // Remove overlay after transition
      setTimeout(() => {
        overlay.classList.remove('active');
        setTimeout(() => {
          document.body.removeChild(overlay);
          setIsTransitioning(false);
        }, 300);
      }, 300);
    }, 50);
  };

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      disabled={isTransitioning}
    >
      {isDark ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeToggle; 