import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Cardapio from './pages/Cardapio'
import CriarPrato from './pages/CriarPrato'
import Contato from './pages/Contato'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import Edit from './pages/Edit'
import Bebidas from './pages/Bebidas'


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' end element={<Home />} />
        <Route path='cardapio' element={<Cardapio />} />
        <Route path='contato' element={<Contato />} />
        <Route path='cadastro' element={<Cadastro />} />
        <Route path='login' element={<Login />} />
        <Route path='criar-pratos' element={<CriarPrato />} />
        <Route path='edit' element={<Edit />} />
        <Route path='bebidas' element={<Bebidas />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App;
