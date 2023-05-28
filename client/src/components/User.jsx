import React, { useState } from "react";
import Button from 'react-bootstrap/Button';



function User({ onLogout }){

    function handleLogout(event) {
        event.preventDefault();
        localStorage.removeItem("username");
        onLogout();
    }
    const username = localStorage.getItem("username");
    return(
        
        <div>
            <h1>Welcome {username}</h1>
            <Button className="bg-danger" type="submit" onClick={handleLogout}>Logout</Button>{' '}
        </div>
    );
}

export default User;