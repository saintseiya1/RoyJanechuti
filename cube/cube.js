
let nameDiv = document.querySelector('.name')

let fullName = ['R','o','y',' ','J','a','n','e','c','h','u','t','i']

let letterSpan = []

for(x in fullName){
	
	letterSpan[x] = document.createElement('span')
	letterSpan[x].classList.add('letter')
	letterSpan[x].innerHTML = fullName[x]
	nameDiv.append(letterSpan[x])	
}

