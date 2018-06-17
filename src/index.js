import  'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import {Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
    ///history for back/forward buttons in the browser to work correctly 
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('app')
);
 