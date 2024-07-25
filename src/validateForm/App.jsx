// import React, { useState } from "react"


// export default function App() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');
//   const [isError, setIsError] = useState(false);
//   const [eError, setError] = useState('');

//   function handleLogin(e){
//     e.preventDefault()
//     if(!username || !password || !email){
//       setIsError(true)
//       setError('All Fieldsmust be filled');
//     }
//     else if(!email.includes('@')){
//       setIsError(true)
//       setError('Email is invalid');
//     }
//     else{
//       setIsError(false)
//       setError('No Error Found! Congrats the user is logged in.');
//     }
//   }

//   return (
//     <div id="main">
//       <form action="">
//          <input type="text" placeholder="Username" onChange={(e)=> setUsername(e.target.value)}/>
//          <br />
//          <input type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)}/>
//          <br />
//          <input type="email" placeholder="Email" onChange={(e)=> setEmail(e.target.value)}/>
//          <br />
//          {eError && <p className={'error'} style={!isError ? {color: 'green'} : {color: 'red'}}>{eError}</p>}
//          <button onClick={handleLogin}>Login</button>
//       </form> 
      
      
//     </div>
//   )
// }


// const App = () => {
//   return(
//     users.map((user)=>{
//       return (
//         <div className="content" key={user.id}>
//             <p>Username: {user.username}</p>
//             <p>Gender: {user.isFemale ? "Female" : "Male"}</p>
//             <p>Email: {user.email}</p>
//         </div>
//       )
//     })
//   )
// }

// const App = () => {
//   const [counter1, setCounter1] = useState(0);
//   const [counter2, setCounter2] = useState(0);

//   const incrementA = () =>{
//     setCounter1(counter1+1);
//   }
//   const incrementB = () =>{
//     setCounter2(counter2+1);
//   }
//   return (
//     <div id="main">
//       <button id="btnA"
//       onClick={incrementA}>
//         Increment A
//       </button>
//       <button id = "btnB"
//       onClick={incrementB}>
//         Increment B
//       </button>
//       <div id="countA"></div>
//       <div id = "countB"></div>
//     </div>
//   )
// }
// import React, {useState} from 'react'
// // import '../styles/App.css';

// const App = () => {
//   const [counter1, setCounter1] = useState(0);
//   const [counter2, setCounter2] = useState(0);

//   const incrementA = () =>{
//     setCounter1(counter1 + 1);
//   }
//   const incrementB = () =>{
//     setCounter2(counter2 + 1);
//   }
//   return (
//     <div id="main">
//       <button id="btnA"
//       onClick={incrementA}>
//         Increment A
//       </button>
//       <button id = "btnB"
//       onClick={incrementB}>
//         Increment B
//       </button>
//       <div id="countA">counterA:{counter1}</div>
//       <div id = "countB">counterB:{counter2}</div>
//     </div>
//   )
// }


// export default App;