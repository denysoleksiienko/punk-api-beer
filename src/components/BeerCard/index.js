import { connect } from 'react-redux';
import { BeerCard as BeerCardComponent } from './BeerCard';

import { toggleFavorites, toggleLike, toggleDisLike } from '../../redux/user/actions';
import { isDisLikes, isFavorites, isLikes } from '../../redux/user/selectors';

const mapStateToProps = (state) => ({
  isFavorites: isFavorites(state),
  isLikes: isLikes(state),
  isDisLikes: isDisLikes(state),
});

const mapDispatchToProps = {
  toggleFavorites,
  toggleLike,
  toggleDisLike,
};
export const BeerCard = connect(mapStateToProps, mapDispatchToProps)(BeerCardComponent);
