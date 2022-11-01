import React from 'react'
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';


const ProtectedRoute = (props) => {
    const navigate = useNavigate();
    const [isRegistered, setIsRegistered] = useState(false);
    const checkUser = () =>{
      const userData = localStorage.getItem('name');
    if( !userData || userData === 'undefined'){
        setIsRegistered(false);
        return navigate('/header')
    }
    setIsRegistered(true);
}

useEffect(() =>{
    checkUser();
}, [isRegistered]);
  return (
    <>
        {isRegistered ? props.children : null}
    </>
  )
}

export default ProtectedRoute;