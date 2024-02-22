import { useState } from 'react'
import ShoppingList from './ShoppingList'
import Header from './Header'
import itemData from '../data/items'

const App = () => {
	const [items, setItems] = useState(itemData)
	const [isDarkMode, setIsDarkMode] = useState(false)

	function handleDarkModeClick() {
		setIsDarkMode((isDarkMode) => !isDarkMode)
	}

  const handleItemSubmit = (newItem) => {
    setItems([...items, newItem])
  }

	return (
		<div className={'App ' + (isDarkMode ? 'dark' : 'light')}>
			<Header
				isDarkMode={isDarkMode}
				onDarkModeClick={handleDarkModeClick}
			/>
			<ShoppingList items={items} onItemSubmit={handleItemSubmit} />
		</div>
	)
}

export default App