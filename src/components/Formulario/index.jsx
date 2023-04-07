import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
const Formulario = () => {
  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')
  
  const times = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão',
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    setNome('')
    setCargo('')
    setImagem('')
    console.log('Form enviado ====>', nome, cargo, imagem, time)
  }
  return (
    <section className='formulario'>
      <form onSubmit={handleSubmit}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          obrigatorio={true}
          label='Nome'
          name='nome'
          valor={nome}
          targetValue={(valor) => setNome(valor)}
          placeholder='Digite seu nome'
        />
        <CampoTexto
          obrigatorio={true}
          label='Cargo'
          name='cargo'
          valor={cargo}
          targetValue={(valor) => setCargo(valor)}
          placeholder='Digite seu cargo'
        />
        <CampoTexto
          label='Imagem'
          name='imagem'
          valor={imagem}
          targetValue={(valor) => setImagem(valor)}
          placeholder='Digite o endereço da imagem'
        />

        <ListaSuspensa
          obrigatorio={true}
          label='Time'
          name='lista'
          itens={times}
          valor={time}
          targetValue={(valor) => setTime(valor)}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  )
}

export default Formulario
