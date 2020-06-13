import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter,{ history } from './router/AppRouter'; 
import 'normalize.css/normalize.css';//Resets the browser in-built styling(css reset)
import './styles/styles.scss';


const appRoot = document.getElementById('app');




ReactDOM.render(<AppRouter/>, appRoot)

