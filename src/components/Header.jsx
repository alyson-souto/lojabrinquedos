import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="flex justify-between items-center py-6 px-[5%] ">
      <h1>Loja Brinquedos</h1>

      <nav>
        <ul className="flex list-one items-center gap-8">
            <li>
            <Link to="/">Início</Link>
            </li>
        
            <li>
            <Link to="/sobre">Sobre</Link>
            </li>
            
            <li>
            <Link to="/contato">Contato</Link>
            </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header