import Colaborador from '../Colaborador'
import './Time.css'

const Time = ({ nome, corPrimaria, corSecundaria, colaboradores }) => {
  return (
    <section className='time' style={{ backgroundColor: corSecundaria }}>
      <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
      <div className='colaboradores'>
        {colaboradores.map((colaborador) => (
          <Colaborador
            key={colaborador.nome}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
          />
        ))}
      </div>
    </section>
  )
}

export default Time
