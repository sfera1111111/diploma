import { useContext } from "react";
import "./CartList.css";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

export default function CartList() {
  const { products, cart, setCart } = useContext(AppContext);

  function onQuantityChange(product, qty) {
    setCart({
      ...cart,
      [product.id]:qty,
    });
  }function onItemRemove(product) {
    const newCart = { ...cart };
    delete newCart[product.id];
    setCart(newCart);
  }
  const productIds = Object.keys(cart);

  const output = products
    .filter((product) => productIds.includes(product.id))
    .map((product) => (
      <div className="CartItem" key={product.id}>
        <img src={product.picture} alt={product.name} />
        <Link to={"/product/" + product.slug}>{product.name}</Link>

        <input
        type="number"
        value={cart[product.id]}
        min={1}
        onChange={(event) => onQuantityChange
        (product, +event.target.value)}
        />

        <span>{cart[product.id] + product.price} som</span>
        <button onClick={() => onItemRemove(product)}>Remove</button>
      </div>
    ));

  return (
    <div className="CartList">
      {output}
    </div>
  );
}