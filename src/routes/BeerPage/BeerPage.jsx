import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

export const BeerPage = ({ currentBeer, initialBeerByID }) => {
  console.log(currentBeer);

  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    initialBeerByID(id);
  }, [initialBeerByID, id]);

  return (
    <section key={currentBeer.id} className="beer-page-cont">
      {/* <button onClick={() => history.goBack()} className="btn-back">
        <img className="btn-back-img" src="https://image.flaticon.com/icons/svg/1251/1251806.svg" alt="btn back" />
      </button> */}
      <div className="beer-page">
        <div className="beer-text">
          <h2 className="beer-page-title">{currentBeer.name}</h2>
          <p>{currentBeer.description}</p>
        </div>
        <img alt="img" className="beer-page-img" src={currentBeer.image_url}></img>
      </div>
    </section>
  );
};
