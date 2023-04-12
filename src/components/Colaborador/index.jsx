import { AiFillCloseCircle } from 'react-icons/ai'
import './Colaborador.css'

const Colaborador = ({ nome, cargo, imagem, cor, aoDeletar}) => {
  return (
    <div className='colaborador'>
      <div className='colaborador-header' style={{ backgroundColor: cor }}>
        <img src={imagem} alt={nome} />
      </div>
      <div className='colaborador-content'>
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
        <AiFillCloseCircle size={25} className='deletar' onClick={aoDeletar} />
      </div>
    </div>
  )
}

export default Colaborador
