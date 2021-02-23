import './App.css';

import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import Home from './containers/Home/Home';
import Bus from './containers/Bus/Bus';
import page404 from './containers/404/404';
import SomethingWentWrong from './containers/SomethingWentWrong/SomethingWentWrong';

function App() {
  let routes = (
      <Switch>
        <Route path="/bus" component={Bus}/>
        <Route path="/" exact component={Home}/>
        {/* <Route path="/weather" exact component={Weather}/>
        <Route path="/about" exact component={About}/> */}
        <Route path="/404" exact component={page404}/>
        <Route path="/somethingwentwrong" exact component={SomethingWentWrong}/>
        <Redirect to="/404"/>
      </Switch>
  );
  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;