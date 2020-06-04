import { connect } from 'react-redux';
import { Login as LoginComponent } from './Login';

import { login } from '../../redux/login/actions';

const mapDispatchToProps = {
  login,
};

export const Login = connect(null, mapDispatchToProps)(LoginComponent);
