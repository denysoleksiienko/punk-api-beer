import { connect } from 'react-redux';
import { Spinner as LoaderComponent } from './Spinner';

const mapStateToProps = (state) => ({
  loader: state.loader.isLoading,
});

export const Spinner = connect(mapStateToProps, null)(LoaderComponent);
