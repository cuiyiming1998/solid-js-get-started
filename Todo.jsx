import { useTodo } from './useTodo'

const { items, addItem, removeItem } = useTodo()
function TodoItem(props) {
	return (
		<li>
			{props.item.content}
			<button onClick={() => removeItem(props.item.id)}>－</button>
		</li>
	)
}

export function Todo() {
	let input = null

  const handleClick = function() {
    addItem(input.value)
    input.value = ''
  }

	return (
		<div>
			<input type="text" ref={input}></input>
			<button onClick={handleClick}>＋</button>
			<ul>
				{items().map(item => (
					<TodoItem item={item} />
				))}
			</ul>
		</div>
	)
}
