import React from 'react';
import { Link } from '@material-ui/core';

import './Footer.scss';

export const Footer = () => {
  const preventDefault = (event) => event.preventDefault();
  return (
    <div className="app-footer">
      <Link className="app-link" href="#" onClick={preventDefault}>
        Privacy
      </Link>
      <Link className="app-link" href="#" onClick={preventDefault}>
        Terms
      </Link>
      <Link className="app-link" href="#" onClick={preventDefault}>
        Support
      </Link>
      <Link className="app-link" href="#" onClick={preventDefault}>
        Sign up
      </Link>
      <Link className="app-link" href="#" onClick={preventDefault}>
        Sign in
      </Link>
    </div>
  );
};
