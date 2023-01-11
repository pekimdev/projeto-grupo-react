import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import '../components/Cadastro.css';

const validacao = yup.object().shape({
    nome: yup.string().required('O nome é obrigatório').max(25,  "O nome precisa ter menos de 25 caracteres"),
    email: yup.string().required('O email é obrigatório').max(60,  "O email precisa ter menos de 60 caracteres"),
    password: yup.string().required('A senha é obrigatória').max(15,  "A senha precisa ter menos de 15 caracteres"),
    confirmaSenha: yup.string().required('A confirmacao da senha é obrigatória').max(15)
})

function Cadastro(){

    const { register, handleSubmit, formState: { errors } }  = useForm({
        resolver: yupResolver(validacao)
});

    const onSubmit = values => console.log(values)

    return(
        <div>
            <main>
                <div className='card-post'>

                    <h1>Cadastro</h1>
                    <div className='line-post'></div>

                    <div className='card-body-post'>

                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className='fields'>
                                <label>Nome:</label>
                                <input type='text' className='area' name='nome' {...register('nome')} />
                                <p className="error-message">{errors.nome?.message}</p>
                            </div>

                            <div className='fields'>
                                <label>Email:</label>
                                <input type='text' className='area' name='email' {...register('email')} />
                                <p className="error-message">{errors.email?.message}</p>
                            </div>

                            <div className='fields'>
                                <label>Senha:</label>
                                <input type='text' className='area' name='password' {...register('password')} />
                                <p className="error-message">{errors.password?.message}</p>
                            </div>

                            <div className='fields'>
                                <label>Confirme a senha:</label>
                                <input type='text' className='area' name='confirmaSenha' {...register('confirmaSenha')} />
                                <p className="error-message">{errors.confirmaSenha?.message}</p>
                            </div>

                            <div className='btn-post'>
                                <button type='submit'>Cadastrar</button>
                            </div>

                        </form>

                    </div>

                </div>
            </main>
        </div>
    )
}

export default Cadastro;