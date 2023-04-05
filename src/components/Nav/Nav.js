import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="Nav">
      <ul>
        <li className="NavItem"> 
          <NavLink to="/">Nome</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/contacts">Contects</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/deliver">Delive</NavLink>
        </li>
      </ul>
    </nav>
  );
}