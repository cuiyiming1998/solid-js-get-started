var currentEffect
function createSignal(value) {
	const effects = new Set()
	function read() {
		// 依赖收集
		if (currentEffect) {
			effects.add(currentEffect)
		}
		return value
	}

	function write(newValue) {
		// 触发依赖
		// 通过遍历去调用
		value = newValue
		for (const effect of effects) {
			effect()
		}
	}
	return [read, write]
}

function createEffect(effect) {
	currentEffect = effect
	effect()
	currentEffect = null
}
