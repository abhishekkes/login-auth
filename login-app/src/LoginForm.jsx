import {useState} from 'react'
import "./LoginForm.css"
const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleLogin = () => {
        if (username && password)
         {
            alert("Data Send to Server");
        } else {
            alert('Both fields are required!');
        }
    };
  return (
  
    <div className="login">
    <label><b>User Name
        </b>
        </label>
    <input 
        type="text" 
        value={username} id="Uname"
        onChange={e => setUsername(e.target.value)} 
    />
    <br/>
    <label><b>Password
        </b>
        </label>
    <input 
        type="password" 
        value={password} id="Pass" 
        onChange={e => setPassword(e.target.value)} 
    /><br/><br/>
    <button id="log" onClick={handleLogin}>Login</button><br/><br/>
    
   
    </div>

  )
}

export default LoginForm