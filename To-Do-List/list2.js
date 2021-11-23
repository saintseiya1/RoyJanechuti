// today's date ////////////////////////////////////////
var todaysDate = new Date();
var td = document.getElementById('today');
td.innerHTML = todaysDate.toDateString();

// add button /////////////////////////////////////////
var addLink, removeLink;

var addLink = document.getElementById('add');
var removeLink = document.getElementById('remove');

var c = document.getElementById('cc');
addLink.addEventListener('click', addItem);

elList = document.getElementById('newlist');	


var count = 0;
var newcount = '';

function addItem(e) {
	e.preventDefault();	
	
	newDiv = document.createElement('div');
	//newText = document.createTextNode(mytext());
	newDiv.innerHTML = mytext();
	//newDiv.appendChild(newText);
	elList.appendChild(newDiv);
	createListener();

	function createListener() {
		num = 'butt' + count;
		newcount = document.getElementById(num);
		alert(newcount);
	}
}

function mytext() {
	count++;
	var text = '';
	text += '<label>' + count + '</label>';
	text += '&nbsp;<input type="text" placeholder="item ' + count + '" />';
	text += '&nbsp;<label>Due Date:</label>';
	text += '&nbsp;<input type="date" name="date">';
	text += '&nbsp; <button id="butt' + count + '">REMOVE</button>';	



	return text;
}

removeLink.addEventListener('click', removeItem, false);

function removeItem(e) {
	e.preventDefault();
	if (count < 1) return;
	remcount = count - 1;
	var remnumber = "butt4";
	alert(remnumber);
	var removal = document.getElementById(newcount);
	console.table(removal);
	//var removeEl = document.getElementsByTagName('div')[remcount];
	var containerEl = removal.parentNode;
	console.table(containerEl);
	containerEl.removeChild(removal);
	grandfather = containerEl.parentNode;
	grandfather.removeChild(containerEl);
	count--;
}