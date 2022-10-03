import { createSignal } from "solid-js"
export function useTodo() {
	let id = 0
	let [items, setItems] = createSignal([
		{
			id: id++,
			content: '吃饭'
		},
		{
			id: id++,
			content: '睡觉'
		}
	])

	const createItem = function (content) {
		return {
			id: id++,
			content
		}
	}

	const addItem = function (content) {
		setItems([...items(), createItem(content)])
	}

	const removeItem = function (id) {
		setItems(items().filter(item => item.id !== id))
	}
	return {
		items,
    removeItem,
    createItem,
    addItem
	}
}
