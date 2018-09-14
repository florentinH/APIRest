import React, { Component } from 'react';
import Invention from './Invention'

import './InventionsList.css'

class Home extends Component {

  state = {
    inventions: [],
  }
  
  componentDidMount() {
    fetch('/api/inventions')
    .then(res => res.json())
    .then(inventions => this.setState({inventions: inventions}))
  }

  render() {
    return (
      
      <div className="List-list">
          {this.state.inventions.map((invention, k) => (
              <div key={k} className="List-item" >
                  <div>{invention.name}</div>
                  <div>{invention.date}</div>
                  <div>{invention.inventor}</div>
                  <div>{invention.origin}</div>
                  <div>{invention.site}</div>
              </div>
          ))}
      </div>     
    );
  }
}

export default Home;
