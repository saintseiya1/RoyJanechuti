let atc = document.querySelectorAll('li'); 
let output = document.getElementById('checkout');


for(i = 0; i < atc.length; i++)
{
	atc[i].addEventListener('click', add_item);
}

function add_item() 
{
	output.innerHTML += 'You have added a ' + '<span class="highlight">' + 
		this.innerText + '</span>' + ' to your shopping cart!<br>';
}


let cart = document.querySelector('#cart'); 
cart.addEventListener('click', clear_cart);

function clear_cart()
{
	output.innerHTML = '';
}