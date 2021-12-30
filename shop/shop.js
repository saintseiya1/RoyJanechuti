let atc = document.querySelectorAll('.items'); 
let output = document.getElementById('checkout');


for(i = 0; i < atc.length; i++)
{
	atc[i].addEventListener('click', add_item);
}

function add_item() 
{
	output.innerHTML += 'You have added a ' + '<span class="highlight">' + 
		this.name + '</span>' + ' to your shopping cart!<br>';
}
