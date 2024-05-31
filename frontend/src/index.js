import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Import CSS Global
import './css/main.css';
// Import CSS Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Import BrowserRouter dari React Router
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider >
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
