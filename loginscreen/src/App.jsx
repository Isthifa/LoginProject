import React from 'react';
import Login from './components/Login';
import Registration from './components/Registartion';
import Homepage from './components/Homepage';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Foot from './components/Foot';
import { ToastContainer } from 'react-toastify';
import Dashboard from './components/Dashboard';
import NavBar from './components/NavBar';

export default function App() {
    return (
        <div>
            <NavBar/>
            <Router>
                <div className='container'>
                <Routes>
                    <Route exact path="/" element={<Homepage/>} />
                    <Route exact path="/login" element={<Login/>} />
                    <Route exact path="/registration" element={<Registration/>} />
                    <Route exact path="/dashboard" element={<Dashboard/>} />
                </Routes>
                </div>
                <ToastContainer position="top-right"/>
                <Foot/>
            </Router>
        </div>
    )
}
