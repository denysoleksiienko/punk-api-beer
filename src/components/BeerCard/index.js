import { connect } from 'react-redux';
import { BeerCard as BeerCardComponent } from './BeerCard';

import { toggleFavorites, toggleLike } from '../../redux/user/actions';
import { isFavorites, isLikes } from '../../redux/user/selectors';

const mapStateToProps = (state) => ({
  isFavorites: isFavorites(state),
  isLikes: isLikes(state),
});

const mapDispatchToProps = {
  toggleFavorites,
  toggleLike,
};
export const BeerCard = connect(mapStateToProps, mapDispatchToProps)(BeerCardComponent);
