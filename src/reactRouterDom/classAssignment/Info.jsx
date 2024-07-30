import React from 'react'
import { Link } from 'react-router-dom'

export default function Info() {
  return (
    <div id='info-page'>
        <h1>Info page</h1>
        <h2>I am born in India</h2>
        <h2>And I like to play Badminton</h2>
        <Link to={'/blog'}>
          <button id='info-to-blog'>Go to Blog</button>
        </Link>
        <Link to={'/'}>
          <button id='info-to-home'>Go to Home</button>
        </Link>
    </div>
  )
}
