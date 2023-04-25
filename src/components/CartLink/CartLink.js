import { useContext } from "react";
import "./CartLink.css";
import { AppContext } from "../../App";
import { NavLink } from "react-router-dom";
import CartList from "../CartList/CartList";

export default function CartLink() {
  const { cart } = useContext(AppContext);

  const total = Object.values(cart).reduce(
    (acc, num) => acc + num, 0
  );

  return (
    <div className="CartLink">
      <NavLink to="/cart" className="cart">
        Cart ({total})
      </NavLink>
    </div>
  );
}