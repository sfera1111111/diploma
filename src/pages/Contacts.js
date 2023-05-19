import { NavLink } from "react-router-dom";

export default function Contacts () {
  return (
    <div className="Contacts">
      <h6 className="fs">E-mail: <NavLink>samarbekjymakadurov@gmail.com</NavLink></h6>
      <h6 className="fs">Phone: <NavLink>+996504 070 731</NavLink></h6>
      </div>
  );
}