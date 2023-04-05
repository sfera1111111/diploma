import { NavLink } from "react-router-dom";

export default function Nav(props) {
  return (
    <nav className="Nav">
      <ul>
        <li>
          <NavLink to="/">Nome</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contects">Contects</NavLink>
        </li>
        <li>
          <NavLink to="/delive">Delive</NavLink>
        </li>
      </ul>
    </nav>
  )
}