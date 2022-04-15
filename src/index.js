import React from 'react';
import ReactDOM from 'react-dom';
import './styles/scss/Style.scss';
import {RouterReact as Router} from './config/Router';
ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);