import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header/Header';
import { Main } from './Components/Main/Main';
import { data } from './data ';
import {  useState, useEffect} from 'react';
import { Card } from './Components/Card';
import React from 'react';

function App() {
  
  const [selectedPerson, setSelectedPerson]=useState([]);  
  const [schoolName, setSchoolName] =useState("");
  const [inputValue, setInputValue]= useState("");  

  const handleInput=(e)=>{
    setInputValue(e.target.value)  
  }

  const handleSelect=(e)=>{
    setSchoolName(e.target.value) 
  }
   
  useEffect(()=>{   

    const filteredcards = data.filter(el=>(el.name.toLowerCase().includes(inputValue))&&(el.house==schoolName)) 
   setSelectedPerson(filteredcards)
  },[inputValue,schoolName])


  return (
    <div >
     <Header 
     inputValue={inputValue}
     schoolName={schoolName}
     handleInput={handleInput}
     handleSelect={handleSelect}
     />
     <Main filtered={selectedPerson}
    />
      
     
    
    </div>
  ); 
}

export default App;
