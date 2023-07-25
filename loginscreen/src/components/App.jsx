import React from 'react';
import Login from './Login';
import Registration from './Registartion';
import Homepage from './Homepage';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Foot from '../components/Foot';
import { ToastContainer } from 'react-toastify';

export default function App() {
    return (
        <div>
            <Router>
                <div className='container'>
                <Routes>
                    <Route exact path="/" element={<Homepage/>} />
                    <Route exact path="/login" element={<Login/>} />
                    <Route exact path="/registration" element={<Registration/>} />
                </Routes>
                </div>
                <ToastContainer position="top-right"/>
                <Foot/>
            </Router>
        </div>
    )
}
