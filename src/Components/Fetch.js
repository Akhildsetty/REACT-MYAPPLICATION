import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'



const Fetch = () => {
    
    const [info, setinfo] = useState([]);
    const getApiData = async () => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos/"
        ).then((response) => response.json());
    
        // update the state
        setinfo(response);
        
       console.log(response);
    }; 
    useEffect(() => {
        getApiData();
    }, []);
    return (
        <div>
            {info.map(item => <li key={item.id}>{item.id} {item.title}</li>)}
        </div>
    )
}
export default Fetch
