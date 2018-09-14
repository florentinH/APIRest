import React from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";


class  DeleteInvention extends React.Component {

    render() {
        return (
            <div>
            {this.props.DeleteInvention(invention => (
                    <span type="delete" className="IoIosCloseCircleOutline" onClick={() => this.props.handleDelete(invention.id)}>
                        <IoIosCloseCircleOutline />
                    </span>
                ))}
            </div>
        )
    }
}

export default DeleteInvention