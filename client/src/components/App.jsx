import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import Footer from "./Footer";
import Home from "../views/Home";
import Browse from "../views/Browse";
import Upload from "../views/Upload";
import SignUp from './SignUp';
import Profile from '../views/Profile';
import BookInfo from './BookInfo';

function App() {
 
  return (
    <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/browse" element={<Browse/>} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/signup" element = {<SignUp/>} />
          <Route path="/profile" element = {<Profile/>} />
          <Route exact path="/:id" element={<BookInfo />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App