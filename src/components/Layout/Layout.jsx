import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Routes } from '../../routes/Routes';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Spinner } from '../Spinner';

export const Layout = () => {
  return (
    <div className="layout">
      <Router>
        <Header />
        <div className="app-content">
          <Spinner />
          <Routes />
        </div>
        <Footer />
      </Router>
    </div>
  );
};
