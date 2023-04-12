import Colaborador from '../Colaborador'
import './Time.css'

const Time = ({
  nome,
  corPrimaria,
  corSecundaria,
  colaboradores,
  aoDeletar,
}) => {
  return (
    colaboradores.length > 0 && (
      <section className='time' style={{ backgroundColor: corSecundaria }}>
        <input type='color' className='input-cor' value={corPrimaria} />
        <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
        <div className='colaboradores'>
          {colaboradores.map((colaborador, index) => (
            <Colaborador
              key={index}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              cor={corPrimaria}
              aoDeletar={aoDeletar}
            />
          ))}
        </div>
      </section>
    )
  )
}

export default Time
