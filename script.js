
let consoView = document.querySelector('.consoleArea')

let currentStack = ''


function zaddCharToStackAndView(char) {
	currentStack = currentStack.concat(char)
	consoView.innerText = currentStack
};

for (let x = 0; x<10; x++){
	document.querySelector(`.d${x}`).addEventListener('click', () =>
	 {currentStack = currentStack.concat(x); 
		consoView.innerText = currentStack
	})
}


document.querySelector('.clear').addEventListener('click', () => {currentStack = ''; 
	consoView.innerText = 0})

document.querySelector('.bkspc').addEventListener('click', () => {currentStack = currentStack.slice(0, currentStack.length-1);
	consoView.innerText = consoView.innerText.slice(0, consoView.innerText.length-1)
	if (consoView.innerText == '') consoView.innerText = '0'})


document.querySelector('.exponent').addEventListener('click', () => {
	if (isNaN(parseInt(currentStack.charAt(currentStack.length-1))) == false){
				currentStack = currentStack.concat('^')
				consoView.innerText = currentStack}
})

document.querySelector('.divide').addEventListener('click', () => {
	if (isNaN(parseInt(currentStack.charAt(currentStack.length-1))) == false){
				currentStack = currentStack.concat('/')
				consoView.innerText = currentStack}
})

document.querySelector('.multiply').addEventListener('click', () => {
	if (isNaN(parseInt(currentStack.charAt(currentStack.length-1))) == false){
				currentStack = currentStack.concat('*')
				consoView.innerText = currentStack}
})

document.querySelector('.subtract').addEventListener('click', () => {
	if (isNaN(parseInt(currentStack.charAt(currentStack.length-1))) == false){
				currentStack = currentStack.concat('-')
				consoView.innerText = currentStack}
})

document.querySelector('.add').addEventListener('click', () => {
	if (isNaN(parseInt(currentStack.charAt(currentStack.length-1))) == false){
				currentStack = currentStack.concat('+')
				consoView.innerText = currentStack}
})


document.querySelector(`.lp`).addEventListener('click', () =>
	 {currentStack = currentStack.concat('('); 
		consoView.innerText = currentStack})

document.querySelector(`.rp`).addEventListener('click', () =>
		{let lp = 0, rp = 0
		for (let x of currentStack){
			if (x==='(') lp++
			else if (x===')') rp++
		}
		if (rp < lp){
		currentStack = currentStack.concat(')'); 
		consoView.innerText = currentStack}})

document.querySelector('.equals').addEventListener('click', () => {
	let expression = currentStack
	expression = expression.replace(/\^/g, '**')
	let ans = eval(expression)
	currentStack = ans.toString()
	consoView.innerText = ans.toString()
})