import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { CounterCountProvider } from './context/CounterCount';
import { TittleColorContextProvider } from './context/TittleColorContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CounterCountProvider>
      <TittleColorContextProvider>
        <App />
      </TittleColorContextProvider>
    </CounterCountProvider>
  </React.StrictMode>
);

