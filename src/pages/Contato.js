import ListaEstabelecimentos from "../components/ListaEstabelecimentos";
import Atendimento from '../components/Atendimento';
import { NavLink } from "react-router-dom";

function Contato(){
return(

<div>
    <Atendimento/>
    <div className="container-fluid text-center">
    <h1 className="mt-4">Escolha o Estabelecimento mais próximo de você!</h1>
    <p className="text-center">Entre em contato conosco ou escolha um estabelecimento mais próximo de você. Nós iremos retornar para confirmar  e passar detalhes sobre pedidos e solucionar possíveis dúvidas.
</p></div>
    <ListaEstabelecimentos/> 
    <NavLink to='/criar-estabelecimentos' className="d-flex justify-content-center mb-4"> Criar Estabelecimento</NavLink>
</div>
    )
}

export default Contato;