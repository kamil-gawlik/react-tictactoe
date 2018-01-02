import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './model/Game';

ReactDOM.render(
    <Game size={5}/>,
    document.getElementById('root')
);
