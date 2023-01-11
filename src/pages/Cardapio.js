import ListaCardapio from '../components/ListaCardapio'
import { NavLink } from 'react-router-dom'
import { GiKnifeFork } from 'react-icons/gi'
import logo3 from '../img/brasucalogo5.png'

function Cardapio(){
return(
    <div>
        <div className='text-center'>
            <NavLink to='/bebidas'><button className='botao-amarelo p-1 mb-3 mt-4'>Ir para cardápio de bebidas</button></NavLink><img src={logo3} className='logo3-size'/>
            <h1 className='mb-3 titulo-verde'>Escolha seu prato <GiKnifeFork size={40}/></h1>
        </div>
        <ListaCardapio/>
        <NavLink to='/criar-pratos' className="d-flex justify-content-center mb-4"> Criar Prato</NavLink>
    </div>
)
}
export default Cardapio