import './ListaSuspensa.css'

const ListaSuspensa = ({
  name,
  label,
  itens,
  obrigatorio,
  valor, 
  targetValue,
}) => {
  return (
    <div className='lista-suspensa'>
      <label htmlFor={name}> {label} </label>
      <select
        value={valor}
        onChange={(e) => targetValue(e.target.value)}
        required={obrigatorio}
        name={name}
        id={name}
      >
        <option value=""></option>
        {itens.map((item) => (
          <option key={item}> {item} </option>
        ))}
      </select>
    </div>
  )
}

export default ListaSuspensa
