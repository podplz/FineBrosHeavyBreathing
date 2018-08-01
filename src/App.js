import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class App extends Component {
  render() {
      function handleClick(e) {
          e.preventDefault();
          alert("Logan paul");

      }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <button className="App-button button is-primary" onClick={handleClick}>Test button</button>
          <div className="tabs is-right is-boxed">
              <ul>
                  <li className="is-active"><a>Pictures</a></li>
                  <li><a><span className="icon is-large"><FontAwesomeIcon icon={["fab","instagram"]} /></span></a>
                  <span>Camwhores</span>
                  </li>
                  <li><a>Videos</a></li>
                  <li><a>Documents</a></li>
              </ul>
          </div>
      </div>
    );
  }
}

export default App;
