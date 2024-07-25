import React, {useState, useEffect} from 'react'
import './style.css'

export default function App() {

    const keys = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 ".split("");

    const [input, setInput] = useState('');
    const [quote, setQuote] = useState('');

    async function getQuote(){
        try {
            const response = await fetch('https://api.quotable.io/random');
            if(!response.ok){
                throw new Error('Something went wrong');
            }
            const quote = await response.json();
            console.log(quote)
            setQuote(quote.content);
        } catch (err) {
            console.error(err);   
        }
     }

    useEffect(()=> {
        if(input === 'forty two'){
            getQuote();
        }
    }, [input])

    function handleClickKey(key){
        setInput((prev) => prev + key);
    }
    if(quote){
        return <div>{quote}</div>
    }
       return (
         <div className='keyboard'>
           <div className='preview'>{input}</div>
           <div>
               {keys.map((key)=> (
                <button 
                   key={key}
                   id={key === " " ? `key-space` : `key-${key}`} 
                   onClick={()=>handleClickKey(key)}>
                    {key === " " ? "Space" : key.toUpperCase()}
                </button>
               ))}
           </div>
       </div>
  )
}
