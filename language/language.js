let b = document.querySelector('.button');

function enlarge() {
	this.className = 'test';
}

b.addEventListener('click', enlarge);
