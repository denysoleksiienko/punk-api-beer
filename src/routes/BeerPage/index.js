import { connect } from 'react-redux';
import { BeerPage as BeerPageComponent } from './BeerPage';

import { initialBeerByID } from '../../redux/beers/actions';

const mapStateToProps = (state) => ({
  currentBeer: state.products.currentBeer,
});

const mapDispatchToProps = {
  initialBeerByID,
};

export const BeerPage = connect(mapStateToProps, mapDispatchToProps)(BeerPageComponent);
