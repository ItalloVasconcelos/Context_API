import { NavLink } from 'react-router-dom'
import "./Navbar.css"
const Navbar = () => {
  return (
    <nav>
      <NavLink className="navlink" to="/">Home</NavLink>
      <NavLink className="navlink" to="/about">Sobre</NavLink>
      <NavLink className="navlink" to="/content">Conteúdo</NavLink>
    </nav>
  )
}

export default Navbar
