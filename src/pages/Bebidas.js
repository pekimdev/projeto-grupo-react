import { NavLink } from 'react-router-dom';
import ListaBebidas from '../components/ListaBebidas';
import { BiDrink } from 'react-icons/bi'
import logo3 from '../img/brasucalogo5.png'

function Bebidas(){
return(
    <div>
        <div className='text-center'>
            <NavLink to='/cardapio'><button className='botao-verde p-1 mb-3 mt-4'>Ir para cardápio de comidas</button></NavLink><img src={logo3} className='logo3-size'/>
            <h1 className='mb-3 titulo-amarelo'>Escolha sua bebida <BiDrink size={40}/></h1>
        </div>
        <ListaBebidas/>
        <NavLink to='/criar-bebidas' className="d-flex justify-content-center mb-4"> Criar Bebidas</NavLink>
    </div>
)
}

export default Bebidas