import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route,  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

import Home from './views/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
                <Route exact path='/' component={Home} />                                          
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
