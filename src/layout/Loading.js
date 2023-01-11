import loading from '../img/loading.svg'
import './Loading.css'

function Loading(){
return(
    <div className="loader-container">
        <img src={loading} className="loader" alt="Carregando"/>
    </div>
)
}

export default Loading