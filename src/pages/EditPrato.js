import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { useNavigate, useParams } from 'react-router-dom';

import axios from 'axios'
import { useEffect } from 'react';

const validarPost = yup.object({
    titulo: yup.string().required("O nome do prato é obrigatório.").max(30, "O nome precisa ter menos de 30 caracteres.").min(4, "O nome precisa ter pelo menos 4 caracteres."),
    descricao: yup.string().required("Descrição obrigatória.").max(400, "A descrição precisa ter menos de 400 caracteres."),
    regiao: yup.string().required("Região obrigatória."),
    imagem: yup.string().required("Link da imagem obrigatório.").min(20, "Precisa ter mais de 20 caracteres.")
})



function EditPrato(){
    const {id} = useParams()

    let navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:5000/pratos/${id}`)
        .then((response) => {
            reset(response.data)
        })
    }, [])

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(validarPost)
    })
    
    const addPost = data => axios.put(`http://localhost:5000/pratos/${id}`, data)
    .then(() => {
        navigate("/cardapio");
        alert('Prato editado com sucesso!');
    })
    
    .catch (() => {
        alert('Erro ao editar o prato!')
    })
    

    return(
        <div className='container'>
            <h1 className="my-3 titulo-verde text-center">Editar prato</h1>
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
            <option value='Nordeste'>Nordeste</option>
            <option value='Sudeste'>Sudeste</option>
            <option value='Norte'>Norte</option>
            <option value='Centro-oeste'>Centro-Oeste</option>
            <option value='Sul'>Sul</option>
           </select>
           {errors.regiao && <p className='error-message'>{errors.regiao?.message}</p>}
        
           <button className='btn-edit'>Editar</button>
        </form>
    </div>
    )
}

export default EditPrato;