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
            <div>
                <Link to='/' ><h1>DECOUVERTE</h1></Link>
                <Link to='/ListInventions' ><h1>LISTE COMPLETE</h1></Link>
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
