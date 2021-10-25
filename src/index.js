import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import {AmountsContextProvider} from './store/amounts-context';

ReactDOM.render(
<AmountsContextProvider><App /></AmountsContextProvider>, document.getElementById('root'));
