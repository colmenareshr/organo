import './CampoTexto.css'

const CampoTexto = (props) => {
  return (
    <div className='campo-texto'>
      <label htmlFor='nome'> {props.label} </label>
      <input
        type='text'
        name='nome'
        id='nome'
        placeholder={props.placeholder}
      />
    </div>
  )
}

export default CampoTexto
