import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Route from './routes/Route';

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Route />
  </React.StrictMode>,
  document.getElementById("root")
);