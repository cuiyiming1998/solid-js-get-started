import { createSignal } from 'solid-js'
import { Todo } from './Todo'

// function Counter(props) {
// 	const [count, setCount] = createSignal(1)
// 	const doubleCount = () => count() * 2

// 	const handleClick = () => {
// 		setCount(count() + 1)
// 	}

// 	return (
// 		<div>
// 			<div>initCount: {props.count}</div>
// 			<div>count: {count()}</div>
//       <div>doubleCount: {doubleCount()}</div>
// 			<button onClick={handleClick}>click</button>
// 		</div>
// 	)
// }
export function App() {
	return (
		<div>
			{/* <Counter count={1} />
			<Counter count={2} />
			<Counter count={3} /> */}
      <Todo />
		</div>
	)
}
