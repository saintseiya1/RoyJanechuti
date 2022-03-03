let m = document.querySelectorAll('.mightyglyph');
let viewer = document.querySelector('#viewer');

// console.table(v.parentElement)

for (var i = 0; i < m.length; i++) {
	m[i].addEventListener('mouseover', show);
	m[i].addEventListener('mouseleave', hide);

}

function show() {
	// select the table row
	let tableRow = this.parentElement
	// select the character text
	let characterText = tableRow.childNodes[1].innerText
	// select the character symbol
	let characterSymbol = this.innerText
	// output the symbol and text to the viewer
	viewer.innerHTML = characterSymbol + "<br>" + characterText
}

function hide() {
	// clear the viewer
	viewer.innerText = ''

}