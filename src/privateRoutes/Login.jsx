import React, {useState} from 'react'
import { Link } from 'react-router-dom';



export default function Login({ email, password, setLoggedIn}) {
    const [emailval, setemailval] = useState("");
    const [passval, setpassval] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        // console.log(emailval);
        // console.log(email);
        // console.log(passval);
        // console.log(password);

        if(emailval == email && passval == password && emailval){
            setLoggedIn(true);
        }
    }
    return (
        <div id='loginPage'>
          <h1 id='login-tag'>Login</h1>
          <form onSubmit={handleSubmit}>
            <h3>Email</h3>
            <input 
              placeholder='abc@gmail.com' 
              type='email' 
              id='login-email' 
              value={emailval} 
              onChange={(e) => setEmailval(e.target.value)} 
            />
            <h3>Password</h3>
            <input 
              placeholder='Enter password' 
              type='password' 
              id='login-password' 
              value={passval} 
              onChange={(e) => setPassval(e.target.value)} 
            /><br />
            <button id='login-submit' type='submit'>Login</button>
          </form>
          <br />
          Don't have an account ?
          <button id='login-to-register'>
            <Link to="/Register">Register here ..</Link>
          </button>
        </div>
      );
    }
    
