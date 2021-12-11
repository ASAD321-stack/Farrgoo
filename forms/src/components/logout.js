import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';


const Logout = () => {
    const navigate = useNavigate();
    const callLogout = async() => {
        const res = await fetch('/logout', {
            method:"GET",
                 headers:{
                     Accept: "application/json",
                     "Content-Type": "application/json"
             },
                 credentials:"include"
             });
             const data = await res.body;
             if(res.status!== 200)
             {
               navigate('/login');
             }
            
             
            }

        useEffect(()=> {
            callLogout();
        },[]);

    
    return (
    <h1>Logout</h1>
    );
}



export default Logout;