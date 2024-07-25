import React, {useState} from 'react'
import './style.css'

// export default function App() {
//     const [formData, setFormData] = useState({
//         name: '',
//         age: '',
//         email: ''
//     });

//     function handleNameChange(e) {
//         setFormData({ ...formData, name: e.target.value });
//     }

//     function handleAgeChange(e) {
//         setFormData({ ...formData, age: e.target.value });
//     }

//     function handleEmailChange(e) {
//         setFormData({ ...formData, email: e.target.value });
//     }
//     function submitForm(e){
//         e.preventDefault();
//         console.log(formData); //submit it to an API
//         //reset form
//         setFormData({
//             name: "",
//             age: "",
//             email: ""
//         })
//     }

//   return (
//     <div>
//         <form action=''>
//             Name: <input type='text' value={formData.name} onChange={handleNameChange}></input>
//             Age: <input type='number' value={formData.age} onChange={handleAgeChange}></input>
//             Email: <input type='text' value={formData.email} onChange={handleEmailChange}></input>
//             <button type='submit' onClick={submitForm}>Submit</button>
//         </form>
      
//     </div>
//   )
// }


// Handled Scalability of controlled components forms ( States and functions)

     // Form Error Handling

