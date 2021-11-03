function checkEmail() {
	var email = document.getElementById('email');
	var text = email.value;
	var feedback = document.getElementById('wrongEmail');
	if (text.indexOf('@') < 0) {
		feedback.innerHTML = "Please enter a valid email";
	} else {
		feedback.innerHTML = "";
	}
}

function checkMessage() {
	var msg = document.getElementById('message');
	var text = msg.value;
	var feedback = document.getElementById('wrongMessage');
	if (text.length <= 5) {
		feedback.innerHTML = "Message must be longer than 5 characters";
	} else {
		feedback.innerHTML = "";
	}
}

var email = document.getElementById('email');
var msg = document.getElementById('message');
email.addEventListener('keyup', checkEmail, false);
msg.addEventListener('keyup', checkMessage, false);