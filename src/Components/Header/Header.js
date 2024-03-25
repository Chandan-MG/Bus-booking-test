import React, { useState } from "react";

const Header = (props) => {

    const dropdownChangeHandler = (event) =>{
        props.onChangeFilter(event.target.value);
        // console.log(event.target.value);
    }
    return(
        <header>
          <div>
            <h1>Bus Booking</h1>
          </div>
          <div>
            <label>Filter: </label>
            <select value={props.selectedFilter} onChange={dropdownChangeHandler}>
              <option value='All'>All</option>
              <option value='Bus 1'>Bus 1</option>
              <option value='Bus 2'>Bus 2</option>
              <option value='Bus 3'>Bus 3</option>
            </select>
           </div>
        </header>
    )
}

export default Header;