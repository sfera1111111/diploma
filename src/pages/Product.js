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
      <div className="ds">
      <img src={product.picture} alt="Hello" />
      <p className="p">
         <b>Characteristics and description</b>
        <br/>{product.description}</p>     
       </div>
       <div style={{ display: "flex", padding: "10px", justifyContent: "space-between" }}> 
      <span style={{ fontSize: "24px", paddingTop: "73px" }}>{product.price} som</span>
      <AddToCart product={product} />
       </div>
    </div>
  );
}