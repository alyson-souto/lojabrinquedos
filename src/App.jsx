import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Contato from "./pages/Contato"


const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-950 text-white">
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>
      
    </Router>
  )
}

export default App
