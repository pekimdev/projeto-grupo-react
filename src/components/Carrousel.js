import './Carrousel.css'
import principal from '../img/imagem-principal.webp';

function Carrousel(){
  return (
<div>
  <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={principal} className="d-block w-100" alt=""/>
        <div className='posicionar-texto'>
          <h1>PRATOS TÍPICOS DA GASTRONOMIA BRASILEIRA</h1>
          <p>Reconhecido nacionalmente como um lugar que todos deveriam conhecer, o restaurante Brasuca oferece uma seleção de pratos regionais de cada estado brasileiro. Alinhamos os benefícios do consumo de produtos orgânicos à dedicação dos cozinheiros, para trazer ao consumidor uma experiência única.</p>
        </div>
      </div>
      <div className="carousel-item">
        <img src={principal} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={principal} className="d-block w-100" alt="..."/>
      </div>
    </div>
  </div>
</div>
  )}

  export default Carrousel