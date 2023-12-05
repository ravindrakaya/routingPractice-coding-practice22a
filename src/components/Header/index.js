// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="navbar-container">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="wave-img"
      />
      <h1 className="logo-heading">Wave</h1>
    </div>
    <ul className="list-container">
      <li className="list-item">
        <Link to="/">Home</Link>
      </li>
      <li className="list-item">
        <Link to="/about">About</Link>
      </li>
      <li className="list-item">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
)

export default Header
