import React from 'react';
import ScrollContainer from '../components/ScrollContainer';

const ScrollPage = () => {
  const timelineBuilder = (tl, el) => {
    tl.addLabel('start')
      .from(el.querySelector('.box p'), {
        scale: 0.3,
        rotation: 45,
        autoAlpha: 0,
        duration: 1
      })
      .addLabel('color')
      .from(el.querySelector('.box'), {
        backgroundColor: '#28a92b',
        duration: 1
      })
      .addLabel('spin')
      .to(el.querySelector('.box'), {
        rotation: 360,
        duration: 1
      })
      .addLabel('end');
  };

  return (
    <>
      <div className="h-screen bg-blue-100 flex items-center justify-center text-2xl">
        Scroll ke bawah
      </div>

      <ScrollContainer
        timelineBuilder={timelineBuilder}
      >
        <div className="box p-10 w-50 h-50 bg-black">
        </div>
      </ScrollContainer>

      <div className="h-screen bg-green-100"></div>
    </>
  );
};

export default ScrollPage;
