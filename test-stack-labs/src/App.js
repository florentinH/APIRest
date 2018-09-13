import React, { Component } from 'react';
import Invention from './Invention'
import './InventionsList.css'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";




class App extends Component {
  state = {
    inventions: [],
    addInvention: []
  }

  componentDidMount() {
    fetch('/api/inventions')
    .then(res => res.json())
    .then(inventions => this.setState({inventions: inventions}))
  }

  handleChange = e => {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    fetch('/api/inventions', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(newInvention => {
      console.log(newInvention)
    })
  }

  handleDelete = (id) => {
    fetch(`/api/inventions/${id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(res => {
      const inventionsCopy = [...this.state.inventions]
      const index = inventionsCopy.findIndex(invention => {
        return invention.id === id}
        )
      inventionsCopy.splice(index, 1)
      this.setState({ inventions: inventionsCopy })
    })
  }


  render() {
    return (
      <div className="InventionsList">
        <header className="List-header">
          <h1 className="List-title">Liste des Inventions</h1>
        </header>

        <div className="List-list">
          <form onSubmit={this.handleSubmit}>
            <h5>Ajouter une invention</h5>
            <div>
              <input name="name" placeholder="Nom de l'invention" onChange={this.handleChange}/>
              <input name="date" placeholder="Année" onChange={this.handleChange}/>
              <input name="inventor" placeholder="Nom de l'inventeur" onChange={this.handleChange}/>
              <input name="origin" placeholder="Pays" onChange={this.handleChange}/>
              <input name="site" placeholder="Site internet" onChange={this.handleChange}/>
              <button type="submit">
                <span type="submit" className="IoIosCheckmarkCircleOutline">Valider</span>
              </button>
            </div>          
          </form>
        </div>

          <div className="List-list">
            <Invention 
              inventionList={this.state.inventions}
              handleDelete = {this.handleDelete} />
          </div>
        
      </div>
    );
  }
}

export default App;
