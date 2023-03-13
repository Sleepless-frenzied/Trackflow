
import React from "react";

import '../App.css';

import ResponsiveDateTimePickers from "../Components/Calendar";

function Home(){
    return (
        <div className="w-screen h-screen">
            <div className="">
                <ResponsiveDateTimePickers/>
            </div>
        </div>
    );
}

export default Home;