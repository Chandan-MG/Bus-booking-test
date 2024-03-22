
import './App.css';
import React, { useState } from 'react';
import List from './Components/Item-List/List';
import MainPage from './Components/MainPage/MainPage';
import NewInput from './Components/Input/NewInput';

const DUMMY_BUSES = [
];

function App() {

  const [buses, setBuses] = useState(DUMMY_BUSES);

  const addBusHandler = (bus) => {
    setBuses((prevBuses)=> {
      return [...prevBuses, buses]
    })
  }
  
  return (
    <div>
      <MainPage />
    
      <div>
          <NewInput onAddBus={addBusHandler} />
      </div>
      <div>
          <List items={buses}/>
      </div>
    </div>
  );
}

export default App;
