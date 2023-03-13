
import React from "react";

import logo from '../logo.svg';
import '../App.css';

import ResponsiveDateTimePickers from "../Components/Calendar";

function Home(){
    return (
        <div className="w-screen h-screen">
            <div className="w-screen">
                <ResponsiveDateTimePickers/>
            </div>
        </div>
    );
}

export default Home;