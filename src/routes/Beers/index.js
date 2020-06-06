import { connect } from 'react-redux';
import { Beers as BeersComponent } from './Beers';

import { initialBeerPage } from '../../redux/beers/actions';

const mapStateToProps = (state) => ({
  beers: state.products.allBeers,
  searchByName: state.products.searchByName,
});

const mapDispatchToProps = {
  initialBeerPage,
};

export const Beers = connect(mapStateToProps, mapDispatchToProps)(BeersComponent);
