import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Routes } from '../../routes/Routes';
import { Header } from '../Header';
import { Footer } from '../Footer';

export const Layout = () => {
  return (
    <div className="layout">
      <Router>
        <Header />
        <div className="app-content">
          <Routes />
        </div>
        <Footer />
      </Router>
    </div>
  );
};
