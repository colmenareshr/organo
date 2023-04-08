import Colaborador from '../Colaborador'
import './Time.css'

const Time = ({ nome, corPrimaria, corSecundaria }) => {
  return (
    <section className='time' style={{ backgroundColor: corSecundaria }}>
      <h3 style={{borderColor: corPrimaria}}>{nome}</h3>
      <Colaborador />
    </section>
  )
}

export default Time
