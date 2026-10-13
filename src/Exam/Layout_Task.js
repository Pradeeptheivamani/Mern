
import React from 'react'
import { Link, Outlet } from 'react-router'
import './Layout_Task.css'

function Layout_Task() {
  return (
    <>
      <nav className="navbar">
        <h2 className="logo">My Portfolio</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/About">About</Link>
          <Link to="/Skill">Skills</Link>
          <Link to="/Projects">Projects</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/Accordian">FAQ</Link>
          <Link to="/Login">Login</Link>
        </div>
      </nav>

      <main className="page-content">
        <Outlet />
      </main>
    </>
  )
}

export default Layout_Task