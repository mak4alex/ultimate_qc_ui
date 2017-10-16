import 'jquery';
import 'bootstrap-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './styles';


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('app'));
});
