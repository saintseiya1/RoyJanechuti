// today's date 
var todaysDate = new Date();
var td = document.getElementById('today');
td.innerHTML = todaysDate.toDateString();

// on button
o = document.getElementById('on');
o.addEventListener('click', turnOn);

function turnOn() {
	c = document.getElementById('container');
	c.classList.remove('hide');
}

// off button
of = document.getElementById('off');
of.addEventListener('click', turnOff);

function turnOff() {
	c = document.getElementById('container');
	c.classList.add('hide');
}

// create variables
var addLink = document.getElementById('add');
addLink.addEventListener('click', addItem);
elList = document.getElementById('list');	
var count = 0;

// add functionality
function addItem(e) {
	e.preventDefault();	
	newDIV = document.createElement('div');
	newDIV.innerHTML = createDIV();
	elList.appendChild(newDIV);
	newDIV.className = 'adding';
	createListener();
}

function createDIV(){
	count++;
	var text = '';
	text += '<label>' + count + '</label>';
	text += '&nbsp;<input type="text" placeholder="item ' + count + '" />';
	text += '&nbsp;<label>Due Date:</label>';
	text += '&nbsp;<input type="date" name="date">';
	text += '&nbsp; <button class="rembutt" id="butt' + count + '">REMOVE</button>';
	return text;
}

//remove functionality
function createListener() {
	num = 'butt' + count;
	newID = document.getElementById(num);
	newID.addEventListener('click', remove);
}

function remove(e) {
	e.preventDefault();
	removalDIV = this.parentNode;
	parentUL = removalDIV.parentNode;
	buttonAll = document.querySelectorAll('button');
	for (x of buttonAll) {
		x.setAttribute('disabled', '');
		x.classList.add('fadeout');
	}
	removalDIV.className = 'remove';
	setTimeout(removalfunct, 2000);
}

function removalfunct() {
	parentUL.removeChild(removalDIV);
	buttonAll2 = document.querySelectorAll('button');
	for (x of buttonAll2) {
		x.removeAttribute('disabled');
		x.classList.remove('fadeout');
	}
}