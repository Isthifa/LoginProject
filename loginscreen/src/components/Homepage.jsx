import React from "react";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate("/login");
    }
    const handleRegister = () => {
        navigate("/registration");
    }
    return (
        <div className="homepage">
            <div className="homepage__container">
                <button type="submit" onClick={handleLogin}className="login">Login</button>
                <button type="submit" onClick={handleRegister} className="login">Register</button>
            </div>
        </div>
    )
}