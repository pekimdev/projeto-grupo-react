import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Cardapio from './pages/Cardapio'
import CriarPrato from './pages/CriarPrato'
import Contato from './pages/Contato'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import EditPrato from './pages/EditPrato'
import EditBebida from './pages/EditBebida'
import Bebidas from './pages/Bebidas'
import CriarBebida from './pages/CriarBebida'


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
        <Route path='/edit-prato/:id' element={<EditPrato />} />
        <Route path='/edit-bebida/:id' element={<EditBebida />} />
        <Route path='bebidas' element={<Bebidas />} />
        <Route path='criar-bebidas' element={<CriarBebida />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App;
