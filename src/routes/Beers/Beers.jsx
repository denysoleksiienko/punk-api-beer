import React, { useEffect } from 'react';

import { BeerCard } from '../../components/BeerCard';

import './Beers.scss';

export const Beers = ({ beers, initialBeerPage }) => {
  useEffect(() => {
    initialBeerPage();
  }, [initialBeerPage]);

  return (
    <div className="beers-gallery">
      {beers.length ? (
        beers.map((beer) => <BeerCard beer={beer} key={beer.id} />)
      ) : (
        <div className="another-container"> No beers </div>
      )}
    </div>
  );
};
