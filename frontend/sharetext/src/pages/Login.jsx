import { useState } from "react";
import axios from "axios";

const serverUrl = "http://localhost:3000";

function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function handleLogin(){
        console.log("OKOKO")
        axios.post(serverUrl + "/login",{
            username: username,
            password: password
        })
        .then(res=>{
            if(res.status === 200){
                console.log("VALID")
            }
            else{
                setError("Invalid Username Password Combination")
            }
        })
        .catch(err=>{
            console.log(err.response)
            setError("Unable too connect to server")
        })
    }

    return <div>
        <label>Username</label>
        <input 
            type="text"
            value = {username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password</label>
        <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <br></br>
        <label className="ErrorBox">{error}</label>
    </div>
}

export default Login