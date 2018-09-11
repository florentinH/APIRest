import React from 'react'

class  Invention extends React.Component {

    render() {
        return (
            <div>
                {this.props.iventionList.map((invention, k) => (
                    <div
                        key={k}
                        className="List-item"
                    >
                        <div>{invention.name}</div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Invention