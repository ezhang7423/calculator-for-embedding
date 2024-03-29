
let consoView = document.querySelector('.inputArea')

let currentStack = ''

let fonS

// function zaddCharToStackAndView(char) {
// 	currentStack = currentStack.concat(char)
// 	consoView.value = currentStack
// };

for (let x = 0; x < 10; x++) {
	document.querySelector(`.d${x}`).addEventListener('click', () => {
		currentStack = currentStack.concat(x);
		consoView.value = currentStack
	})
}


consoView.addEventListener('keyup', () => {
	currentStack = consoView.value;
	if (currentStack.length > 8 && currentStack.length < 11) {
		consoView.style["font-size"] = `${5.6 - (currentStack.length - 8)}rem`
	}
	else if (currentStack.length > 11) {
		consoView.style["font-size"] = "1rem"
	}
	else if (currentStack.length < 8) {
		consoView.style["font-size"] = "5.6rem"
	}
})


consoView.addEventListener('click', () => { if (consoView.value === '0') consoView.value = '' })


big = 1000000000000


consoView.addEventListener('keydown', (e) => {
	if (e.key == "Enter") {
		let expression = currentStack
		expression = expression.replace(/\^/g, '**')
		let ans = eval(expression)
		console.log(ans)
		ans = Math.round(big * ans) / big
		currentStack = ans.toString()
		consoView.value = ans.toString()
	}
})

document.querySelector('.clear').addEventListener('click', () => {
	currentStack = '';
	consoView.value = 0
})

document.querySelector('.bkspc').addEventListener('click', () => {
	currentStack = currentStack.slice(0, currentStack.length - 1);
	consoView.value = consoView.value.slice(0, consoView.value.length - 1)
	if (consoView.value == '') consoView.value = '0'
})


document.querySelector('.exponent').addEventListener('click', () => {
	if (isNaN(parseInt(currentStack.charAt(currentStack.length - 1))) == false) {
		currentStack = currentStack.concat('^')
		consoView.value = currentStack
	}
})

document.querySelector('.divide').addEventListener('click', () => {
	if (isNaN(parseInt(currentStack.charAt(currentStack.length - 1))) == false) {
		currentStack = currentStack.concat('/')
		consoView.value = currentStack
	}
})

document.querySelector('.multiply').addEventListener('click', () => {
	if (isNaN(parseInt(currentStack.charAt(currentStack.length - 1))) == false) {
		currentStack = currentStack.concat('*')
		consoView.value = currentStack
	}
})

document.querySelector('.subtract').addEventListener('click', () => {
	if (isNaN(parseInt(currentStack.charAt(currentStack.length - 1))) == false) {
		currentStack = currentStack.concat('-')
		consoView.value = currentStack
	}
})

document.querySelector('.add').addEventListener('click', () => {
	if (isNaN(parseInt(currentStack.charAt(currentStack.length - 1))) == false) {
		currentStack = currentStack.concat('+')
		consoView.value = currentStack
	}
})


document.querySelector(`.lp`).addEventListener('click', () => {
	currentStack = currentStack.concat('(');
	consoView.value = currentStack
})

document.querySelector(`.rp`).addEventListener('click', () => {
	let lp = 0, rp = 0
	for (let x of currentStack) {
		if (x === '(') lp++
		else if (x === ')') rp++
	}
	if (rp < lp) {
		currentStack = currentStack.concat(')');
		consoView.value = currentStack
	}
})

document.querySelector('.equals').addEventListener('click', () => {
	let expression = currentStack
	expression = expression.replace(/\^/g, '**')
	let ans = eval(expression)
	currentStack = ans.toString()
	consoView.value = ans.toString()
})