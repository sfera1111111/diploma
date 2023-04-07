import { useMatch } from "react-router-dom";

export default function Caregory() {
const params = useMatch("/categories/:slug");
  const catgories = [
    {id: 1, name: "In containers", slug: "in-containers"},
    {id: 2, name: "In cones", slug: "in-cones"},
    {id: 3, name: "Classic", slug: "classic"},
    {id: 4, name: "Fruity", slug: "fruity"}
  ];
  
  

  return (
    <div className="Category">
      <h1>{params.slug}</h1>
    </div>

  )
}