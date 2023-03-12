import React from 'react';

import './App.css';



import { Routes, Route} from "react-router-dom";
//import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";

function App() {
  return (
      <div className="App">

          {/*<header className="fixed w-full h-full z-50">
          <Navbar/>
        </header>*/}

          <p>tt</p>

        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>


      </div>
  );
}

export default App;
