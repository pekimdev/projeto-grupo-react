import PratoForm from '../PratoFormulario/PratoForm'
import { NavLink } from 'react-router-dom'
import { GiKnifeFork } from 'react-icons/gi'

function CriarPrato(){
return(
    <div>
        <div className='text-center'>
            <NavLink to='/criar-bebidas'><button className='botao-verde mb-3 mt-4 p-1'>Criar bebidas</button></NavLink>
            <h1 className="mb-3 titulo-amarelo">Criar um novo prato <GiKnifeFork size={40}/></h1>
        </div>
        <PratoForm/>
    </div>
)
}
export default CriarPrato