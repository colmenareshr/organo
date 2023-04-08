import './Colaborador.css'

const Colaborador = ({ nome, cargo, imagem, cor}) => {
  return (
    <div className='colaborador'>
      <div className='colaborador-header' style={{backgroundColor: cor}}>
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
