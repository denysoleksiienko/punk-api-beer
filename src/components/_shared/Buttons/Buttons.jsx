import React from 'react';

import Button from '@material-ui/core/Button';

import './Buttons.scss';

export const Buttons = ({ onClick, isActive, children }) => {
  const clickHandler = (e) => {
    e.stopPropagation();
    onClick();
  };

  return (
    <Button className={`round-btn ${isActive ? 'is-active' : ''}`} onClick={clickHandler}>
      {children}
    </Button>
  );
};
