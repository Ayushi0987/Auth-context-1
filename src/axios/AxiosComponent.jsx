import React, {useState, useEffect} from 'react'
import axios from 'axios';

export default function AxiosComponent() {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const fetchRandomUserData = async () => {
        try {
            const response = await axios.get('https://randomuser.me/api/');
            console.log(response);
            // const data = await response.json();
            // console.log(data)
            // setUser(data.results[0]);
            // setLoading(false)
        } catch (err) {
            console.error(err);
        }
    }
    useEffect(() =>{
        fetchRandomUserData();
    },[])
  return (
    <div className='container'>
        {user && (
            <div className='infoContainer'>
                 <img className='imageContainer'
                      src={user?.picture?.large} 
                      alt="User Image" 
                      style={{ maxWidth: '200px', borderRadius: '50%' }}
                 />
                 <h3 className='nameContainer'>Full Name:{`${user?.name?.first} ${user?.name?.last}`}</h3>
                 <div>DOB: {user?.dob?.date}</div>
            </div>
        )}
    </div>
  )
}

