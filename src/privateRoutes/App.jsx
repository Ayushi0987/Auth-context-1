import React, {useState} from 'react'
import './style.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';

// function LoggedIn({children, loggedIn}){
//     if(!loggedIn) <Navigate to="/" />
//       return <>{children} </>
// }

export default function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    // const [navigate, setnavigate] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Debugging: Logging state changes
    console.log('loggedIn:', loggedIn);
    console.log('email:', email);
    console.log('password:', password);
  
  return (
    <div id='App'>
      <Router>
        <Routes>
          <Route path="/" element={loggedIn ? <Navigate to="/dashboard" /> : <Login email={email} password={password} setLoggedIn={setLoggedIn} />} />
          <Route path="/Register" element={loggedIn ? <Navigate to="/" /> : <Register emailChange={setEmail} passwordChange={setPassword} />} />
          <Route path="/dashboard" element={!loggedIn ? <Navigate to="/" /> : <Dashboard setLoggedIn={setLoggedIn} />} />
        </Routes>
      </Router>
    </div>
  )
}
