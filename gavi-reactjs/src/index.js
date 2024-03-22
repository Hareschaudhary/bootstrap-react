import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UsecontaxtProvider from "./Store.jsx/UsecontaxtProvider"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <UsecontaxtProvider>
    <App />
  </UsecontaxtProvider>
);
