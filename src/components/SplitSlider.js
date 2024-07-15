import React, { useRef, useEffect, useState } from 'react';
import './SplitSlider.scss';
import image1 from '../images/image-1.jpg';
import image2 from '../images/image-2.jpg';
import image3 from '../images/vSImage-1.jpg';
import image4 from '../images/vSImage-2.jpg';



const SplitSlider = () => {
  const rectRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [percent, setPercent] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (rectRef.current) {
      const length = rectRef.current.getTotalLength();
      rectRef.current.style.strokeDasharray = length;
      rectRef.current.style.strokeDashoffset = length;

      const startTimer = () => {
        clearInterval(intervalId);
        let percent = 0;
        const id = setInterval(() => {
          percent += 1;
          setPercent(percent);
          const to = length * ((100 - percent) / 100);
          rectRef.current.style.strokeDashoffset = to;
          if (percent >= 100) {
            clearInterval(id);
            setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
          }
        }, 70);
        setIntervalId(id);
      };

      setTimeout(startTimer);
      return () => clearInterval(intervalId);
    }
  }, [activeIndex]);

  const handleNext = () => {
    clearInterval(intervalId);
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    rectRef.current.style.strokeDashoffset = rectRef.current.getTotalLength();
  };

// carousal section

  const slides = [
    {
      id: 1,
      image: image1
    },
    {
      id: 2,
      image: image2
    },
    {
      id: 3,
      image: image3
    },
    {
      id: 4,
      image: image4
    },
  ];
  
  const thumbnailImage = slides[(activeIndex + 1) % slides.length].image;

  return(
  <div className="slider">
    <div className='carousal'>
      <div className='HeaderText'>
        <p className='sideText'>Welcome to TenTwenty Farms</p>
        <h1 className='mainText1'>From Our Farms</h1>
        <h1 className='mainText2'>To your Hands</h1>
      </div>
      <div className="slides">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`slide ${index === activeIndex ? 'active' : 'inactive'}`}
            >
              <img src={slide.image} alt={`Slide ${slide.id}`} />
            </div>
          ))}
        </div>
    </div>


    <div className='thumbnail' onClick={handleNext}>
        <h4>Next</h4>
        <img src={thumbnailImage} alt="My Image" />
        <svg width="8.6rem" height="8.6rem">
        <rect
            ref={rectRef}
            width="8.6rem"
            height="8.6rem"
            style={{ fill: 'transparent' }}
            stroke="#EEF4F9"
            strokeWidth="8"
            rx="5"
            strokeLinecap="round"
          />
        </svg>
    </div>
    
  </div>
  );
};

export default SplitSlider;