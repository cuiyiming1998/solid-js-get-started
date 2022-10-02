import { createSignal, createEffect } from 'solid-js'
import { App } from './App'
import { render } from 'solid-js/web'

// const [count, setCount] = createSignal(0)

// createEffect(() => {
//   document.querySelector('#app').innerHTML = ''

//   const div = document.createElement('div')
//   div.innerText = count() + 10

//   document.querySelector('#app').append(div)
// })

// setInterval(() => {
// 	setCount(count() + 1)
// }, 1000)

render(App, document.querySelector('#app'))
