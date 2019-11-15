import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'

function App() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
      </Switch>
    );
}

export default App;
