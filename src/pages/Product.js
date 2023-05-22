import { useContext } from "react";
import { useMatch } from "react-router-dom";
import { AppContext } from "../App";
import NotFound from "./NotFound";
import AddToCart from "../components/AddToCart/AddToCart";

export default function Product() {
  const { params } = useMatch("/products/:slug");
  const { products } = useContext(AppContext);

  const product = products.find(product => product.slug === params.slug);

  if (!product) {
    return <NotFound />;
  }

  return (
    <div className="Product">
      <div>
      <h1>{product.name}</h1>
      </div>
      <div style={{ display: "flex" }}>
      <img style={{ width: "250px", display: "flex" }}  src={product.picture} alt="Hello" />
      <p style={{ padding: "10px" }}>
         <p><b>Characteristics and description</b></p>
        <br/>{product.description}</p>     
       </div>
       <div style={{ display: "flex", padding: "10px" }}> 
      <span style={{ fontSize: "24px", padding: "13px" }}>{product.price} som</span>
      <AddToCart product={product} />
       </div>
    </div>
  );
}