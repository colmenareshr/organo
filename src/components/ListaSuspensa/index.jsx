import './ListaSuspensa.css'

const ListaSuspensa = ({ label, itens }) => {
  return (
    <div className='ListaSuspensa'>
      <label htmlFor=''> {label} </label>
      <select name='' id=''>
        {itens.map((item) => (
          <option key={item}> {item} </option>
        ))}
      </select>
    </div>
  )
}

export default ListaSuspensa
