import React from 'react';
import { Fade } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css';
import './Slider.scss';

const fadeProperties = {
  duration: 4000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  pauseOnHover: false,
};

export const Slider = ({ slides }) => {
  const randomSlides = slides.sort(() => 0.5 - Math.random()).slice(0, 6);

  return (
    <div className="slide-container">
      <Fade {...fadeProperties}>
        {randomSlides.map(({ id, name, image_url }) => (
          <div key={id} className="each-fade">
            <div className="image-container">
              <img src={image_url} alt={name} />
            </div>
            <h2>{name}</h2>
          </div>
        ))}
      </Fade>
    </div>
  );
};
