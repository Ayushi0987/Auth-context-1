import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Home() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <h1>HOME</h1>
      <div style={{display: 'flex', gap: '10px'}}>
          <Link to="/about">About</Link>
          <Link to="/contact" state={{leadId: '5560'}}>Contact</Link>
          <Link to="/blogs/2">Blog 2</Link>
      </div>
      
    </>
  );
}
