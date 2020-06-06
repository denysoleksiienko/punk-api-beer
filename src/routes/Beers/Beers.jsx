import React, { useEffect, useState } from 'react';

import { BeerCard } from '../../components/BeerCard';
import { Pagination } from '../../components/_shared/Pagination';

import './Beers.scss';

export const Beers = ({ beers, initialBeerPage }) => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    initialBeerPage(page);
  }, [initialBeerPage, page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <div className="beers-gallery">
        {beers.length ? (
          beers.map((beer) => <BeerCard beer={beer} key={beer.id} />)
        ) : (
          <div className="another-container"> No beers </div>
        )}
      </div>
      <Pagination handleLoadMore={handleLoadMore} />
    </>
  );
};
