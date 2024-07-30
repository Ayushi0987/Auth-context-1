import React from 'react'
import { Link } from 'react-router-dom'

export default function Blog() {
  return (
    <div id='blog-page'>
        <h1>Blog page</h1>
        <h2>Checkout my awesome blogs</h2>
        <h3>
            <a href="https://www.geeksforgeeks.org/front-end-developer-interview-questions/">
                Web Development Interview question
            </a>
        </h3>
        <h3>
            <a href="https://www.geeksforgeeks.org/top-50-graph-coding-problems-for-interviews/">
                Graph Data Structure
            </a>
        </h3>
        <Link to={'/info'}>
          <button id='blog-to-info'>Go to Info</button>
        </Link>
        <Link to={'/'}>
          <button id='blog-to-home'>Go to Home</button>
        </Link>
    </div>
  )
}
