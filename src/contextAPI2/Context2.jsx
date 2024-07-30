// this is our store 
import React from "react";
const MyContextStore2 = React.createContext();   // we created our contextStore

export default MyContextStore2;

export const Provider2 = () =>{
    <MyContextStore2.Provider>
        {/*  do your code here*/}
    </MyContextStore2.Provider>
}