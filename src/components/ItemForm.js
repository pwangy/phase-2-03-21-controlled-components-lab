import { v4 as uuid } from 'uuid'
import { useState } from 'react'

const initialState = {
  name: '',
  cateogry: ''  
}
  
const ItemForm = ({ onItemSubmit }) => {
  const [itemForm, setItemForm] = useState(initialState)

  const handleChange = e => {
    setItemForm({
      ...itemForm,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    onItemSubmit({
      id: uuid(),
      ...itemForm
    })
  }

	return (
		<form className='NewItem' autoComplete='off' onSubmit={handleSubmit}>
			<label>	Name:
				<input 
          type='text'
          name='name'
          value={itemForm.name}
          onChange={handleChange}
        />
			</label>
			<label>
				Category:
				<select 
          name='category'
          value={itemForm.category}
          onChange={handleChange} >
					<option value=''>Select</option>
					<option value='Produce'>Produce</option>
					<option value='Dairy'>Dairy</option>
					<option value='Dessert'>Dessert</option>
				</select>
			</label>

			<button type='submit'>Add to List</button>
		</form>
	)
}

export default ItemForm