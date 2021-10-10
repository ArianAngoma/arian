import React from 'react';
import ReactDOM from 'react-dom';

/* Importaciones propias */
import {App} from './App';
import {GlobalStyles} from './styles/GlobalStyles';
import {Typography} from './styles/Typography';

ReactDOM.render(
    <>
        <Typography/>
        <GlobalStyles/>
        <App/>
    </>,
    document.getElementById('root')
);