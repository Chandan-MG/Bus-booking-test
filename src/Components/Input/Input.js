import React, {useState} from "react";

const Input = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [entredPhone, setEnteredPhone] = useState('');
    const [enteredDropDown, setEnteredDropDown] = useState('');

    const nameChangeHandler = (event) =>{
        setEnteredName(event.target.value);
    }
    const emailChangeHandler = (event) =>{
        setEnteredEmail(event.target.value);
    }
    const phoneChangehandler = (event) =>{
        setEnteredPhone(event.target.value);
    }
    const busNumberChangeHandler = (event) =>{
        setEnteredDropDown(event.target.value);
    }

    const submitFormHandler = (event) => {
        event.preventDefault();
    
        const busData ={
          name: enteredName,
          email: enteredEmail,
          phone: entredPhone,
          busNumber: enteredDropDown
        }
        props.onSaveBusData(busData);
        console.log(busData);
        setEnteredName('');
        setEnteredEmail('');
        setEnteredPhone('');
        setEnteredDropDown('');
    }

    return(
        <form onSubmit={submitFormHandler}>
          <div>
            <label>Name: </label>
            <input type='text' value={enteredName} onChange={nameChangeHandler} />
          </div>
          <div>
            <label>Email: </label>
            <input type='email' value={enteredEmail} onChange={emailChangeHandler} />
          </div>
          <div>
            <label>Phone: </label>
            <input type='tel' value={entredPhone} onChange={phoneChangehandler} />
          </div>
          <div>
            <label>Bus Number</label>
            <select value= {enteredDropDown} onChange={busNumberChangeHandler}>
              <option>All</option>
              <option value='Bus 1'>Bus 1</option>
              <option value='Bus 2'>Bus 2</option>
              <option value='Bus 3'>Bus 3</option>
            </select>
          </div>
          <div>
            <button type='submit'>Book</button>
          </div>
        </form>
    )
}

export default Input;