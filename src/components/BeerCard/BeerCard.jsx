import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import './BeerCard.scss';

export const BeerCard = ({ beer }) => {
  const history = useHistory();
  const { url } = useRouteMatch();
  return (
    <section onClick={() => history.push(`${url}/${beer.id}`)} key={beer.id} className="beer-content">
      <div className="beer-card">
        <h2 className="beer-name">{beer.name}</h2>
        <img className="beer-img" src={beer.image_url} alt={beer.name} />
        <p className="beer-descr">{beer.description}</p>
      </div>
    </section>
  );
};
