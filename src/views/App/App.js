import React from 'react';

import Header from './Header';
import Footer from './Footer';

import ROUTES from '../../config/routes';
import './App.css';

const App = () => (
  <div className="App">
    <Header />
    {ROUTES}
    <Footer />
  </div>
);

export default App;
