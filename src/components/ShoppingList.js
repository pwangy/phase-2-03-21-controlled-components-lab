import { useState } from 'react'
import ItemForm from './ItemForm'
import Filter from './Filter'
import Item from './Item'

const ShoppingList = ({ items, onItemFormSubmit }) => {
	const [selectedCategory, setSelectedCategory] = useState('All')
  const [search, setSearch] = useState('')

	const handleCategoryChange = e => {
		setSelectedCategory(e.target.value)
	}

	const itemsToDisplay = items
    .filter( // category
      (item) => selectedCategory === 'All' ||  item.category === selectedCategory
    ) // search
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))

	return (
		<div className='ShoppingList'>
			<ItemForm onItemFormSubmit={onItemFormSubmit} />
			<Filter 
        onCategoryChange={handleCategoryChange} 
        onSearchChange={setSearch} 
        search={search} />
			<ul className='Items'>
				{itemsToDisplay.map(i => (
					<Item
						key={i.id}
						name={i.name}
						category={i.category}
					/>
				))}
			</ul>
		</div>
	)
}

export default ShoppingList