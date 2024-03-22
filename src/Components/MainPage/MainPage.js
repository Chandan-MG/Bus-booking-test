import React, {useState} from "react";
import Header from "../Header/Header";
import HeaderFilter from "../Header/HeaderFilter";
import './MainPage.css';

const MainPage = (props) => {
    const [ filteredBus, setFilteredBus] = useState('Bus 1');

    const filterChangeHandler = (selectedBus) =>{
        setFilteredBus(selectedBus);
    }
    return(
        <div>
            <div className="App">
                <div>
                    <Header />
                </div>
                <div>
                    <HeaderFilter onChangeFilter={filterChangeHandler} />
                </div>
            </div>
        </div>
    )
}

export default MainPage;