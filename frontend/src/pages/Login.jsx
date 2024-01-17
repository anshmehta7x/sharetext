import { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';

const serverUrl = "http://localhost:3000";

function Login(){
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function handleLogin(){
        axios.post(serverUrl + "/login",{
            username: username,
            password: password
        })
        .then(res=>{
            console.log(res)
            if(res.status === 200){
                setError("");
                localStorage.setItem("currentUserId", res.data);
                navigate('/feed')
            }
        }) 
        .catch(err=>{
            setError(err.response.data.err)
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