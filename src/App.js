import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home"
import Caregory from "./pages/Category";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/contacts" element={<h1>Contacts</h1>} />
          <Route path="/deliver" element={<h1>Deliver</h1>} />
          <Route path="/categories/:slug" element={<Caregory />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
       </Layout>
    </div>
  )
}

export default App;
