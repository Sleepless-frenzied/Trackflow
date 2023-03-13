import React from 'react';

import './App.css';



import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Reservation from "./Pages/Reservation";

function App() {
  return (
      <div className="App">
          <Navbar/>


          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/Reservation" element={<Reservation/>}/>
              </Routes>
          </BrowserRouter>



      </div>
  );
}

export default App;
