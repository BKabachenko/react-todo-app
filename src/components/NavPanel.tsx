import { NavLink } from 'react-router'

const NavPanel = () => {
  return (
    <div className="nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About Us</NavLink>
    </div>
  )
}

export default NavPanel