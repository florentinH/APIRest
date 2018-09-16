import React, { Component } from 'react'
import Invention from './Invention'
import './InventionsList.css'


class ListInventions extends Component {

    state = {
        inventions: [],
        addInvention: []
      }
    
      componentDidMount() {
        fetch('/inventions')
        .then(res => res.json())
        .then(data => this.setState({inventions: data}))
      }
    
      handleChange = e => {
        const name = e.target.name
        const value = e.target.value
        this.setState({
          [name]: value
        })
      }
    
      handleSubmit = (e) => {
        fetch('/inventions', {
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
      

      handleResetList = () => {
        fetch(`/inventions/init`, {
          method: 'PUT',
          headers: new Headers({
            'Content-Type': 'application/json'
          }),
        })
        .then(res => res.json())
        .then(inventions => this.setState({ inventions: inventions }))
      }

    
      handleDelete = (id) => {
        fetch(`/inventions/${id}`, {
          method: 'DELETE',
          headers: new Headers({
            'Content-Type': 'application/json'
          }),
        })
        .then(res => res.json())
        .then(inventions => this.setState({ inventions: inventions }))       
      }

    render() {
        return (
            <div>
    
            <div className="List-list">
              <h1 className="List-title">Liste des Inventions</h1>
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

export default ListInventions;