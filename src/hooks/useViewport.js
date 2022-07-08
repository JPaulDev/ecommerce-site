import { useState, useEffect } from 'react';

const useViewport = () => {
  const [width, setWidth] = useState(window.innerWidth);
  // Add a second state variable "height" and default it to the current window height

  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  // Return both the height and width
  return { width };
};
