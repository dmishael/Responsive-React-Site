import React, { Component } from "react";
import "./App.css";

import Home from "./components/home";
import Work from "./components/work";
import Capabilities from "./components/capabilities";
import About from "./components/about";
import Resources from "./components/resources";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {

  render() {
    return (
      <div className="App">

        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/work" component={Work} />
            <Route exact path="/capabilities" component={Capabilities} />
            <Route exact path="/about" component={About} />
            <Route exact path="/resources" component={Resources} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
