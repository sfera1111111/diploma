import { useEffect, useState } from "react";
import { categories } from "../../firebase";
import "./CategoryList.css"
import { getDocs } from "firebase/firestore/lite";
import { NavLink } from "react-router-dom";

export default function CategoryList() {

  const [categoryList, setCategoryList] = useState([]);

  useEffect (() => {
  getDocs(categories).then(snapshot => {
    const newCategoryList = [];
    snapshot.docs.forEach(doc => {
      const category = doc.data();
      category.id = doc.id;
       
      newCategoryList.push(category);
    })

    setCategoryList(newCategoryList);
  });
  }, []);

  //const catgories = [
   // {id: 1, name: "In containers", slug: "in-containers"},
   // {id: 2, name: "In cones", slug: "in-cones"},
   // {id: 3, name: "Classic", slug: "classic"},
    //{id: 4, name: "Fruity", slug: "fruity"},
  //];
  
  const output = categoryList.map((category) => (
   <li key={category.id}>
     <NavLink to={'/catgories/${category.slug}'}>
       {category.name}
     </NavLink>
   </li>));

   

  return (
    <div className="CategoryList">
      <h3 className="textaling">CategoryList</h3>
      <ul className="p">{output}</ul>
    </div>
  );
}