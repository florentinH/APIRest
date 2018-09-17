import React, { Component } from 'react';
// import Invention from './Invention'

const API = '/inventions'

class Home extends Component {

  state = {
    inventions: [],
  }

  
  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(data => this.setState({ inventions: data}))
  }

  render() {
    return (
      
      <div id="content" className="List-list">
         <h1 className="List-title">Les plus grandes inventions</h1>
          {this.state.inventions.map((invention, k) => (
              <div key={k} className="List-item" >
                  <div>{invention.name}</div>
                  <div>{invention.date}</div>
                  <div>{invention.inventor}</div>
                  <div>{invention.origin}</div>
                  <div><a className="link-site" href={invention.site} target="_blank">{invention.site}</a></div>
              </div>
          ))}
      </div>     
    );
  }
}

export default Home;
