import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import ListInventions from './ListInventions'
import Home from './Home'




class App extends Component {
  


  render() {
    return (
      <Router>
       <div className="InventionsList">
          <header className="List-header" >
            <div >
                <Link className="link" to='/' ><h1>LES INVENTIONS</h1></Link>
                <Link className="link" to='/ListInventions' ><h1>AJOUTER UNE INVENTION</h1></Link>
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
