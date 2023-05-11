import { useContext } from "react";
import { AppContext } from "../../App";
import "./ProductList.css";
import AddToCart from "../AddToCart/AddToCart";
import { NavLink } from "react-router-dom";
import AddProduct from "../AddProduct/AddProduct";

export default function ProductList({ category }) {
  const { products } = useContext(AppContext);

  const output = products
    .filter(product => product.category === category.id)
    .map(product => (
      <div key={product.id} className="Product">
        <img src={product.picture} alt="Hello" />
        <NavLink to={'/products/' + product.slug}>
          {product.name}
        </NavLink>
        <span>{product.price} som</span>
        <AddToCart product={product} />
      </div>
    ));

  return (
    <div className="ProductList">
      {output}

      <AddProduct />
    </div>
  );
}