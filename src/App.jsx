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

        <footer className="border-t border-gray-800 px-6 py-6 text-center text-gray-400">
          Loja Gamer — 2026
        </footer>
      </div>
      
    </Router>
  )
}

export default App
