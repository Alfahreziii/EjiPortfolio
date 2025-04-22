import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollContainer = ({
  children,
  start = 'top top',
  end = '+=500',
  pin = true,
  scrub = 1,
  snap = false,
  className = '',
  timelineBuilder = () => {}
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scrollEnd = typeof end === 'function'
        ? end(containerRef.current)
        : end;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start,
          end: scrollEnd,
          pin,
          scrub,
          snap
        }
      });

      timelineBuilder(tl, containerRef.current);
    }, containerRef);

    return () => ctx.revert();
  }, [start, end, pin, scrub, snap, timelineBuilder]);

  return (
    <div ref={containerRef} className={`scroll-container ${className}`}>
      {children}
    </div>
  );
};

export default ScrollContainer;
