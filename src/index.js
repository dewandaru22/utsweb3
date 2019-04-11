import React from 'react';
import ReactDOM from 'react-dom';
import './Custom.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const items = [
    {
        name    : 'light',
        background   : 'Red',
    },
    {
        name    : 'dark',
        background   : 'Blue',
    }
];

ReactDOM.render(<App items={items} />, document.getElementById('root'));
serviceWorker.register();