import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header/Header';
import { Main } from './Components/Main/Main';
// import { data } from './data ';
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
  // const callApi = async () => {

  //   try{
  //       const res = await fetch("https://hp-api.onrender.com/api/characters")
  //       if(!res){
  //         alert("error");   
  //     }     
      
  //      const data = await res.json();
  //      const filteredcards = data.filter(el=>(schoolName)?(el.name.toLowerCase().includes(inputValue))&&(el.house==schoolName):(el.name.toLowerCase().includes(inputValue)))
  //     setSelectedPerson(selectedPerson)
  //     console.log(filteredcards);
      
  //     console.log(data[0].name);
  //   }  
    
  //     catch (err) {
	// 			console.error("err");
				
	// 		}
        

  // }

useEffect( () => {
  async function func() {

    try{
        const res = await fetch("https://hp-api.onrender.com/api/characters")
        if(!res){
          alert("error");   
      }     
      
       const data = await res.json();
       const filteredcards = data.filter(el=>(schoolName)?(el.name.toLowerCase().includes(inputValue))&&(el.house==schoolName):(el.name.toLowerCase().includes(inputValue)))
      setSelectedPerson(filteredcards)
      console.log(selectedPerson);
         
  
    }  
    
      catch (err) {
				console.error("err");				
			}
        

  }
  func()
}
// func();
, [inputValue, schoolName])

  // useEffect(()=>{
  //   fetch("https://hp-api.herokuapp.com/api/characters")
  //   .then(res=>res.json())
  //   .then((json)=>{
  //     console.log(json);
  //     setSelectedPerson(json)
  //   }).catch(err=>{
  //     console.log(err);
  //     alert("error")
  //   },[])
  

  // }  )  

  // useEffect(()=>{   
  //   //  const filteredcards = data.filter(el=>schoolName?el.house==schoolName:el.name)
  //   // const filteredcards = data.filter(el=>(el.name.toLowerCase().includes(inputValue))&&(el.house==schoolName)) 
  //   const filteredcards = data.filter(el=>(schoolName)?(el.name.toLowerCase().includes(inputValue))&&(el.house==schoolName):(el.name.toLowerCase().includes(inputValue))) 
  //  setSelectedPerson(filteredcards)
  // },[inputValue,schoolName])

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
