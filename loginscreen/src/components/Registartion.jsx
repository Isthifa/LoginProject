import React from "react";

export default function Registration() {
    return (
        <form className="form">
            <h1>User Registration</h1>
            <input type="text" placeholder="Username" className='username' />
            <input type="text" placeholder="Email" className='username' />
            <input type="text" placeholder="Phone Number" className='username' />
            <input type="text" placeholder="Address" className='username' />
            <input type="password" placeholder="Password" className='username'/>
            <input type="password" placeholder="Confirm Password" className='username'/>
            <button type="submit" >Register</button>
        </form>
    )
}