import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from "./Root";
import configureStore from './redux/createStore';
import {Provider} from 'react-redux'


const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <Root/>
    </Provider>,
    document.getElementById('root')
);
