import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home"
import Caregory from "./pages/Category";
import NotFound from "./pages/NotFound";
import { createContext, useEffect, useState } from "react";
import { categoryCollection } from "./firebase";
import { getDocs } from "firebase/firestore/lite";


export const AppContext = createContext({
  categories: [],
});

function App() {

   const [categories, setCategories] = useState([]);

   useEffect(() => {
     getDocs(categoryCollection)
    .then(({ docs }) => {
      setCategories(
        docs.map(doc => ({
          ...doc.data(),
          id: doc.id
        }))
      )
    })
   }, []);

  return (
    <div className="App">
      <AppContext.Provider value={{ categories }}>
      <Layout>
        <Routes>
          <Route path="/" element={<h2>Home</h2>} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/contacts" element={<h1>Contacts</h1>} />
          <Route path="/deliver" element={<h1>Deliver</h1>} />
          <Route path="/categories/:slug" element={<Caregory />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
       </Layout>
      </AppContext.Provider>
    </div>
  )
}

export default App;
