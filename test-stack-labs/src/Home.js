import React, { Component } from 'react';
// import Invention from './Invention'
import './InventionsList.css'

const API = '/inventions'
// const DEFAULT_QUERY = 'redux';

  // const contentContainer = document.getElementById('content')


class Home extends Component {

  state = {
    inventions: [],
  }

  
  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(data => this.setState({ inventions: data}))
  }

//   .then(data => {
//     contentContainer.innerHTML = data.map(createCharacterElement).join("")
//  })

  render() {
    return (
      
      <div id="content" className="List-list">
         <h1 className="List-title">Découverte</h1>
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
