import { Link } from "gatsby"
import React, { useState } from "react"
import "../styles/nav.scss"
const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false)
  // TODO: Add name in middle that is a link to all works/ project page
  

  return (
    <div className="nav-container">
      <Link className="name-link" to="/works">
        <h1>Rajkomal Chowdhury</h1>
      </Link>
      <nav className="nav">
        <input
          onChange={() => setOpenMenu(!openMenu)}
          type="checkbox"
          id="toggle"
        />

        <label htmlFor="toggle">
          <svg viewBox="0 0 100 100" width="100%" height="100%">
            <circle r="40" cx="50" cy="50"></circle>
          </svg>

          <div className="hamburger">
            <div className="center"></div>
          </div>
        </label>
        {openMenu && (
          <ul className="navLinks-container">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/works">Works</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        )}
      </nav>
    </div>
  )
}

export default Nav
