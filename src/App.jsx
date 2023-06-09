import { useState } from 'react'
import Banner from './components/Banner'
import Formulario from './components/Formulario'
import Time from './components/Time/indes'

function App() {
  const [colaboradores, setColaboradores] = useState([])

  const [times, setTimes] = useState([
    {
      nome: 'Programação',
      corPrimaria: '#57c278',
      corSecundaria: '#d9f7e9',
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5',
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    },
  ])

  const colaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  const deletarColaborador = () => {
    console.log('colaborador deletado')
  }
  return (
    <div className='App'>
      <Banner />
      <Formulario
        times={times.map((time) => time.nome)}
        colaborador={(colaborador) => colaboradorAdicionado(colaborador)}
      />
      {times.map((time, index) => (
        <Time
          key={index}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
          aoDeletar={deletarColaborador}
        />
      ))}
    </div>
  )
}

export default App
