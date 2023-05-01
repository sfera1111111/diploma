import { useContext, useState } from "react";
import { categoryCollection } from "../../firebase";
import { addDoc } from "firebase/firestore";
import { AppContext } from "../../App";

const AddCategory = () => {
  const { user } = useContext(AppContext);
  const [category, setCategory] = useState("");

  if (!user || !user.isAdmin) {
    return null;
  }

  function onChangeCategory(event) {
    setCategory(event.target.value);
  }

  function onAddCategory() {
     const name = category.trim();
     if (name.length < 5) {
      alert(
        "Please provido a category name with minimun leght of 5 character."
      );

      return;
     }
     addDoc(categoryCollection, {
      name: name,
      slug: name.replaceAll(" ", "-").toLocaleLowerCase(),
      }).then(() => {
        setCategory("");
      });
  }

  return (
    <div className="AddCategory">
      <input
        size="15"
        type="text"
        value={category}
        placeholder="Category name"
        onChange={onChangeCategory}
      />
      <button onClick={onAddCategory}>+</button>
    </div>
  );
};

export default AddCategory;