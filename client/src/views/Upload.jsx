import React, {useEffect, useState} from "react";
import Listing from "../components/Listing";
import Login from "../components/Login";

function Upload() {
  	const [loggedIn, setLoggedIn] = useState(false);
  	const [alertLogin, setAlert] = useState(null);
  	useEffect(() => {
      	const username = localStorage.getItem("username");
      	setLoggedIn(username !== null);
      	setAlert(<div className="alert alert-warning">You have to be logged in to sell/rent books</div>)
  	}, []);

  	const handleLogin = () => {
    	setLoggedIn(true);
  	};


    return (
      	<div>
        	{loggedIn ? 
        		<Listing/> : 
        		<Login onLogin={handleLogin} alertLogin={alertLogin}/>
			}
      	</div>
    );
}
  
export default Upload