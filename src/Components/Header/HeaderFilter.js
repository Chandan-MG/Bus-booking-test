import React from "react";

const HeaderFilter = (props) => {
    const dropdownChangeHandler = (event) =>{
        props.onChangeFilter(event.target.value);
        console.log(event.target.value);
    }
    return(
        <div>
            <label>Filter: </label>
            <select onChange={dropdownChangeHandler}>
              <option value='All'>All</option>
              <option value='Bus 1'>Bus 1</option>
              <option value='Bus 2'>Bus 2</option>
              <option value='Bus 3'>Bus 3</option>
            </select>
        </div>
    )
}

export default HeaderFilter;