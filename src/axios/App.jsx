import React, { useState, useEffect } from "react";

export default function App4() {
  const [user, setUser] = useState({});
  // const [userDataApi, setUserDataApi] = useState('https://randomuser.me/api/')
  const [loading, setLoading] = useState(true);

  // const User_Profile = [large = 'https://randomuser.me/api/portraits/women/70.jpg',
  //                       medium = 'https://randomuser.me/api/portraits/med/women/70.jpg',
  //                       thumbnail = 'https://randomuser.me/api/portraits/thumb/women/70.jpg']

  const fetchRandomUserData = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/");
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      console.log(data);
      setUser(data.results[0]);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchRandomUserData();
  }, []);
  return (
    <div className="container">
      {user && (
        <div className="infoContainer">
          <img
            className="imageContainer"
            src={user?.picture?.large}
            alt="User Image"
            style={{ maxWidth: "200px", borderRadius: "50%" }}
          />
          <h3 className="nameContainer">
            Full Name:{`${user?.name?.first} ${user?.name?.last}`}
          </h3>
          <div>DOB: {user?.dob?.date}</div>
        </div>
      )}
    </div>
  );
}
