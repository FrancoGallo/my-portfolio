import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { getFirestoreApp } from './db/dbFirebase';

// getFirestoreApp()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
