import React from 'react';
import ReactDOM from 'react-dom/client';
 import MainRoutes from './routes/MainRoutes'
import {createStore,compose,applyMiddleware}from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {setHeaderToken} from "./Axios/Services";
import Reducers from './Redux/Reducers/index';

//CREATE STORE

const store=createStore(Reducers,compose(applyMiddleware(thunk)));

//TOKEN AUTHORIZATION

const token =localStorage.getItem("AuthTok");
if(token){
  setHeaderToken(token);
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <MainRoutes />
  </Provider>,
);
