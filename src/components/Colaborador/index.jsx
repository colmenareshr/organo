import './Colaborador.css'

const Colaborador = ({ nome, cargo, imagem}) => {
  return (
    <div className='colaborador'>
      <div className='colaborador-header'>
        <img
          src={imagem}
          alt={nome}
        />
      </div>
      <div className='colaborador-content'>
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  )
}

export default Colaborador
