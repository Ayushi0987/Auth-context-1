import React, {useState} from 'react'

export default function App() {
    const [name, setName] = useState('');
    const [courseName, setcourseName] = useState("");

    function handleNameChange(e){
        setName(e.target.value);
    }
    function handleCourseName(e){
      setcourseName(e.target.value);
    }
  return (
    <>
        {/* <input type="text" onChange={handleNameChange}/> */}
        <input type='text' value={name} onChange={handleNameChange}></input>
        <select value={courseName} onChange={handleCourseName}>
          <option value="random" disabled>courseSelection</option>
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
          <option value="mathematics">Mathematics</option>
        </select>
    </>
  )
}

const newArr = [...arr];
// newArr[2] = 'abcd';

const indexToBeUpdated = newArr.indexOf(3);
newArr[indexToBeUpdated] = 'abcd';
setArr(newArr);


const newObj = {...obj, age: 100};
setObj(newObj);

setObj({...obj, age: 100})