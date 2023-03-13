
import React from "react";

import logo from '../logo.svg';
import '../App.css';
import {Link} from "react-router-dom";

function Reservation(){
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn Reacte!
                </a>

                <Link to={'/Reservation'} className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium text-xl"
                > test</Link>
            </header>
        </div>
    );
}

export default Reservation;