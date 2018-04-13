import React, { Component } from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <p className="App-intro">
          Birthplace of Great React Developers!
        </p>
        <Footer/>
      </div>
    );
  }
}

export default App;
