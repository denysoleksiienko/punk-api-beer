import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

export const BeerCard = ({ beer }) => {
  const history = useHistory();
  const { url } = useRouteMatch();
  return (
    <section onClick={() => history.push(`${url}/${beer.id}`)} key={beer.id} className="beer-card-content">
      <div className="beer-card">
        <h2 className="beer-title">{beer.name}</h2>
        <img src={beer.image_url} alt={beer.name} />
      </div>
    </section>
  );
};
