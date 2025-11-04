"use client";
import React, { useEffect, useState, useRef } from "react";


export const AnimatedBorder = ({
  children,
  className = "",
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const animationFrameRef = useRef();
  const directionRef = useRef({ x: 1, y: 1 });
  const speedRef = useRef({ x: 2, y: 1.5 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const animate = () => {
      const rect = container.getBoundingClientRect();

      setPosition((prev) => {
        let newX = prev.x + speedRef.current.x * directionRef.current.x;
        let newY = prev.y + speedRef.current.y * directionRef.current.y;

        // Bounce off edges
        if (newX >= rect.width || newX <= 0) {
          directionRef.current.x *= -1;
          newX = prev.x;
        }

        if (newY >= rect.height || newY <= 0) {
          directionRef.current.y *= -1;
          newY = prev.y;
        }

        return { x: newX, y: newY };
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {children}
      <div
        aria-hidden="true"
        style={{
          border: "2px solid #FF7047",
          opacity: 0.8,
          WebkitMaskImage: `radial-gradient(100px 100px at ${position.x}px ${position.y}px, black 30%, transparent)`,
          maskImage: `radial-gradient(100px 100px at ${position.x}px ${position.y}px, black 30%, transparent)`,
        }}
        className="pointer-events-none absolute inset-0 z-10 rounded-2xl transition-all duration-300 ease-in-out"
      />
    </div>
  );
};