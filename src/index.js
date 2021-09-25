import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { init } from '@rematch/core';

import { Provider } from 'react-redux';
import App from './layout/App';
import config from './config';
import './assets/scss/style.scss';
import * as serviceWorker from './serviceWorker';
import firebase from "firebase";
import history from './history';
import createRematchPersist from '@rematch/persist';
import './i18n';

import * as models from './models';

firebase.initializeApp(config.firebase);

const persistPlugin = createRematchPersist({
    whitelist: ['customization'],
    version: 1
});

const store = init({
    models,
    plugins: [persistPlugin],
    redux: {}
});

ReactDOM.render(
    <Provider store={store}>
        <Router basename={config.basename} history={history}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
