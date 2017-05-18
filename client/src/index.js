import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserList from './User/UserList';
import UserForm from './User/UserForm';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(

  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/users" component={UserList} />
      <Route path="/user" component={UserForm} />
    </div>
  </Router>
  ,
  document.getElementById('root')
);
