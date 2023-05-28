import React, {useEffect, useState} from "react";
import Listing from "../components/Listing";
import Login from "../components/Login";

function Upload() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
      const username = localStorage.getItem("username");
      setLoggedIn(username !== null);
  }, []);

  const handleLogin = () => {
    setLoggedIn(true);
  };


    return (
      <div>
        {loggedIn ? 
        <Listing/> : 
        <Login onLogin={handleLogin}/> }
      </div>
    );
  }
  
  export default Upload