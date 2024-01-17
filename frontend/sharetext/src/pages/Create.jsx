import { useState } from "react";
import {Link,useNavigate} from 'react-router-dom';
import axios from "axios";

const serverUrl = "http://localhost:3000";

function Create(){
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    function handleCreate(){
        if(password !== confirmpassword){
            setError("Passwords do not match");
            return;
        }
        else{
            setError("");
        }
        axios.post(serverUrl + "/newuser",{
            username: username,
            email: email,
            password: password
        })
        .then(res=>{
            localStorage.setItem("currentUserId", res.data);
            navigate('/feed')
        })
        .catch(error=>{
            console.log(error);
        })
        alert("Account created");
    }

    return <div>
        <label>Username</label>
        <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <label>Confirm password</label>
        <input
            type="password"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button onClick={handleCreate}>Create Account</button>
        <br/>
        <label className="ErrorBox">{error}</label>
        <br/>
        <p>Already have an account?</p>
        <Link to="/login">Login</Link>
    </div>
}

export default Create