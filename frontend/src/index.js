import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Import CSS Global
import './css/main.css';
// Import CSS Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Import BrowserRouter dari React Router
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
