import React, { useEffect, useRef } from 'react';
import '../styles/SnowEffect.css';

interface SnowflakeProps {
  key: number;
  style: React.CSSProperties;
}

const SnowEffect: React.FC = () => {
  const snowContainer = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Create snowflakes when component mounts
    const snowflakesCount = 50; // Number of snowflakes
    const snowflakes: React.ReactElement<SnowflakeProps>[] = [];
    
    if (snowContainer.current) {
      const container = snowContainer.current;
      
      // Clear any existing snowflakes first
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      
      // Create snowflakes
      for (let i = 0; i < snowflakesCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        
        // Random properties for each snowflake
        const size = Math.random() * 5 + 2; // Size between 2px and 7px
        
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.left = `${Math.random() * 100}%`;
        snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`; // Between 5-10s
        snowflake.style.animationDelay = `${Math.random() * 5}s`;
        snowflake.style.opacity = `${Math.random() * 0.6 + 0.4}`; // Between 0.4-1.0
        
        container.appendChild(snowflake);
      }
    }
    
    // Cleanup function
    return () => {
      if (snowContainer.current) {
        const container = snowContainer.current;
        while (container.firstChild) {
          container.removeChild(container.firstChild);
        }
      }
    };
  }, []);
  
  return <div className="snow-container" ref={snowContainer}></div>;
};

export default SnowEffect;