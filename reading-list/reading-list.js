// Create variables
let add = document.querySelector('.add')
let id = document.querySelector('.id')
let titles = document.querySelector('.titles')
let author = document.querySelector('.author')
let year = document.querySelector('.year')
let isbn = document.querySelector('.isbn')
let field = document.querySelectorAll('.field')

// adding entries
let addEntry = (e)=> {
	e.preventDefault()

	// checks if entries are blank
	if(checkIfBlank())
		{
			alert('One or more fields are blank!')
			return
		}

	// renders the HTML for the entries
	let t = document.querySelector('.tb')
	t.innerHTML += `<tr><td>${id.value}</td><td>${titles.value}</td>
		<td>${author.value}</td><td>${year.value}</td><td>${isbn.value}</td>
		<td><a class="delete" href="#">X</a></td></tr>`

	// adds a delete class for each entry
	let d = document.querySelectorAll('.delete');
	for(let i = 0; i < d.length; i++) {
		// console.log(d[i])
		d[i].addEventListener('click', deleteEntry)
	}
	
	// resets the form values to blanks
	for (let i = 0; i < field.length; i++) {
		field[i].value = ''
	}
}
add.addEventListener('click', addEntry)

// deletes the entry
function deleteEntry(e) {
	e.preventDefault()
	let tr = this.parentNode.parentNode
	let tbody = this.parentNode.parentNode.parentNode
	tbody.removeChild(tr)
}
	
// checks for blank values	
let checkIfBlank = ()=> {
	for(i = 0; i < field.length; i++) {
		if(field[i].value == '') {
			field[i].classList.add('empty')	
		} else {
			if(field[i].classList.contains('empty')) {
				field[i].classList.remove('empty')					
			}
		}
	}
	// if any value is left blank, true is returned
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