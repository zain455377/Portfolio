import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js'; // ✅ Extension add
import reportWebVitals from './reportWebVitals.js'; // ✅ Extension add

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
