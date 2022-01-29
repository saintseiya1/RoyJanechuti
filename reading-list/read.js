let but = document.querySelector('.add')
but.addEventListener('click', addEntry)

let id = document.querySelector('.id')
let titles = document.querySelector('.titles')
let author = document.querySelector('.author')
let year = document.querySelector('.year')
let isbn = document.querySelector('.isbn')

let f = document.querySelectorAll('.field')

function addEntry(e) {
	let m = document.querySelector('.main')
	m.innerHTML = `<table><tbody><tr><th>ID</th><th>Title</th><th>Author</th><th>Year</th><th>ISBN</th></tr>
<tr><td>${id.value}</td><td>${titles.value}</td><td>${author.value}</td><td>${year.value}</td><td>${isbn.value}</td></tr></tbody></table>`
	document.body.append(m)
	
	for (var i = f.length-1; i >= 0; i--) {
		f[i].value = ''
	}
	
}

