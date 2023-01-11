import { useState, useEffect } from 'react'
import axios from 'axios'
import './ListaCardapio.css'
import { NavLink } from 'react-router-dom'
import Loading from '../layout/Loading'


function ListaCardapio(){
    const [removeLoading, setRemoveLoading] = useState(false)

    const [posts, setPosts] = useState([])

    useEffect(() => {
        setTimeout(() => {

        axios.get("http://localhost:5000/pratos")
        .then((response) => {
            setPosts(response.data)
            setRemoveLoading(true);
        })
        .catch(() => {
            console.log("Deu errado")
        })
    }, 1500)
    }, [])

    function deletePostPrato(id){
        axios.delete(`http://localhost:5000/pratos/${id}`)
        setPosts(posts.filter(post => post.id !== id))
    }
return(
    <div>
        <div className='container-md'>
            {posts.map((post, key) => {
                return(
                    <div className='row text-center my-5' key={key}>
                <div className='col'><h2 className='titulo-amarelo'>{post.titulo}</h2><p className='mt-4'>{post.descricao}</p><div className="btns">
                    <NavLink to={{pathname: `/edit-prato/${post.id}`}}>
                    <button className='btn-edit'>Editar</button>
                    </NavLink>
                    <NavLink to='/cadastro'><button className='btn-pedir'>Pedir</button></NavLink>
                    <button className='btn-delete' onClick={() => deletePostPrato(post.id)}>Deletar</button>
                </div></div>
                <div className='col'><img src={post.imagem} className='w-75 sombra' alt={`Imagem de um prato de ${post.titulo}`}/><p className='mt-2'>Região: {post.regiao}</p>
                </div>
            </div>
            
                )
            })}
            {!removeLoading && <Loading />}
        </div>
    </div>
    
)
}

export default ListaCardapio