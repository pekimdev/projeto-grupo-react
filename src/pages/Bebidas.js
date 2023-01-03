import { NavLink } from 'react-router-dom';
import ListaBebidas from '../components/ListaBebidas';

function Bebidas(){
return(
    <div>
        <h3 className='text-center my-3 titulo-verde'>Escolha sua bebida</h3>
        <NavLink to='/cardapio'><p className='text-center'>Cardápio de comidas</p></NavLink>
        <ListaBebidas/>
    </div>
)
}

export default Bebidas