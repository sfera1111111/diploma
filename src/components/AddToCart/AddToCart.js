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
      <p className="pagrav">{cart[product.id] ? cart[product.id] : 0}</p>
      <button onClick={onAddToCartClick} className="OrderForm_btn">
        Add to cart
        </button>
    </div>
  );
}