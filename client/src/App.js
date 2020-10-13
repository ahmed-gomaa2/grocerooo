import React from 'react';
import './App.css';
import Signup from "./components/Signup";
import {Route, BrowserRouter} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
          <Route exact component={Header} />
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/register'} component={Signup} />
          <Route exact path={'/login'} component={Login} />
      </BrowserRouter>
    </div>
  );
}

export default App;
