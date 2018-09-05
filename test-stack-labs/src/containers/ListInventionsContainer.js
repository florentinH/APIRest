import React, { Component } from 'react'

import ListInventions from '../components/ListInventions'

class ListInventionsContainer extends Component {
    state= {
        inventions:[]
    }

    componentDidMount() {
        fetch('/api/inventions')
        .then(res => res.json())
        .then(inventions => this.setState({
            inventions: inventions
        }))
    }

  render () {
    return (
        <div>
            <ListInventions
                iventions={this.state.items} />
        </div>
    
    )}
}

export default ListInventionsContainer
