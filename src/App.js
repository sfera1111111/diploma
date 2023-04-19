import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Caregory from "./pages/Category";
import NotFound from "./pages/NotFound";
import { createContext, useEffect, useState } from "react";
import { categoryCollection, productsCollection } from "./firebase";
import { getDocs } from "firebase/firestore/lite";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

export const AppContext = createContext({
  categories: [],
  products: [],
  cart: {},
  setCart: () => {},
});

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  useEffect(() => {
    getDocs(categoryCollection).then(({ docs }) => {
      setCategories(
        docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    });

    getDocs(productsCollection).then(({ docs }) => {
      setProducts(
        docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    });
  }, []);

  return (
    <div className="App">
      <AppContext.Provider value={{ categories, products, cart, setCart }}>
        <Layout>
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="cart" element={<Cart />} />
            <Route path="/about" element={<h1>About</h1>} />
            <Route path="/contacts" element={<h1>Contacts</h1>} />
            <Route path="/deliver" element={<h1>Deliver</h1>} />
            <Route path="/categories/:slug" element={<Caregory />} />
            <Route path="/products/:slug" element={<Product />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </AppContext.Provider>
    </div>
  );
}

export default App;
