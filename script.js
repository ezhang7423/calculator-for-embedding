
let consoView = document.querySelector('.consoleArea')

let currentStack = ''



for (let x = 0; x<10; x++){
	document.querySelector(`.d${x}`).addEventListener('click', () =>
	 {currentStack = currentStack.concat(x); 
		consoView.innerText = currentStack
	})
}


let clear = document.querySelector('.clear')
clear.addEventListener('click', () => {currentStack = ''; 
	consoView.innerText = 0})

let bkspc = document.querySelector('.bkspc')
bkspc.addEventListener('click', () => {currentStack = currentStack.slice(0, currentStack.length-1);
	consoView.innerText = consoView.innerText.slice(0, consoView.innerText.length-1)
	if (consoView.innerText == '') consoView.innerText = '0'})

