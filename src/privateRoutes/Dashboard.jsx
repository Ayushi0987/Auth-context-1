import React from 'react'

export default function Dashboard({ setLoggedIn }) {
  return (
    <div id="dashboardPage">
    <h1 id="dashboard-tag">Welcome to Dashboard</h1>
    <button id="dashboard-logout" onClick={() => setLoggedIn(false)}>Log out</button>
  </div>
  )
}
