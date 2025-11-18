import { NavLink } from 'react-router'
import styles from "./NavPanel.module.scss"

const NavPanel = () => {
  return (
    <div className={styles.nav}>
      <NavLink className={styles.link} to="/">Home</NavLink>
      <NavLink className={styles.link} to="/about">About Us</NavLink>
    </div>
  )
}

export default NavPanel