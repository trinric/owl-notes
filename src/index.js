import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import 'draft-js';
import 'draft-js/dist/Draft.css';

import 'font-awesome/css/font-awesome.min.css';
import './assets/css/App.css';

import App from './components/App.jsx';

var ipcRenderer = require('electron').ipcRenderer;

// Since we are using HtmlWebpackPlugin WITHOUT a template, we should create our own root node in the body element before rendering into it
let root = document.createElement('div');
root.id = "root";
document.body.appendChild( root );

// Now we can render our application into it
render((<BrowserRouter><App /></BrowserRouter>), document.getElementById('root'));
