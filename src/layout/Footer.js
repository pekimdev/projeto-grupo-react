import './Footer.css'
import { Link } from 'react-router-dom'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'

function Footer(){
return(
        <footer>
            <div className='container-fluid'>
                <div className='d-flex justify-content-sm-evenly align-items-center'>
                    <div className='col text-center mt-3 mb-3'>
                        <div className='row footer-link-color link-debug'><Link to='/'>Página inicial</Link></div>
                        <div className='row footer-link-color link-debug'><Link to='cardapio'>Cardápio</Link></div>
                        <div className='row footer-link-color link-debug'><Link to='contato'>Contato</Link></div>
                        <div className='row footer-link-color link-debug'><Link to='login'>Login</Link></div>
                        <div className='row footer-link-color link-debug'><Link to='cadastro'>Cadastro</Link></div>
                    </div>
                    <div className='col text-center'>
                        <Link to='' className='ms-3'><FaFacebook size={30}/></Link>
                        <Link to='' className='ms-3'><FaInstagram size={30}/></Link>
                        <Link to='' className='ms-3'><FaTwitter size={30}/></Link>
                        <Link to='' className='ms-3'><FaWhatsapp size={30}/></Link>
                    </div>
                    <div className='col text-center mt-3'>
                        <p className='p-footer'>Experimente pratos tradicionais da culinária brasileira de forma única. Faça seu pedido agora mesmo e torne-se nosso cliente, aproveite as promoções e bom apetite.</p>
                    </div>
                    </div>
                </div>
        </footer>
)
}

export default Footer