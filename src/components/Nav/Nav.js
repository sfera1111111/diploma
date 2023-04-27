import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
      <nav className="Nav">
        <ul className="dsp">
          <li className="NavItem"> 
            <NavLink className="menu__item" to="/">Nome</NavLink>
          </li>
          <li className="NavItem">
            <NavLink className="menu__item" to="/about">About</NavLink>
          </li>
          <li className="NavItem">
            <NavLink className="menu__item" to="/contacts">Contects</NavLink>
          </li>
          <li className="NavItem">
            <NavLink className="menu__item" to="/delivery">Delivery</NavLink>
          </li>
        </ul>
       </nav>
  );
}