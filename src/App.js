import React, { Component } from "react";
import { Redirect } from 'react-router-dom'


import "./App.css";

import Home from "./components/home";
import Work from "./components/work";
import Capabilities from "./components/capabilities";
import About from "./components/about";
import Resources from "./components/resources";
import BlogPage from "./components/blogChild/blogPageSocial";
import BlogPageVideo from "./components/blogChild/blogPageVideo";
import BlogPageIndustry from "./components/blogChild/blogPageIndustry";
import BlogPageTechnology from "./components/blogChild/blogPageTechnology";
import BlogPosts from "./components/blogPosts";

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
            <Route exact path="/blog/social" component={BlogPage}/>
            <Route exact path="/blog/video" component={BlogPageVideo}/>
            <Route exact path="/blog/industry" component={BlogPageIndustry}/>
            <Route exact path="/blog/technology" component={BlogPageTechnology}/>
          </Switch>
        </Router>

      </div>
    );
  }
}
export default App;
