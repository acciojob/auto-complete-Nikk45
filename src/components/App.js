
import React, { useState } from "react";
import './../styles/App.css';


const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"]

const App = () => {

  const [searchValue, setSearchValue] = useState('')

  let filteredFruits = fruits.filter((fruit)=>fruit.includes(searchValue));

  // console.log(filteredFruits);

  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Search item</h1>
        <input type="text" value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}/>

        <div className="items">
            <ul>
              {
                filteredFruits.map((fruit,index)=><li key={index}>{fruit}</li>)
              } 
            </ul>
        </div>
    </div>
  )
}

export default App
