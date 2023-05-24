import { addDoc } from "firebase/firestore";
import "./OrderForm.css";
import { ordersCollection } from "../../firebase";
import { useContext } from "react";
import { AppContext } from "../../App";
import { useNavigate } from "react-router-dom";

export default function OrderForm() {
  const { cart, setCart, user } = useContext(AppContext);
  const navigate = useNavigate();

  if (Object.keys(cart).length === 0) {
    return (
      <h2>
        Your cart is empty.
      </h2>
    );
  }

  if (!user) {
    return (
      <h1>Please login to create an order.</h1>
    );
  }

  function onFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    addDoc(ordersCollection, {
      name: formData.get("name"),
      phone: formData.get("phone"),
      user: user.uid,
      address: formData.get("address"),
      cart: cart,
    }).then((doc) => {
      setCart({});
      navigate("/thank-you");
    });
  }

  return (
    <form className="OrderForm" onSubmit={onFormSubmit}>
      <h2>Create an order</h2>
      <label className="label_int">
        Name: <input type="text" name="name" required className="int" />
      </label>
      <label className="int">
        Phone: <input type="tel" name="phone" required className="int" />
      </label>
      <label className="int">
        Address: <input type="text" name="address" required className="int" />
      </label>
      <button className="OrderForm_btn">Submit</button>
    </form>
  );
}