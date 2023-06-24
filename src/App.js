import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);

  const [inputValue, setInputValue] = useState("")

  useEffect(() => {
   
    fetch('https://reqres.in/api/users?page=2')
    .then((response) => response.json())
    .then((data) => {
     setItems(data.data)
     console.log("fetch")
    })
  },[])
  
  
  
  const filteredItems = items.filter(item => {
    return item.first_name.toLowerCase().includes(inputValue.toLowerCase())
  })

  return (
    <>
      <div className='search-container'>
        <input value={inputValue} onChange={e => setInputValue(e.target.value)} type="search" placeholder='search'/>
      </div>
      <div>
        
      {filteredItems.map(item => {
        return (
          <div className='items-container'>
            <p>{item.id}</p>
            <div className='image-container'>
              <img src={item.avatar} alt=''></img>
            </div>
            <h4>{item.first_name}</h4>
          </div>
        )
      })}
    </div>
    </>
  );
}

export default App;
