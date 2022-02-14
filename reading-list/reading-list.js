let add = document.querySelector('.add')
let id = document.querySelector('.id')
let titles = document.querySelector('.titles')
let author = document.querySelector('.author')
let year = document.querySelector('.year')
let isbn = document.querySelector('.isbn')
let field = document.querySelectorAll('.field')

let addEntry = (e)=> {
	e.preventDefault()
	if(checkIfBlank())
		{
			alert('One or more fields are blank!')
			return
		}
	let t = document.querySelector('.tb')
	t.innerHTML += `<tr><td>${id.value}</td><td>${titles.value}</td>
		<td>${author.value}</td><td>${year.value}</td><td>${isbn.value}</td>
		<td><a class="delete" href="#">X</a></td></tr>`

	let d = document.querySelectorAll('.delete');

	for(let i = 0; i < d.length; i++) {
		// console.log(d[i])
		d[i].addEventListener('click', deleteEntry)
	}
	
	for (let i = 0; i < field.length; i++) {
		field[i].value = ''
	}
}
add.addEventListener('click', addEntry)

function deleteEntry(e) {
	e.preventDefault()
	tr = this.parentNode.parentNode
	tbody = this.parentNode.parentNode.parentNode
	tbody.removeChild(tr)
}
		
function checkIfBlank() {
	for(i = 0; i < field.length; i++) {
		if(field[i].value == '') {
			field[i].classList.add('empty')	
		} else {
			if(field[i].classList.contains('empty')) {
				field[i].classList.remove('empty')					
			}
		}
	}
	if (id.value == '' ||
	titles.value == '' ||
	author.value == '' ||
	year.value == '' ||
	isbn.value == ''
	)
		{
			return true
		}
}