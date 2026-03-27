import { NavLink } from "react-router-dom";

export default function Navbar() 
{
  return (
    <nav className="navbar">
      <div className="logo">LearnWeb</div>

      <div className="links">
        <NavLink to="/" className="link">Home</NavLink>
        <NavLink to="/frontend" className="link">Frontend</NavLink>
        <NavLink to="/backend" className="link">Backend</NavLink>
        <NavLink to="/contact" className="link">Contact</NavLink>
      </div>
    </nav>
  );
}
