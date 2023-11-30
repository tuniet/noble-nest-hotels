import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// Replace ReactDOM.render with createRoot().render
const root = document.getElementById('root');
const reactRoot = ReactDOM.createRoot(root);

reactRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

