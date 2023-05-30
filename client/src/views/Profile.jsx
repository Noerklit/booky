import React, { useState, useEffect } from "react";
import Login from "../components/Login";
import User from "../components/User";

function Profile(){
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const username = localStorage.getItem("username");
        setLoggedIn(username !== null);
    }, []);

  	const handleLogin = () => {
  	  	setLoggedIn(true);
  	};

  	const handleLogout = () => {
  	  	setLoggedIn(false);
  	};

    return(
        loggedIn ? (
            <User onLogout={handleLogout} /> 
        ) : ( 
            <Login onLogin={handleLogin} />
        )
    );
}

export default Profile;