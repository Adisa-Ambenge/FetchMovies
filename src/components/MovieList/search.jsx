import React, { useState } from "react"
import "./style.css"

const Search = ({ onSearch  }) => {
    const [searchValue,setSearchValue] = useState("");

    const handleInput = (event)=>{
        setSearchValue(event.target.value);

    }

    
    const handleSearchClick = ()=>{
        onSearch(searchValue);
    }
    return(
        <div>
            <input
             className="search"
             type="text" 
             placeholder="Search" 
             value={searchValue} 
            onChange={handleInput}/>
            <button onClick= {handleSearchClick}>Search</button>
        
            </div>
    )   
        
};
export default Search;