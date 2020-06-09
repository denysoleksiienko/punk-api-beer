import React from 'react';
import Loader from 'react-loader-spinner';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './Spinner.scss';

export const Spinner = ({ loader }) => {
  //other logic
  return loader ? (
    <div className="backdrop">
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    </div>
  ) : null;
};
