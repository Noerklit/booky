import React, {useEffect, useState} from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import Footer from "./Footer";
import Home from "../views/Home";
import Browse from "../views/Browse";
import Upload from "../views/Upload";
import SignUp from './SignUp';
import Login from './Login'
import Listing from './Listing';

function App() {
  const user = localStorage.getItem;
  return (
    <Router>
      <div> 
        <Header />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/browse" element={<Browse/>} />
          <Route path="/upload" element={<Listing/>} />
          <Route path="/signup" element = {<SignUp/>} />

          <Route path="/login" element = {<Login/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App