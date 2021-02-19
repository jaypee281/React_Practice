import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './Components/MainPage';
import "./styles/Stylesheet.css";
import {BrowserRouter} from 'react-router-dom'

const element=<div>
  <MainPage></MainPage>
</div>
ReactDOM.render(<BrowserRouter>{element}</BrowserRouter> ,
  document.getElementById('root')
);


