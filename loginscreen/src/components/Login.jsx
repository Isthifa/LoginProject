import axios from "axios";
import React, { useState } from "react";
import {AiFillEyeInvisible,AiFillEye} from "react-icons/ai";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import {useNavigate} from "react-router-dom";



export default function Login() {
    const [passwordShown,setPasswordShown]=useState(false);
    const togglePasswordVisiblity=()=>{
        setPasswordShown(!passwordShown);
    }
    const [logindata,setLogindate]=useState({
        email:"",
        password:""
    });
    const handleChange=(e)=>{
        setLogindate({...logindata,[e.target.name]:e.target.value});
        
    }
    const navigate=useNavigate();
    const {email,password}=logindata;

    const handleSubmit = async(e) => {
        e.preventDefault();
        const formdata = { email, password };
        console.log(formdata);
        console.log(logindata);
        await axios.post("http://localhost:8080/api/login", formdata).then((res) => {
            console.log(res);
            res.status === 200 && toast.success("User Logged In Successfully");
            if(res.status===200){
                navigate("/dashboard");
            }
            setLogindate(formdata);
        }).catch((error) => {
            console.log(error);
            if (error.response.status === 400) {
                toast.error("Invalid Credentials", { position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark"
              });
              } else {
                toast.error("An unexpected error occurred");
              }});

        }
  
    
  return (
    <div className="main">
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <h1>Welcome</h1>
        <input type="text" name="email" placeholder="email" className='username' onChange={(e)=>handleChange(e)} />
        <input type={(passwordShown===false)? 'password':'text'} name="password" placeholder="Password" className='username' onChange={(e)=>handleChange(e)}/>
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
