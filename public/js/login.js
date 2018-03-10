//Simulate login
// function fakeLogin(){
// 	var user = document.getElementById('username').value;
// 	var pass = document.getElementById('password').value;
// 	if(user == "user" && pass == "pass"){
// 		window.location = "/home";
// 	}
// 	else{
// 		alert("Incorrect username/password");
// 	}
// }

function fakeLogin(){
	// var user = document.getElementById('username').value;
	// var pass = document.getElementById('password').value;
	if(user == "" || pass == ""){
		alert("Please enter a username and password.");
	}
	else{
		window.location = "/home";
	}
}