import React, {useState} from "react";
import './Item.css';

const Item = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedData, setEditedData] = useState({}); // State to hold edited data

    const deleteBus = () =>{
        props.onDeleteBus(props.id)
    }
    const handleEdit = () => {
        setIsEditing(true);
        // Set initial edited data to the current bus data
        setEditedData({
            name: props.name,
            email: props.email,
            phone: props.phone,
            busNumber: props.busNumber
        });
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        // Update the edited data state
        setEditedData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // Pass the edited data to the parent component
        props.onEditBus(props.id, editedData);
        setIsEditing(false);
    }

    return(
        <div className="item">
            {isEditing ? (
                <form onSubmit={handleSubmit}>
                    <label>Name: </label>
                    <input type='text' name='name' value={editedData.name} onChange={handleChange} />
                    <label> Email: </label>
                    <input type='email' name='email' value={editedData.email} onChange={handleChange} />
                    <label> Phone: </label>
                    <input type='tel' name='phone' value={editedData.phone} onChange={handleChange} />
                    <label> Bus Number: </label>
                    <select name='busNumber' value={editedData.busNumber} onChange={handleChange}>
                        <option>Select Any</option>
                        <option value='Bus 1'>Bus 1</option>
                        <option value='Bus 2'>Bus 2</option>
                        <option value='Bus 3'>Bus 3</option>
                    </select>
                    <button type='submit'>Save</button>
                </form>
            ) : (
                <>
                    <span>{props.name}</span>
                    <span>{props.email}</span>
                    <span>{props.phone}</span>
                    <span>{props.busNumber}</span>
                    <button onClick={deleteBus}>Delete</button>
                    <button onClick={handleEdit}>Edit</button>
                </>
            )}
        </div>
    ) 
}

export default Item;
