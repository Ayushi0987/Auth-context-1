import React from 'react'
import { Link} from 'react-router-dom'

export default function Home() {
  
  return (
    <div id='home-page'>
      <h1>Home Page</h1>
      <h2>Hi, Myself Developer</h2>
      <h2>
        and I work at <a href='https://www.geeksforgeeks.org/'>Geeks for Geeks</a>
      </h2>
      <Link to={'/blog'}>
        <button id='home-to-blog'>Go to Blog</button>
      </Link>
      <Link to={'/info'}>
        <button id='home-to-info'>Go to Info</button>
      </Link>
    </div>
  )
}
