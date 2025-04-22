import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

function HomePage() {
  const boxRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(boxRef.current, { x: 200, duration: 1 })
      .to(boxRef.current, { y: 200, duration: 1 })
      .to(boxRef.current, { rotation: 180, duration: 1 })
      .to(boxRef.current, { x: 400, duration: 1 });
  }, []);

  return (
    <div className='p-20'>
      <div
        ref={boxRef}
        className="w-32 h-32 bg-blue-500"
      ></div>
    </div>
  );
}

export default HomePage;
