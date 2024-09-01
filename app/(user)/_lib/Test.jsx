'use client'
import { useEffect, useRef, useState } from "react";

export default function Scroller({ children }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % children.length);
    }, 5000); // Slide every 5 seconds

    return () => clearInterval(interval);
  }, [children.length]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
  }, [currentSlide]);

  return (
    <div className="w-full h-full overflow-hidden">
      <div
        ref={containerRef}
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ width: `${children.length * 100}%` }}
      >
        {children.map((child, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
