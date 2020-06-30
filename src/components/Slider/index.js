import { connect } from 'react-redux';
import { Slider as SliderComponent } from './Slider';

const mapStateToProps = (state) => ({
  slides: state.products.allBeers,
});

export const Slider = connect(mapStateToProps, null)(SliderComponent);
