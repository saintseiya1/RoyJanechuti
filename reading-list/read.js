
let but = document.querySelector('.add')
but.addEventListener('click', addEntry)

let id = document.querySelector('.id')
let titles = document.querySelector('.titles')
let author = document.querySelector('.author')
let year = document.querySelector('.year')
let isbn = document.querySelector('.isbn')

let f = document.querySelectorAll('.field')

function addEntry() {
	let t = document.querySelector('.tb')
	t.innerHTML += `<tr><td>${id.value}</td><td>${titles.value}</td>
		<td>${author.value}</td><td>${year.value}</td><td>${isbn.value}</td></tr></tbody></table>`
	
	for (let i = 0; i < f.length; i++) {
		f[i].value = ''
	}
	
}

