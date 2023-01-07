import './ListaBebidas.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import Loading from '../layout/Loading'

function ListaBebidas(){
    const [removeLoading, setRemoveLoading] = useState(false)

    const [posts, setPosts] = useState([])

    useEffect(() => {
        setTimeout(() => {

        axios.get("http://localhost:5000/bebidas")
        .then((response) => {
            setPosts(response.data)
            setRemoveLoading(true);
        })
        .catch(() => {
            console.log("Deu errado")
        })
    }, 2000)
    }, [])
function deletePostBebida(id){
    axios.delete(`http://localhost:5000/bebidas/${id}`)
    setPosts(posts.filter(post => post.id !== id))
}

return(
    <div>
        <div className='container-md w-50'>
            {posts.map((post, key) => {
                return(
                    <div className='row text-center my-5' key={key}>
                <div className='col'><h2 className='titulo-amarelo'>{post.titulo}</h2><p>{post.descricao}</p></div>
                <div className='col'><img src={post.imagem} className='w-100 sombra' alt={`Imagem de um prato de ${post.titulo}`}/><p className='mt-2'>Região: {post.regiao}</p></div>
                <div className="btns">
                    <NavLink to={{pathname: `/edit-bebida/${post.id}`}}>
                    <button className='btn-edit'>Editar</button>
                    </NavLink>
                    <NavLink to='/cadastro'><button className='btn-pedir'>Pedir</button></NavLink>
                    <button className='btn-delete' onClick={() => deletePostBebida(post.id)}>Deletar</button>
                </div>
                
            </div>
                )
            })}
            {!removeLoading && <Loading />}
        </div>
    </div>
    
)
}

export default ListaBebidas