import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './index.css';
import axios from 'axios';
import { SERVER_URL } from './utils/const';
import App from './App';
import { AppProvider } from './context/appContext';
const root = ReactDOM.createRoot(document.getElementById('root'));

axios.defaults.baseURL = SERVER_URL;

root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
