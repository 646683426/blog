import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import List from './pages/list';
import Detail from './pages/detail'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,Route} from 'react-router-dom'
ReactDOM.render(
    <Router>
      <Route exact path='/' component={App}/>
      <Route exact path='/list:id' component={List}/>
      <Route exact path='/detail' component={Detail} />
    </Router>,
  document.getElementById('root')
);
reportWebVitals();
