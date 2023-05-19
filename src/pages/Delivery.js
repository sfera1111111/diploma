import { NavLink } from "react-router-dom";

export default function Delivery () {
  return (
    <div className="Delivery">
      <h1>Delivery and pickup of goods</h1>
      <p>1:<NavLink>Pickup</NavLink></p>
      <p>2: <NavLink>international delivery</NavLink></p>
    </div>
  );
}