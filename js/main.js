function profile() {
	// GATHER ALL THE INFORMATION
	var fName = document.getElementById('fName').value
	var lName = document.getElementById('lName').value
	var male = document.getElementById('male').value
	var female = document.getElementById('female').value
	var email = document.getElementById('email').value
	var phone = document.getElementById('phone').value
	var sign = document.getElementById('sign').value
	var male = document.getElementById('male').value
	var female = document.getElementById('female').value
	fName = fName.toUpperCase()
	lName = lName.toUpperCase()
	var p1 = phone.substr(0,3)
	var p2 = phone.substr(3,3)
	var p3 = phone.substr(6,9)
	
	setTimeout(function(){
	if(document.getElementById('fName').value === "" || document.getElementById('lName').value === "" || document.getElementById('email').value === "" || document.getElementById('phone').value === "") {
	alert("Information incomplete, please double check your name, email and phone number")
	}
	else if(document.getElementById('male').checked){
		document.getElementById('gender').innerHTML = "Gender: " + male
	} else if(document.getElementById('female').checked){
		document.getElementById('gender').innerHTML = "Gender: " + female
	} else(document.getElementById('noGender').textContent = "Please select a gender")
	
	document.getElementById('name').innerHTML = "Name: " + fName + " " + lName
	document.getElementById('eMail').innerHTML = "E-mail: " + email
	document.getElementById('Horoscope').innerHTML = "Horoscope Sign: " + sign
	document.getElementById('PHONE').innerHTML = "Phone Number: " + "(" + p1 + ")" + " " + p2 + "-" + p3
	}, 300);
}