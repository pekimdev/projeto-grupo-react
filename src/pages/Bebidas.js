import { NavLink } from 'react-router-dom';
import ListaBebidas from '../components/ListaBebidas';
import { BiDrink } from 'react-icons/bi'

function Bebidas(){
return(
    <div>
        <div className='text-center'>
            <NavLink to='/cardapio'><button className='botao-verde p-1 mb-3 mt-4'>Ir para cardápio de comidas</button></NavLink>
            <h1 className='mb-3 titulo-amarelo'>Escolha sua bebida <BiDrink size={40}/></h1>
        </div>
        <ListaBebidas/>
    </div>
)
}

export default Bebidas