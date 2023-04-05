import { Link, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div className="App">



       <Layout>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/contects" element={<h1>Homes</h1>} />
          <Route path="/delive" element={<h1>Delive</h1>} />
        </Routes>
       </Layout>

      

    </div>
  )
}

export default App;
