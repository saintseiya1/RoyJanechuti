let but = document.querySelector('.add')
but.addEventListener('click', addEntry)

let id = document.querySelector('.id')
let title = document.querySelector('.title')
let author = document.querySelector('.author')
let year = document.querySelector('.year')
let isbn = document.querySelector('.isbn')

function addEntry(e) {
	// e.preventDefault()
	let t = document.createElement('table')
	t.innerHTML = '<table><tbody><tr><th>ID</th>' + 
		'<th>Title</th><th>Author</th><th>Year</th>' + 
		'<th>ISBN</th></tr></tbody></table>'
	document.body.append(t)




alert(id.value)
}