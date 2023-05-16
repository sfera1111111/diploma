import { useContext } from "react";
import "./AddToCart.css";
import { AppContext } from "../../App";

export default function AddToCart({ product }) {
  const { cart, setCart } = useContext(AppContext);

  function onAddToCartClick() {
    const qty = cart[product.id] ? cart[product.id] + 1 : 1;
    setCart({
      ...cart,
         [product.id]: qty, 
    });
  }

  return (
    <div className="AddToCart">
      {cart[product.id] ? cart[product.id] : 0}
      <button onClick={onAddToCartClick} className="btn">
        <img src="https://e7.pngegg.com/pngimages/780/808/png-clipart-shopping-cart-logo-online-shopping-shopping-cart-angle-logo.png" alt="basket" className="basket" />
        </button>
    </div>
  );
}