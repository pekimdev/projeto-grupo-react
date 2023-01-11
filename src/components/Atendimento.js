import {FaWhatsapp} from 'react-icons/fa';
import {AiOutlineMail} from 'react-icons/ai';
import {AiOutlineClockCircle} from 'react-icons/ai';
function Atendimento(){
return(

<div>
    <div className='container'>
    <h1 className="mt-3 text-center mb-3">Atendimento</h1>
    <a href="https://api.whatsapp.com/send?phone=55219999999999" target='_blank'> <p><FaWhatsapp size={30}/> WhatsApp:(21)xxxx-xxxx</p></a>
    <a href="mailto:brasucarestaurante@hotmail.com"><p><AiOutlineMail size={30}/> E-mail: brasucarestaurante@hotmail.com</p></a>
    <p className='text-center'><AiOutlineClockCircle size={30}/> Horário de Atendimento Seg à Sex - 9h00 às 22h00. Sáb e Dom - 10h00 às 23h00.</p>
</div>
</div>

    )
}
export default Atendimento;