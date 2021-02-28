import './App.css';
import 'font-awesome/css/font-awesome.min.css';

import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import Home from './containers/Home/Home';
import Bus from './containers/Bus/Bus';
import page404 from './containers/404/404';
import SomethingWentWrong from './containers/SomethingWentWrong/SomethingWentWrong';
import FullInfo from './containers/Bus/FullInfo/FullInfo';
import Weather from './containers/Weather/Weather';
import About from './containers/About/About';

function App() {
  let routes = (
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/bus" component={Bus}/>
        <Route path="/buscodes" exact component={FullInfo}/>
        <Route path="/weather" exact component={Weather}/>
        <Route path="/about" exact component={About}/>
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