

let atc = document.getElementById('add_to_cart');
atc.addEventListener('click', add_item);
let output = document.getElementById('checkout');

function add_item()
{

	output.innerHTML += 'You have added to cart a ' + this.name + '<br>';

}

