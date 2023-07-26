import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

export default function Registration() {

    const [userdata, setUserdata] = useState({
        username: "",
        email: "",
        phoneNumber: "",
        address: "",
        password: "",
        confirmpassword: ""
    });

   const handleChange = (e) => {
    setUserdata({...userdata,[e.target.name]:e.target.value});
    }

    const handleSubmit =async(e) => {
        e.preventDefault();

        if (!username.trim() || !email.trim() || !phoneNumber.trim() || !address.trim() || !password.trim() || !confirmpassword.trim()) {
            toast.error("All fields are mandatory");
          } else if (password !== confirmpassword) {
            toast.error("Password and Confirm Password should be the same");
          } else {
              const user = {
                username: username.trim(),
                email: email.trim(),
                phoneNumber: phoneNumber.trim(),
                address: address.trim(),
                password: password.trim(),
                confirmpassword: confirmpassword.trim()
              };
        console.log(user);
        await axios.post("http://localhost:8080/api/register", user).then((res) => {
            res.status === 200 && toast.success("User Registered Successfully");
            // console.log(res.data);
            // console.log(res.data.response.data);
            setUserdata(res.data);
        }).catch((error) => {
            console.log(error);
            console.log(error.response.data.username);
            if (error.response.status === 400) {
              toast.error(error.response.data.message);
              } else if(error.response.status === 500){
                toast.error(error.response.data[0]);
              } 
              else {
                toast.error("An unexpected error occurred");
              }
        });
}}
    

    const { username, email, phoneNumber, address, password, confirmpassword } = userdata;

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="form">
            <h1>User Registration</h1>
            <input type="text" name="username"placeholder="Username" value={username} className='username' onChange={(e) => handleChange(e)} />
            <input type="text" name="email" placeholder="Email" className='username' onChange={(e) => handleChange(e)} />
            <input type="text" name="phoneNumber" placeholder="Phone Number" className='username' onChange={(e) => handleChange(e)} />
            <input type="text" name="address" placeholder="Address" className='username'  onChange={(e) => handleChange(e)}/>
            <input type="password" name="password" placeholder="Password" className='username'  onChange={(e) => handleChange(e)}/>
            <input type="password" name="confirmpassword" placeholder="Confirm Password" className='username'  onChange={(e) => handleChange(e)}/>
            <button type="submit" >Register</button>
        </form>
    )
}