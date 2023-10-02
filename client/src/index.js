import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from 'axios';

// axios configs
axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(request => {
  console.log(request);
  return request;
}, err => {
  console.error(err);
  return Promise.reject(err);
});

axios.interceptors.response.use(response => {
  console.log(response);
  return response;
}, err => {
  console.error(err);
  return Promise.reject(err);
});

// render app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

