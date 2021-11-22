let output = document.querySelector('#output');


function main() {
	let a = document.querySelector('main');
	a.classList.remove('hide');
	a.classList.add('fadeIn');
}

function footer() {
	let f = document.querySelector('footer');
	f.classList.remove('hide');
	//f.classList.add('fadeIn');
}

function backspace() {
	activeSpan = isActive();
	if(activeSpan) {
		newString = activeSpan.innerText;
		newSpan = newString.split('');
		newSpan.pop();
		activeSpan.innerText = newSpan.join('');
	}
}
let bk = document.querySelector('#backspace');
bk.addEventListener('click', backspace);

function activateA() {
	spA.classList.add('active');
	inputA.classList.add('highlight');
	spB.classList.remove('active');
	inputB.classList.remove('highlight');
}
let inputA = document.querySelector('#inputA');
inputA.addEventListener('click', activateA);
let spA = document.querySelector('#spA');

function activateB() {
	spB.classList.add('active');
	inputB.classList.add('highlight');
	spA.classList.remove('active');
	inputA.classList.remove('highlight');
}
let inputB = document.querySelector('#inputB');
inputB.addEventListener('click', activateB);
let spB = document.querySelector('#spB');

function isActive() {
	let result = document.querySelector('.active');
	return result;
}

function enterNumber(e) {
	let activeSpan = isActive();
	if(activeSpan) {
	let text = [];
	text.push(e.target.value);
	activeSpan.innerText += text;
	}
}
let nb = document.querySelector('#numberButtons');
nb.addEventListener('click', enterNumber);

function enterOperand(e) {
	if(e.target.value == undefined) return;
	spO.innerText = e.target.value;	
}
let ob = document.querySelector('#operationButtons');
ob.addEventListener('click', enterOperand);
let spO = document.querySelector('#spO');


function clearScreen() {
	let spanAll = document.querySelectorAll('span');
	let spanLength = spanAll.length - 1;

	for (x = 0; x <= spanLength; x++) {
		spanAll[x].innerText = '';
	}
}
let cl = document.querySelector('#clear');
cl.addEventListener('click', clearScreen);

function close(e) {
	e.preventDefault();
	removalDIV = this.parentNode;
	parentUL = removalDIV.parentNode;
	parentUL.removeChild(removalDIV);

	main();
	footer();
	h.classList.remove('hide');
}

function welcome() {
	let w = document.createElement('div');
	let image = '<h3>Calculator by RHJ Design</h3>' +
				'<img src="cartoon-calculator.png" alt="calculator cartoon" />' +
				'<a href="#" class="exit">close X</a>';
	w.innerHTML = image;
	w.classList.add('modal');
	document.body.appendChild(w);
	let ex = document.querySelector('.exit');
	ex.addEventListener('click', close);
	h.classList.add('hide');

	let a = document.querySelector('main');
	a.classList.add('hide');

	let f = document.querySelector('footer');
	f.classList.add('hide');
}
let h = document.querySelector('h1');
h.addEventListener('click', function() {
	welcome();
});

function calculation() {
	let a = spA.innerText;
	a = parseFloat(a);
	let b = spB.innerText;
	b = parseFloat(b);
	let op = spO.innerText;
	switch(op) {
		case '+':
			c = a + b;
			printResult(c);
			break;
		case '-':
			c = a - b;
			printResult(c);
			break;
		case 'x':
			c = a * b;
			printResult(c);
			break;
		case '/':
			c = a / b;
			printResult(c);
			break;
		default:
			c = 'Please enter operation';
			printResult(c);
	}
	function printResult(out) {
		output.innerText = ' = ' + out;
	}
}
let equals = document.querySelector('#equals');
equals.addEventListener('click', calculation);