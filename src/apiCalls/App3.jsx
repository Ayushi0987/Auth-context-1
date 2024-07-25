import React, {useState, useEffect} from 'react'
import Users3 from './Users3';


export default function App3() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getUserData = async function() {
            const response = await fetch('https://randomuser.me/api/?results=10');
            const data = await response.json();
            const filteredData = data.results.map((userData)=> {
                return userData.name.first;
        })
        setItems(filteredData);
    }
    getUserData();
    setTimeout(()=> {
        setIsLoading(false)
     }, 3000)
     
    }, []);
  return (
    <>
        <Users3 isLoading={isLoading} items={items} />
    </>
  );
}
