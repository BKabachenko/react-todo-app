import { NavLink } from "react-router";
import styles from "./NavPanel.module.scss";

const linkStyle = ({ isActive }: { isActive: boolean }) => {
  return isActive ? `${styles.link} ${styles.active}` : styles.link;
};

const NavPanel = () => {
  return (
    <nav className={styles.nav}>
      <NavLink className={linkStyle} to="/">
        Home
      </NavLink>
      <NavLink className={linkStyle} to="/about">
        About Us
      </NavLink>
    </nav>
  );
};

export default NavPanel;
