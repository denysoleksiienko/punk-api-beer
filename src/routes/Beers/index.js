import { connect } from 'react-redux';
import { Beers as BeersComponent } from './Beers';

import { initialBeerPage, updateBeerPage } from '../../redux/beers/actions';

const mapStateToProps = (state) => ({
  beers: state.products.allBeers,
  searchByName: state.products.searchByName,
});

const mapDispatchToProps = {
  initialBeerPage,
  updateBeerPage,
};

export const Beers = connect(mapStateToProps, mapDispatchToProps)(BeersComponent);
