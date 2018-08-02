import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './assets/js/App';
import registerServiceWorker from './registerServiceWorker';
export { FontAwesomeIcon } from './assets/js/fontawesome'

ReactDOM.render(<App />, document.getElementById('root'));


registerServiceWorker();
