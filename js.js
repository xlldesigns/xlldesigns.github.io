function check(){
	var first = document.getElementById("first").value;
	var last = document.getElementById("last").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
	
	if(first==""){alert("Please provide a first name");return false;}
	if(last==""){alert("Please provide a last name");return false;}
	if(email==""){alert("Please provide an email");return false;}
	if(phone==""){alert("Please provide a phone number");return false;}
}