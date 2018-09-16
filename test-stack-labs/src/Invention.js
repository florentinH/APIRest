import React from 'react'
import Popup from "reactjs-popup";
import './InventionsList.css'


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
                        <span type="delete" className="IoIosCloseCircleOutline" onClick={() => this.props.handleDelete(invention.id)}>
                            <IoIosCloseCircleOutline />
                        </span>
                            <Popup trigger={<button className="button"> Open Modal </button>} modal >
                            {close => (
                            <div className="modal">
                                <a className="close" onClick={close}>
                                &times;
                                </a>
                                <div className="header"> Modal Title </div>
                                <div className="content">
                                <div>{invention.name}</div>
                                <div>{invention.date}</div>
                                <div>{invention.inventor}</div>
                                <div>{invention.origin}</div>
                                <div>{invention.site}</div>
                                </div>
                                <div className="actions">
                                <button
                                    className="button"
                                    onClick={() => {
                                    console.log('modal closed ')
                                    close()
                                    }}
                                >
                                    close modal
                                </button>
                            </div>
                            </div>
                            )}
                        </Popup>
                    </div>
                    
                ))}
                
            </div>
        )
    }
}

export default Invention