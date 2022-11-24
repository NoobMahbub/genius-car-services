import React, { useState } from 'react';
import { useEffect } from 'react';


const useServices = () =>{
    const [services, setServices] = useState([]);
    
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/service`)
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);
    

    return [services, setServices];
}
export default useServices;