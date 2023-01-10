import { useState, useEffect } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import Loading from '../layout/Loading'
import './ListaEstabelecimentos.css'

function ListaEstabelecimentos(){
  const [ removeLoading, setRemoveLoading ] = useState(false)
  const [ posts, setPosts ] = useState([])


  useEffect(() => {
      setTimeout(() => {

      axios.get("http://localhost:5000/estabelecimentos")
      .then((response) => {
          setPosts(response.data)
          setRemoveLoading(true);
      })
      .catch(() => {
          console.log("Deu errado")
      })
  }, 2000)
  }, [])
  
  function deletePostEstabelecimento(id){
  axios.delete(`http://localhost:5000/estabelecimentos/${id}`)
  setPosts(posts.filter(post=> post.id !== id))
  }

    return(
        <div>
          <div>
          {posts.map((post, key) => {
            return(
    <div class="card container p-0 mb-3" key={key}>
      <div class="card-body">
        <h5 class="card-title">{post.estado}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{post.local}</h6>
           <p class="card-text">{post.endereco}</p>
           <div className='btns d-flex justify-content-center'>
    <NavLink to={{pathname:`/edit-estabelecimentos/${post.id}`}}>
    <button className='btn-edit'>Editar</button>
    </NavLink>
    <button className=' btn-delete' onClick={()=> deletePostEstabelecimento(post.id)}>Deletar</button>
    </div>
  </div>
  
</div>
)
          })}
          {!removeLoading && <Loading />}
      </div>
</div>
          )}
      
    export default ListaEstabelecimentos;