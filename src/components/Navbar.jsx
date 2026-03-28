import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Todo App</h2>

      <ul style={styles.menu}>
        <li>
          <NavLink to="/" style={styles.link}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" style={styles.link}>
            About
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" style={styles.link}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    background: "#0f172a",
    color: "white",
  },
  logo: {
    margin: 0,
  },
  menu: {
    display: "flex",
    gap: "20px",
    listStyle: "none",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontWeight: "500",
  }
}

export default Navbar
