import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
      <nav className="Nav">
        <ul>
          <li className="NavItem"> 
            <NavLink className="menu__item" to="/">Home</NavLink>
          </li>
          <li className="NavItem">
            <NavLink className="menu__item" to="/about">About</NavLink>
          </li>
          <li className="NavItem">
            <NavLink className="menu__item" to="/contacts">Contacts</NavLink>
          </li>
          <li className="NavItem">
            <NavLink className="menu__item" to="/delivery">Delivery</NavLink>
          </li>
        </ul>
       </nav>
  );
}