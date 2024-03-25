import React from "react";
import Item from "./Item";

const List = (props) => {
    return (
        <ul className="expense-list" >
            {
                props.items.map((bus) => (
                    <Item
                        key={bus.id}
                        id={bus.id}
                        name={bus.name}
                        email={bus.email}
                        phone={bus.phone}
                        busNumber = {bus.busNumber}
                        onDeleteBus={props.onDeleteBus}
                        onEditBus={props.onEditBus}
                    />
                ))
            }
        </ul>
    )
}

export default List;
