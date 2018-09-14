import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './InventionsList.css'

import ListInventions from './ListInventions'



class App extends Component {
  


  render() {
    return (
      <Router>
       <div className="InventionsList">
          <header className="List-header">
            <h1 className="List-title">Liste des Inventions</h1>
          </header>
        <Switch>
          <Route exact path="/List" component={ListInventions} />
        </Switch>  
      </div>
    </Router>
     
    );
  }
}

export default App;
