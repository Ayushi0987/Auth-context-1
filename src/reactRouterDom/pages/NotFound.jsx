import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
export default function NotFound() {
    const navigate = useNavigate();
    useEffect(()=>{
        setTimeout(()=>{
            navigate('/', {state: true})
        },2000)
    }, [])
  return (
    <div>
      Not Found
    </div>
  )
}
