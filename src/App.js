import { Link, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">

          

       <Layout>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/deliver" element={<Deliver />} />
        </Routes>
       </Layout>

      

    </div>
  )
}

export default App;
