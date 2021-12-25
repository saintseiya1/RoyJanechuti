var Valid = {
	vusername: false,
	vemail: false,
	vpassword: false,
	vconfpassword: false,
	vbirthday: false,
	vparentconsent: false,
	vbio: true,
	vformvalid: false
};

// NAME ---------------------------------------------
var username = document.getElementById('name');
username.addEventListener('blur', checkUsername);
var unfeed = document.getElementById('unfeedback');

function checkUsername() {
	if (username.value.length < 5) {
		unfeed.className = 'show';
		Valid.vusername = false;
	} else {
		unfeed.className = 'hide';
		Valid.vusername = true; 
	}
}

// EMAIL ---------------------------------------------
var em = document.getElementById('email');
em.addEventListener('blur', checkEmail);
var emfeed = document.getElementById('emfeedback');

function checkEmail() {	
	if (em.value == "") {
		emfeed.className = 'show';
		Valid.vemail = false; 
	} else {
		emfeed.className = 'hide';
		Valid.vemail = true; 
	}	
}

// PASSWORD -------------------------------------------
var pass = document.getElementById('password');
pass.addEventListener('blur', checkPassword);
var passfeed = document.getElementById('passfeedback');

function checkPassword() {	
	if (pass.value.length < 8) {
		passfeed.className = 'show';
		Valid.vpassword = false; 
	} else {
		passfeed.className = 'hide';
		Valid.vpassword = true; 
	}	
}

// CONFIRM PASSWORD -------------------------------------------
var confpass = document.getElementById('conf-password');
confpass.addEventListener('blur', confirmPassword);
var confpassfeed = document.getElementById('confpassfeedback');

function confirmPassword() {	
	if (confpass.value != pass.value) {
		confpassfeed.className = 'show';
		Valid.vconfpassword = false; 
	} else {
		confpassfeed.className = 'hide';
		Valid.vconfpassword = true; 
	}	
}

// BIRTHDAY --------------------------------------------------
var birthday = document.getElementById('birthday');
birthday.addEventListener('blur', confirmBirthday);
var consentfeed = document.getElementById('consent-container');
var parentfeed = document.getElementById('parents-consent')

function confirmBirthday() {
	var dob = this.value.split('-');
	var date = new Date(dob[0], dob[1] - 1, dob[2]);
	if (isNaN(date)) {
		return false;
	}

	var now = new Date();
	if ((now - date) < (1000 * 60 * 60 * 24 * 365 * 13)) {		
		consentfeed.className = 'show';
		Valid.vbirthday = false; 
	} else {
		consentfeed.className = 'hide';		
	}	Valid.vbirthday = true; 
}

// PARENT CONSENT --------------------------------------------
parentfeed.addEventListener('blur', parentCheck);

function parentCheck() {
	if (parentfeed.checked == true) {
		Valid.vbirthday = true; 
		Valid.vparentconsent = true; 
	} else {
		Valid.vbirthday = false; 
		Valid.vparentconsent = false; 
	}
}

// BIO --------------------------------------------------------
var bio = document.getElementById('bio');
bio.addEventListener('blur', bioValidation);
var biofeed = document.getElementById('biofeedback');
var bcount = document.getElementById('bio-count');

function bioValidation() {	
	bcount.innerHTML = bio.value.length;
	if (bio.value.length > 140) {
		biofeed.className = 'show';
		Valid.vbio = false; 
	} else {
		biofeed.className = 'hide';
		Valid.vbio = true; 
	}	
}

// FORM -----------------------------------------------
var sub =document.getElementById('form');
sub.addEventListener('submit', success);

function success(e) {
	if ((Valid.vusername == true) && (Valid.vemail == true) &&
		(Valid.vpassword == true) && (Valid.vconfpassword == true) &&
		(Valid.vbirthday == true) && (Valid.vparentconsent == true) &&
		(Valid.vbio == true)) {
			alert("You have successfully registered!");
			Valid.vformvalid = true;
	}		

	if(!Valid.vformvalid) {
		e.preventDefault();
	}
}