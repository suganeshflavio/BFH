import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import instance from './AxiosInstance';

const token=localStorage.getItem('tok');
if(token)
instance.defaults.headers.common['adminauthtoken']=token;
console.log(token);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

