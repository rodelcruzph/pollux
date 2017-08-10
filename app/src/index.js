import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

const URI = 'http://localhost:3001/';

ReactDOM.render(<App uri={URI} />, document.getElementById('root'));
registerServiceWorker();
