import { connect } from 'react-redux';
import { Header as HeaderComponent } from './Header';

import { search } from '../../redux/beers/actions';
import { logout } from '../../redux/login/actions';

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = {
  logout,
  search,
};
export const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
