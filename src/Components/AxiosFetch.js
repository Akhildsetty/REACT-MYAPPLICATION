import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AxiosFetch = () => {
const[info,setinfo]=useState([])
  const getAPI=()=>{
    axios.get("https://jsonplaceholder.typicode.com/todos/").then((response)=>setinfo(response.data))
  }
  useEffect(()=>{
    getAPI();
  },[])
  return (
    <div className='App'>
      {info.map(item=><li key={item.id}>{item.title}</li>)}
    </div>
  )
}

export default AxiosFetch
