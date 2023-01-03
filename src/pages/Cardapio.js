import ListaCardapio from '../components/ListaCardapio'
import { NavLink } from 'react-router-dom'

function Cardapio(){
return(
    <div>
        <h3 className='text-center my-3 titulo-verde'>Escolha seu prato</h3>
        <NavLink to='/bebidas'><p className='text-center'>Cardápio de bebidas</p></NavLink>
        <ListaCardapio/>
    </div>
)
}
export default Cardapio