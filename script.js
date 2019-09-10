
let consoView = document.querySelector('.consoleArea')

let currentStack = 0


for (let x = 0; x<10; x++){
	document.querySelector(`.d${x}`).addEventListener('click', () =>
	 {currentStack = currentStack*10+x; 
		consoView.innerText = currentStack
	})
}

let clear = document.querySelector('.clear')
clear.addEventListener('click', () => {currentStack = 0; 
	consoView.innerText = 0})

