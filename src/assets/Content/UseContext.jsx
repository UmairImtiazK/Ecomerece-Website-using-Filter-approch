import React, { useState, createContext } from 'react'
export const UserContext = createContext(null);

export default function UseContext(props) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [slectedPrice, setSlectedPrice] = useState({
    first: "",
    last: ""
  });
  const [inputValue,setInput] = useState('');
    const contextValue = {inputValue,setInput,selectedCategory,setSelectedCategory,slectedPrice,setSlectedPrice};
  return (
    <div>
      <UserContext.Provider value={contextValue}>
        {props.children}
      </UserContext.Provider>
    </div>
  )
}
