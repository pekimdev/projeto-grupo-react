import '../PratoFormulario/PratoForm.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const validarPost = yup.object({
    estado: yup.string().required("O nome do Estado é obrigatório.").max(20, "O nome precisa ter menos de 20 caracteres.").min(4, "O nome precisa ter pelo menos 4 caracteres."),
    local: yup.string().required("Local obrigatório."),
    endereco: yup.string().required("Endereço obrigatório.")
})

function CriarEstabelecimento(){

    let navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validarPost)
    })
    const addPost = data => axios.post("http://localhost:5000/estabelecimentos", data)
    .then(() => {
        navigate("/contato");
        alert('Estabelecimento criado com sucesso!');
    })

    .catch (() => {
        alert('Erro ao escolher estabelecimento!')
    })

    return(
        <div> 
              <h1 className='text-center mt-3'>Crie seu estabelecimento</h1>
        
        <div className='container mt-4'> 
      
            <form className="form-controle d-flex justify-content-end" onSubmit={handleSubmit(addPost)}>   
            <label htmlFor="Estado">Estado:</label>
                <input type="text" 
                text="estado" 
                name="estado" 
                placeholder=" Insira o Estado"
                {...register('estado')}/>
                <p className='error-message'>{errors.estado?.message}</p>

        
            <label htmlFor="local">Local:</label>
               <input type="text"
               name="local"
               placeholder=" Insira o Local"
                {...register('local')}
               />
            <p className='error-message'>{errors.local?.message}</p>

          <label htmlFor="endereco">Endereço:</label>
               <input type="text"
               name="endereco"
               placeholder=" Insira o Endereço"
                {...register('endereco')}
               />
            <p className='error-message'>{errors.endereco?.message}</p>
            <button className='btn-edit'> Criar Estabelecimentos</button>
            </form>
        </div>
    </div>
    )
}

export default CriarEstabelecimento;