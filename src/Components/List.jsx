import React from 'react'

const List = (props) => {

  return (
    <>
    <div className='todo_style'>
    <h5 onClick={()=>{
        props.onSelect(props.id)
    }}>×</h5>
       <li>{props.value}</li>
    </div>
    </>
  )
}

export default List
