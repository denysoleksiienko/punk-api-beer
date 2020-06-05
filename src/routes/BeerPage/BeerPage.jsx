import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import './BeerPage.scss';

export const BeerPage = ({ currentBeer, initialBeerByID }) => {
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    initialBeerByID(id);
  }, [initialBeerByID, id]);

  return (
    <>
      {currentBeer.map((item) => (
        <section key={item.id} className="beer-container">
          <button onClick={() => history.goBack()} className="btn-back">
            <img
              className="btn-back-img"
              src="https://image.flaticon.com/icons/png/512/2883/2883445.png"
              alt="btn back"
            />
          </button>

          <div className="beer-page">
            <div className="beer-text">
              <h2 className="beer-page-title">{item.name}</h2>
              <p>{item.description}</p>
            </div>
            <img alt="img" className="beer-page-img" src={item.image_url}></img>
          </div>
        </section>
      ))}
    </>
  );
};
