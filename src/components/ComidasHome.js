import './ComidasHome.css'
import Abara from '../img/Abara.jpg'

function ComidasHome(){
return(
    <div>
        {/*2 linhas com 2 colunas*/}
        <div className='container-md w-75'>
            <div className='row text-center my-5'>
                <div className='col'><img src={Abara} className='w-100 sombra' alt='Foto de um prato de abará.'/></div>
                <div className='col'><h2 className='titulo-verde'>Abará</h2><p>Abará é um bolinho de feijão-fradinho moído cozido em banho-maria embrulhado em folha de bananeira. É um prato típico da culinária da África e da cozinha baiana. É feito com a mesma massa que o acarajé: A única diferença é que o abará é cozido e leva temperos e azeite de dendê em sua massa, enquanto o acarajé é frito.</p><button className='botao-verde'>Pedir</button></div>
            </div>
            
            
            <div className='row text-center my-3'>
                <div className='col'><h2 className='titulo-amarelo'>Caipirinha</h2><p>A caipirinha é uma bebida alcoólica brasileira, ou um coquetel de origem paulista, feita com cachaça, limão, açúcar e gelo.</p><button className='botao-amarelo'>Pedir</button></div>
                <div className='col'><img src="" className='w-100 sombra' alt='Foto de uma caipirinha.'/></div>
            </div>
        </div>
    </div>
)
}
export default ComidasHome