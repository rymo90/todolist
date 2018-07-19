import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Counter from './components/counter'
ReactDOM.render( < Counter / > , document.getElementById('App'));

registerServiceWorker();