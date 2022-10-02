import { createSignal, createEffect } from 'solid-js'

const [count, setCount] = createSignal(0)

let b
createEffect(() => {
	b = count() + 10
	console.log(b)
})

setInterval(() => {
	setCount(count() + 1)
}, 1000)
