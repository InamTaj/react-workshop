import React, { Component } from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Lessons from '../Lessons/Lessons';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Lessons />
        <Footer/>
      </div>
    );
  }
}

export default App;
