import React, { Component } from 'react';
import Invention from './Invention'
import './InventionsList.css'



class App extends Component {
  state = {
    inventions: []
  }

  componentDidMount() {
    fetch('/api/inventions')
    .then(res => res.json())
    .then(inventions => this.setState({inventions: inventions}))
  }


  render() {
    return (
      <div className="InventionsList">
        <header className="List-header">
          <h1 className="List-title">Liste des Inventions</h1>
        </header>

          <div className="List-list">
            <Invention inventionList={this.state.inventions} />
          </div>
        
      </div>
    );
  }
}

export default App;
