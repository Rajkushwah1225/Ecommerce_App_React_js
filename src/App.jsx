import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Todo from "./pages/Todo"

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div style={{ padding: "20px" }}>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
         </Routes>
         <Footer />

      </div>
    </BrowserRouter>
  )
}

export default App
