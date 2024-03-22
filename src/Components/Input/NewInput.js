import React from "react";
import Input from "./Input";

const NewInput = (props) => {

    const savedBusHandler = (buses) =>{
        const busesData = {
            ...buses,
            id: Math.random().toString
        }
        props.onAddBus(busesData);
    }
    return(
        <Input onSaveBusData={savedBusHandler} />
    )
}

export default NewInput;