import React from 'react'
import { useState } from 'react'
import List from './Components/List';

const App = () => {

  const [newList, setNewList] = useState("");
  const [add, setAdd] = useState([]);


  const addList = (e) =>{
    setNewList(e.target.value)
  }

  const listAdded = () => {
    setAdd((old)=>{
      return[
        ...old, newList
      ]
    })
    setNewList("")
  }

  const removeItem = (id) => {
    setAdd((old)=>{
      return old.filter((arrElem, i)=>{
        return i !== id;
      })
    })
  }

  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br/>
          <h1>TODO LIST</h1>
          <br/>
          <input 
            type='text'
            placeholder='Add Your Items'
            // name='list'
            value={newList}
            onChange={addList}
          />
          <button onClick={listAdded}>+</button>
          <ol>
            
            {add.map((val,index)=>{
              return (
                <>
                  <List
                  key ={index}
                  id= {index}
                  value={val}
                  onSelect = {removeItem}  
                  />
                </>
              )
            })}
          </ol>
        </div>
      </div>
    </>
  )
}

export default App
