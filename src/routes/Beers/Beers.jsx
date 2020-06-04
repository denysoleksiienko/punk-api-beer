import React, { useEffect } from 'react';

export const Beers = ({ beers, initialBeerPage }) => {
  // const { id, name, description, image_url } = beers;
  useEffect(() => {
    initialBeerPage();
  }, [initialBeerPage]);
  return (
    <div>
      {beers.map((item) => (
        <section key={item.id}>
          <div>{item.name}</div>
          <img src={item.image_url} alt="s" />
        </section>
      ))}
    </div>
  );
};
