import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const BLOG_DATA = {
  1: {
    heading: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, neque?',
    body: 'Lorem ipsum dolor sit amet.',
    footer: 'Lorem, ipsum.'
  },
  2: {
    heading: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nam nemo alias quidem porro autem!',
    body: 'Lorem ipsum dolor sit amet.',
    footer: 'Lorem, ipsum.'
  },
  3: {
    heading: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nam nemo alias quidem porro autem!',
    body: 'Lorem ipsum dolor sit amet.',
    footer: 'Lorem, ipsum.'
  }

}
export default function IndividualBlog() {
    const params = useParams();
    const [blogData, setBlogData] = useState('')
    // console.log(params);
    useEffect(()=>{
        //make your api call
        // console.log(params.id)
        setBlogData(BLOG_DATA[params.id])
    }, [params.id])

   
  return (
    <>


        <div>
           <h1>{blogData?.heading}</h1>
           <p>{blogData?.body}</p>
           <footer>{blogData?.footer}</footer>
        </div>
    
    </>
  )
 
}
