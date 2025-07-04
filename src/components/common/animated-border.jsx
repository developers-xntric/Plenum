'use client';
import React, { useRef, useEffect } from "react";

export const AnimatedBorder = ({
  children,
  className = "",
}) => {
  const containerRef = useRef(null);
  const animationFrameRef = useRef();
  const positionRef = useRef({ x: 0, y: 0 });
  const directionRef = useRef({ x: 1, y: 1 });
  const speedRef = useRef({ x: 2, y: 1.5 });
  const lastUpdateRef = useRef(performance.now());

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const animate = (currentTime) => {
      const deltaTime = currentTime - lastUpdateRef.current;
      const targetFPS = 30; // Limit to 30 FPS
      const frameTime = 1000 / targetFPS;

      if (deltaTime >= frameTime) {
        const rect = container.getBoundingClientRect();

        positionRef.current = {
          x: positionRef.current.x + speedRef.current.x * directionRef.current.x,
          y: positionRef.current.y + speedRef.current.y * directionRef.current.y,
        };

        // Bounce off edges
        if (positionRef.current.x >= rect.width || positionRef.current.x <= 0) {
          directionRef.current.x *= -1;
          positionRef.current.x = Math.max(0, Math.min(rect.width, positionRef.current.x));
        }
        if (positionRef.current.y >= rect.height || positionRef.current.y <= 0) {
          directionRef.current.y *= -1;
          positionRef.current.y = Math.max(0, Math.min(rect.height, positionRef.current.y));
        }

        lastUpdateRef.current = currentTime;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

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
          WebkitMaskImage: `radial-gradient(100px 100px at ${positionRef.current.x}px ${positionRef.current.y}px, black 30%, transparent)`,
          maskImage: `radial-gradient(100px 100px at ${positionRef.current.x}px ${positionRef.current.y}px, black 30%, transparent)`,
        }}
        className="pointer-events-none absolute inset-0 z-10 rounded-2xl transition-all duration-300 ease-in-out"
      />
    </div>
  );
};