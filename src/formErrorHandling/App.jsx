import React, {useState} from 'react'
import './style.css';

export default function App() {
    const [formData, setFormData] = useState({
        fullname: {value: "", error: "The name cannot be empty"},
        age: {value: "", error: ""},
        email: {value: "", error: ""},
    });
    function submitForm(e){
        e.preventDefault();
        let isError = false;
        if(formData.fullname.value.length < 3){
            isError = true;
            setFormData((prevState) => ({
                ...prevState, 
                fullname: {...prevState.fullname, error: 'The name should be greater than 3'}}))
            // formData.fullname.error = 'The name should be greater than 3'
        }
        if(parseInt(formData.age.value) < 18){
            isError = true;
            setFormData((prevState) => ({
                ...prevState,
                age: {...prevState.age,error: 'The age should be greater than 18 or equal to 18'}}))
            // formData.age.error = 'The age should be greater than 18 or equal to 18'
        }
        if(formData.email.value.length < 10){
            isError = true;
            setFormData((prevState) => ({
                ...prevState,
                email: {...prevState.email,error: 'Please enter correct email'}}))
            // formData.email.error = 'Please enter correct email'
        }
        if(isError){
            alert('Please correct the form values')
            return;
        }
        console.log(formData);
        // reset form
        // setFormData({
        //     name: "",
        //     age: "",
        //     email: ""
        // })
    }
    function handleFormChange(e){
        const {name, value} = e.target;
        // const tempobj = ;
        // setFormData({...formData, [name]:{...formData[name], value}})
        setFormData({...formData, [name]: { value: value, error: ''}})
    }
  return (
    <>
        <form action="" onSubmit={submitForm}>
            <div style={{display: 'flex'}}>
                <label htmlFor="">Fullname:</label>
                <div>
                    <input type='text' value={formData.fullname.value} onChange={handleFormChange} name="fullname"></input>
                    {formData.fullname.error ? 
                    <div className='errorField'>
                        *{formData.fullname.error}
                    </div>
                    :
                    null
                }
                </div>
            </div>
            <div style={{display: 'flex'}}>
                <label htmlFor="">Age:</label>
                <div>
                <input type='number' value={formData.age.value} onChange={handleFormChange} name="age"></input>
                    {formData.age.error ? 
                    <div className='errorField'>
                        *{formData.age.error}
                    </div>
                    :
                    null
                }
                </div>
            </div>
            <div style={{display: 'flex'}}>
                <label htmlFor="">Email:</label>
                <div>
                <input type="text" value={formData.email.value} onChange={handleFormChange} name="email"></input>
                    {formData.email.error ? 
                    <div className='errorField'>
                        *{formData.email.error}
                    </div>
                    :
                    null
                }
                </div>
            </div>
            <button type='submit'>Submit</button>
        </form>
    </>
  )
}

