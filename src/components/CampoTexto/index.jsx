import './CampoTexto.css'

const CampoTexto = ({ label, placeholder }) => {
  return (
    <div className='campo-texto'>
      <label htmlFor='nome'>{label}</label>
      <input type='text' name='nome' id='nome' placeholder={placeholder} />
    </div>
  )
}

export default CampoTexto
