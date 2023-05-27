import React, {useState} from 'react'

function CreateUserLogin() {
    const [username, setUserId] = useState("");
    const [password, setPassword] = useState("");

    async function handleForm(event){
        event.preventDefault();
        let userData = {
            userId: username,
            password: password
        }
        const response1 = await fetch("/api/login", {
            method: 'post',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        }).then(response => response.json()).then(data =>{
            if(response1.status === 200) {

            } else {
                alert("Username is taken");
            }
            console.log(data);
        })
        console.log("clicked")
    }

  return (
    <div>
        <form onSubmit={handleForm}>
            <label>Username</label>
            <input type="text" name="username" onChange={e=>setUserId(e.target.value)}/><br/>
            <label>Password</label>
            <input type="password" name="password" onChange={e=>setPassword(e.target.value)}/><br/>
            <input type="submit" value="Create User"/>
        </form>
    </div>
  )
}

export default CreateUserLogin