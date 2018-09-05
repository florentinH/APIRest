import React from 'react'

class Invention extends React.Component {
    render() {
        const invention = this.props.invention
        return (
            <div className="List-item">
                <h2>{invention.name}</h2>
            </div>
        )
    }
}

export default Invention
