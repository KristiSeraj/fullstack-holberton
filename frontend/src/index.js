import React from 'react';
import axios from "axios";
import ReactDOM from 'react-dom/client';
import Dashboard from "./pages/Dashboard/Dashboard";
import {CategoryProvider} from "./context/CategoryContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import {BookProvider} from "./context/BookContext";
axios.defaults.withCredentials = true;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CategoryProvider>
      <BookProvider>
          <Dashboard />
      </BookProvider>
  </CategoryProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();