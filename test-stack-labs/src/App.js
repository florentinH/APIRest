import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import ListInventionsContainer from './containers/ListInventionsContainer'


class App extends Component {
  render() {
    return (
      <div className="List">
        <header className="List-header">
          <h1 className="List-title">Liste des Inventions</h1>
        </header>
        <BrowserRouter>
          <div className="List-list">
            <Route path="/" component={ListInventionsContainer} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
