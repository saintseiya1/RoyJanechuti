let m = document.querySelectorAll('.mightyglyph');
console.log(m)
function enlarge() {

	this.classList.add('test')
}
function decrease() {

	this.classList.remove('test');
}

for (var i = 0; i < m.length; i++) {
	m[i].addEventListener('mouseover', enlarge);
	m[i].addEventListener('mouseleave', decrease);

}
