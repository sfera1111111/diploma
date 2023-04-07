import { NavLink } from "react-router-dom";
export default function CategoryList() {
  const catgories = [
    {id: 1, name: "In containers", slug: "in-containers"},
    {id: 2, name: "In cones", slug: "in-cones"},
    {id: 3, name: "Classic", slug: "classic"},
    {id: 4, name: "Fruity", slug: "fruity"},
  ];
  
  const output = catgories.map((category) => (
   <li key={category.id}>
     <NavLink to={"/catgories/" + category.slug}>
       {category.name}
     </NavLink>
   </li>));

   

  return (
    <div className="CategoryList">
      <h3>CategoryList</h3>
      <ul>{output}</ul>
    </div>
  );
}