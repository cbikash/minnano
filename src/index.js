import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './Store/index';
import { BrowserRouter } from "react-router-dom";

import { hydrate, render } from "react-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
// const App1 = (
//   <React.StrictMode>
//   <BrowserRouter>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </BrowserRouter>
// </React.StrictMode>
// )
// const rootElement = document.getElementById("root");
// if (rootElement.hasChildNodes()) {
//   hydrate(App1, rootElement);
// } else {
//   render(App1 , rootElement);
// }

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
