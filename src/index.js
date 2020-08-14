import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store'
 
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
