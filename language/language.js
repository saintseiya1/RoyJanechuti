let init = ()=> {
let mg = document.querySelectorAll('.mightyglyph')
let image = document.querySelector('#image')
let caption = document.querySelector('#caption')

for (var i = 0; i < mg.length; i++) {
	mg[i].addEventListener('mouseover', show)
	mg[i].addEventListener('mouseleave', hide)
}

function show() {
	// select the table row
	let tableRow = this.parentElement
	
	// select the character text
	let characterText = tableRow.childNodes[1].innerText
	
	// select the character symbol
	let characterSymbol = this.innerText
	
	// output the symbol and text to the viewer
	image.innerText = characterSymbol
	caption.innerText = characterText
}

function hide() {
	// clear the viewer
	image.innerText = ''
	caption.innerText = ''
}
}

init();