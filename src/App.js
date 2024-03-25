
import './App.css';
import React, { useState } from 'react';
import List from './Components/Item-List/List';
import NewInput from './Components/Input/NewInput';
import Header from './Components/Header/Header';

const DUMMY_BUSES = [];

function App() {

  const [buses, setBuses] = useState(DUMMY_BUSES);
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filterBuses = () => {
    if (selectedFilter === 'All') {
      return buses;
    } else {
      return buses.filter(bus => bus.busNumber === selectedFilter);
    }
  }

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  }

  const addBusHandler = (bus) => {
    setBuses((prevBuses)=> {
      return [...prevBuses, bus]
    })
  }

  const onDeleteBusHandler = (busId) => {
    setBuses((prevBuses) => {
      return prevBuses.filter((bus) => bus.id !== busId);
    });
  };

  const onEditBusHandler = (busId, updatedBus) => {
    setBuses((prevBuses) =>
    prevBuses.map((bus) =>
      bus.id === busId ? { ...bus, ...updatedBus } : bus
    )
    );
  };

  
  return (
    <div>
      <div className="App">
        <Header onChangeFilter={handleFilterChange} selectedFilter={selectedFilter} />
      </div>
    
      <div>
        <div>
            <NewInput onAddBus={addBusHandler}/>
        </div>
        <div>
            <List 
              items={filterBuses()} 
              onDeleteBus={onDeleteBusHandler} 
              onEditBus={onEditBusHandler} 
            />
        </div>
      </div>
    </div>
  );
}

export default App;
