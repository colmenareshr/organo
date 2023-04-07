import './CampoTexto.css'

const CampoTexto = ({
  name,
  label,
  placeholder,
  obrigatorio,
  valor,
  targetValue,
}) => {
  const handleChange = (e) => {
    targetValue(e.target.value)
  }

  return (
    <div className='campo-texto'>
      <label htmlFor={name}>{label}</label>
      <input
        onChange={handleChange}
        value={valor}
        required={obrigatorio}
        type='text'
        name={name}
        id={name}
        placeholder={placeholder}
      />
    </div>
  )
}

export default CampoTexto
