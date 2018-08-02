import React, { Component } from 'react';
//import logo from '../../logo.svg';
import '../../App.css';
import 'bulma/css/bulma.css'
import '../../components/navbar/navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Navbar from "../../components/navbar/navbar";

class App extends Component {
  render() {
      return (
      <div className="App">
          <header>
              <Navbar/>
          </header>
          <button className="App-button button is-primary">Test button</button>
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
