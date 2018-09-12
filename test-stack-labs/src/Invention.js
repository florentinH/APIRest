import React from 'react'

class  Invention extends React.Component {

    render() {
        return (
            <div>
                {this.props.inventionList.map((invention, k) => (
                    <div
                        key={k}
                        className="List-item"
                    >
                        <div>{invention.name}</div>
                        <div>{invention.date}</div>
                        <div>{invention.inventor}</div>
                        <div>{invention.origin}</div>
                        <div>{invention.site}</div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Invention