import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Import CSS Global
import './css/main.css';
// Import CSS Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Import BrowserRouter dari React Router
import { BrowserRouter } from 'react-router-dom';
// Import animate.css
import 'animate.css';

import { AuthProvider } from './context/AuthContext';

// Import AOS.css
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
