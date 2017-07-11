import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
// import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <h1>Welcome to Graph App</h1>
      </div>
    );
  }
}

export default App;
