import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';

import './BeerPage.scss';

export const BeerPage = ({ currentBeer, initialBeerByID }) => {
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    initialBeerByID(id);
  }, [initialBeerByID, id]);

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <>
      {currentBeer.map((item) => (
        <section key={item.id} className="beer-container">
          <button onClick={handleGoBack} className="btn-back">
            <ArrowBackOutlinedIcon color="secondary" fontSize="large" />
          </button>

          <div className="beer-info">
            <div className="beer-text">
              <h2 className="beer-title">{item.name}</h2>
              <p>{item.description}</p>
            </div>
            <img className="beer-img" src={item.image_url} alt={item.name} />
          </div>
        </section>
      ))}
    </>
  );
};
