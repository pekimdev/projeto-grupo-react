import './PratoForm.css'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const validarPost = yup.object({
    titulo: yup.string().required("O nome do prato é obrigatório.").max(30, "O nome precisa ter menos de 30 caracteres.").min(4, "O nome precisa ter pelo menos 4 caracteres."),
    descricao: yup.string().required("Descrição obrigatória.").max(400, "A descrição precisa ter menos de 400 caracteres."),
    regiao: yup.string().required("Região obrigatória."),
    imagem: yup.string().required("Link da imagem obrigatório.").min(20, "Precisa ter mais de 20 caracteres.")
})

function PratoForm(){


    let navigate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validarPost)
    })
    const addPost = data => axios.post("http://localhost:5000/pratos", data)
    .then(() => {
        navigate("/");
        alert('Prato criada com sucesso!');
    })

    .catch (() => {
        alert('Erro ao criar o prato!')
    })

    return(
        <div className='container'>
            <form className="form-controle d-flex justify-content-end" onSubmit={handleSubmit(addPost)}>   
            <label htmlFor="titulo">Nome do prato:</label>
                <input type="text" 
                text="Nome do prato" 
                name="titulo" 
                placeholder="Coloque o nome do prato"
                {...register('titulo')}/>
                <p className='error-message'>{errors.titulo?.message}</p>

            <label htmlFor="descricao">Descrição do prato:</label>
            <textarea
               text="Descrição do prato"
               name="descricao"
               {...register("descricao")}
               />
               <p className='error-message'>{errors.descricao?.message}</p>
            
            <label htmlFor="imagem">Link da imagem:</label>
               <input type="text"
               name="imagem"
                {...register('imagem')}
               />
            <p className='error-message'>{errors.imagem?.message}</p>
            
            <label htmlFor="regiao">Selecione a região do prato:</label>
               <select name='regiao' {...register("regiao")}>
               <option disabled className='text-center'>Região</option>
                <option value='nordeste'>Nordeste</option>
                <option value='sudeste'>Sudeste</option>
                <option value='norte'>Norte</option>
                <option value='centro-oeste'>Centro-Oeste</option>
                <option value='sul'>Sul</option>
               </select>
               <p className='error-message'>{errors.regiao?.message}</p>
            
               <button className='btn-edit'>Criar novo prato</button>
            </form>
        </div>
    )
}

export default PratoForm;