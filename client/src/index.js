import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserList from './User/UserList';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(

  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/users" component={UserList} />
    </div>
  </Router>
  ,
  document.getElementById('root')
);
