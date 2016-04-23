import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducer from './reducer';

import DevTools from './DevTools';
import HomeView from './HomeView';

import '../node_modules/semantic-ui-css/semantic.css';

import './style.scss';

const enhancer = compose(
    applyMiddleware(thunk),
    DevTools.instrument()
);

let store = createStore(reducer, {}, enhancer);

ReactDOM.render(
    <Provider store={store}>
        <div>
            <DevTools />
            <HomeView />
        </div>
    </Provider>,
    document.getElementById('react-container')
);
