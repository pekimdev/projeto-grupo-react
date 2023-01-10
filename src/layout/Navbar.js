import { NavLink, Link } from "react-router-dom"
import './Navbar.css'

function Navbar(){
    return(
      <nav className="navbar navbar-expand-sm cor-navbar">
  <div className="container-fluid">
    <Link to='/' className="navbar-brand navbar-color">Logo</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to='/' end className="nav-link navbar-color">Página inicial</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='cardapio' className="nav-link navbar-color">Cardápio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='contato' className="nav-link navbar-color">Contato</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='criar-pratos' className="nav-link navbar-color">Criar prato</NavLink>
        </li>
      </ul>
    </div>
    <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav position-absolute top-50 end-0 translate-middle-y me-3">
        <li className="nav-item">
            <NavLink to='login' className="nav-link navbar-color">Login</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to='cadastro' className="nav-link navbar-color">Cadastrar</NavLink>
        </li>
      </ul>
      </div>
    </div>
    
</nav>
    )
}
export default Navbar