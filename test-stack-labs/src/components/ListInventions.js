import React, { Component } from 'react'
import Invention from './Invention'
//import FormInvention from './containers/FormInvention'


class ListInventions extends Component {
    render () {
        const {inventions} = this.props
        console.log(inventions)
        
        return (
            <div>
             
                {
                    this.props.inventions.map(
                        (invention) => <Invention invention={invention} />
                    )
                }
            </div>
        )
    }
}

export default ListInventions