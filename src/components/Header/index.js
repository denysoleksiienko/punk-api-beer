import { connect } from 'react-redux';
import { Header as HeaderComponent } from './Header';

import { initialBeerSearchByName } from '../../redux/beers/actions';
import { logout } from '../../redux/login/actions';

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = {
  logout,
  initialBeerSearchByName,
};
export const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
