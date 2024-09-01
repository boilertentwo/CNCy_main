'use client'

import { useEffect, useState, Children, cloneElement } from 'react';

const Scroller = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const childCount = Children.count(children);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % childCount);
    }, 4000); 
    return () => clearInterval(interval);
  }, [childCount]);

  useEffect(() => {
    console.log(`Active Index: ${activeIndex}`);
  }, [activeIndex]);

  return (
    <div className="relative overflow-hidden w-screen h-screen">
      {Children.map(children, (child, index) =>
        cloneElement(child, {
          style: {
            transform: `translateX(${(index - activeIndex) * 100}%)`,
            transition: 'transform 0.5s ease-in-out',
          },
        })
      )}
    </div>
  );
};

export default Scroller;