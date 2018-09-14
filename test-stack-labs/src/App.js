import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'


import './InventionsList.css'

import ListInventions from './ListInventions'
import Home from './Home'




class App extends Component {
  


  render() {
    return (
      <Router>
       <div className="InventionsList">
          <header className="List-header">
            <h1 className="List-title">Liste des Inventions</h1>
            <div>
                <Link to='/' >INITIALISATION</Link><br />
                <Link to='/ListInventions' >LISTE COMPLETE</Link>
            </div>
          </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/ListInventions" component={ListInventions} />

        </Switch>  
      </div>
    </Router>
     
    );
  }
}

export default App;
