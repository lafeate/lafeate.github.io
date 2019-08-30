import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import * as servicewoker from './ServiceWorker';

import MainPage from './pages/main';
ReactDOM.render(

   <MainPage/>,

  document.getElementById('root')
//serviceworker.unregister();
);
