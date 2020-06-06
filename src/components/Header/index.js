import { connect } from 'react-redux';
import { Header as HeaderComponent } from './Header';
import { logout } from '../../redux/login/actions';

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

const mapDispatchToProps = {
  logout,
};
export const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
