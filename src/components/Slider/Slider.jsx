import React from 'react';

export const Slider = ({ slides }) => {
  const randomSlides = slides.sort(() => 0.5 - Math.random()).slice(0, 6);
  console.log(randomSlides);
  return <h1>Slides</h1>;
};
