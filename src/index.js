import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Bar from './components/Bar';
import Pie from './components/Pie';
import registerServiceWorker from './registerServiceWorker';
import {Router, Route, hashHistory} from 'react-router';


ReactDOM.render(
	<Router history={hashHistory}>
        <Route path="/" component={App}/>
        <Route path="/bar" component={Bar}/>
        <Route path="/pie" component={Pie}/>
    </Router>, document.getElementById('root'));
registerServiceWorker();
