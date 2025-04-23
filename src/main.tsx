import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';
import './style.css';

// Temporarily remove Strict Mode to test if it's causing the issue
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <HashRouter>
    <App />
  </HashRouter>
);