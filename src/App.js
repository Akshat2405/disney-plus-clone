import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Header from './componenets/Header';
import Home from './componenets/Home';
import Detail from './componenets/Detail';
import Login from './componenets/Login';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/detail/:id">
            <Detail/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>

      </Switch>
    </Router>
  );
}

export default App;
