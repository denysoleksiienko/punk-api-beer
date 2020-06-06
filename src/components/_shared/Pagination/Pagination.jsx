import React from 'react';
import Button from '@material-ui/core/Button';

export const Pagination = ({ handleLoadMore }) => {
  return (
    <div className="beers-pagination">
      <Button variant="contained" color="secondary" onClick={handleLoadMore} type="button" className="load-more">
        Load more
      </Button>
    </div>
  );
};
