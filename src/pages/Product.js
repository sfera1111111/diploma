import { useContext } from "react";
import { useMatch } from "react-router-dom";
import App, { AppContext } from "../App";
import NotFound from "./NotFound";
 
export default function Product() {
   
  const { params } = useMatch("/product/:slug");
  const { products } = useContext(AppContext);

  const product = products.find(products =>
     product.slug === params.slug);
     
      if (!product) {
        return <NotFound />        
      }
    

  return (
    <div className="Product">
         <h1>{product.name}</h1>
         <img src={product.picture} alt={product.name} />
         <span>{product.ptice} som</span>
         <p>{product.description}</p>
    </div>
  )
}