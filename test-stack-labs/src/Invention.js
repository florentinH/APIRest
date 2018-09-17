import React from 'react'


import { IoIosCloseCircleOutline } from "react-icons/io";


class  Invention extends React.Component {

    render() {
        return (
            <div>
                {this.props.inventionList.map((invention, k) => (
                    <div key={k} className="List-item" >
                        <div>
                            <div>{invention.name}</div>
                            <div>{invention.date}</div>
                            <div>{invention.inventor}</div>
                            <div>{invention.origin}</div>
                            <div><a className="link-site" href={invention.site} target="_blank">{invention.site}</a></div>
                            

                        </div>
                            <span type="delete" className="IoIosCloseCircleOutline" onClick={() => this.props.handleDelete(invention.id)}>
                                <IoIosCloseCircleOutline />
                            </span>                        
                    </div>
                    
                ))}
            </div>
        )
    }
}

export default Invention