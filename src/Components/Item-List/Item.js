import React from "react";

const Item = (props) => {
    return(
        <div className="item">
            <div>
                {props.name}
            </div>
            <div>
                {props.email}
            </div>
            <div>
                {props.phone}
            </div>
            <div>
                {props.busNumber}
            </div>
            <button>Delete</button>
            <button>Edit</button>
        </div>
    )
}

export default Item;