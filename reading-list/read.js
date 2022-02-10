let but = document.querySelector('.add')
but.addEventListener('click', addEntry)
// but.addEventListener('click', checkEmpty)
let id = document.querySelector('.id')
let titles = document.querySelector('.titles')
let author = document.querySelector('.author')
let year = document.querySelector('.year')
let isbn = document.querySelector('.isbn')

let f = document.querySelectorAll('.field')

function addEntry(e) {
	e.preventDefault()
	if(checkEmpty())
		{
			alert('One or more fields are blank!')
			return
		}
	alert("go on")
	let t = document.querySelector('.tb')
	t.innerHTML += `<tr><td>${id.value}</td><td>${titles.value}</td>
		<td>${author.value}</td><td>${year.value}</td><td>${isbn.value}</td>
		<td><a class="delete" href="#">X</a></td></tr>`

	let d = document.querySelectorAll('.delete');

	for(let i = 0; i < d.length; i++) {
		// console.log(d[i])
		d[i].addEventListener('click', deleteEntry)
	}
	
	for (let i = 0; i < f.length; i++) {
		f[i].value = ''
	}

}


function deleteEntry(e) {
	e.preventDefault()
	tr = this.parentNode.parentNode
	tbody = this.parentNode.parentNode.parentNode
	tbody.removeChild(tr)
}

function checkEmpty() {
	// if (id.value == '' ||
	// titles.value == '' ||
	// author.value == '' ||
	// year.value == '' ||
	// isbn.value == ''
	// )
	// {
	// 	alert('Please insert all values')
		f = document.querySelectorAll('.field')
		for(i = 0; i < f.length; i++) {
			if(f[i].value == '') {
				f[i].classList.add('empty')
				console.log(f[i].class)
			} else {
				if(f[i].classList.contains('empty')) {
					f[i].classList.remove('empty')
				}
			}
		}

		return true
		
	// }
}