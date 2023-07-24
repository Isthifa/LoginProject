import React, { useState } from "react";
import {AiFillEyeInvisible,AiFillEye} from "react-icons/ai";




export default function Login() {
    const [passwordShown,setPasswordShown]=useState(false);
    const togglePasswordVisiblity=()=>{
        setPasswordShown(!passwordShown);
    }

    
  return (
    <div className="main">
    <form className="form">
        <h1>Welcome</h1>
        <input type="text" placeholder="Username" className='username' />
        <input type={(passwordShown===false)? 'password':'text'} placeholder="Password" className='username'/>
        <button type="submit">Log In</button>
        <div className='eye'>
                      {
                          (passwordShown === false)? <AiFillEye onClick={togglePasswordVisiblity}/>:
                          <AiFillEyeInvisible onClick={togglePasswordVisiblity}/>

                      }
                    </div>
    </form>
    </div>
  )
}
