import { useContext } from "react";
import "./CartLink.css";
import { AppContext } from "../../App";
import { NavLink } from "react-router-dom";

export default function CartLink() {
  const { cart } = useContext(AppContext);

  const total = Object.values(cart).reduce(
    (acc, num) => acc + num, 0
  );

  return (
    <div className="CartLink">
      <NavLink to="/cart" className="cart">
        <img src="https://cdn-icons-png.flaticon.com/512/70/70669.png" alt="???" className="basket" /> ({total})
      </NavLink>
    </div>
  );
}