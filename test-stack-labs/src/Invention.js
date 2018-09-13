import React from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";


class  Invention extends React.Component {

    render() {
        return (
            <div>
                {this.props.inventionList.map((invention, k) => (
                    <div key={k} className="List-item" >
                        <div>{invention.name}</div>
                        <div>{invention.date}</div>
                        <div>{invention.inventor}</div>
                        <div>{invention.origin}</div>
                        <div>{invention.site}</div>
                        <button type="delete" className="IoIosCloseCircleOutline" onClick={() => this.props.handleDelete(invention.id)}>
                            <IoIosCloseCircleOutline />
                        </button>
                    </div>
                ))}
            </div>
        )
    }
}

export default Invention