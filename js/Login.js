const submit = document.getElementById("user-login")

submit.addEventListener("click", (e) => {
	e.preventDefault();

	const user = document.getElementById("username")
	const pass = document.getElementById("password")
	const error = []
	const userInfo = []
	var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/
	
	if (user.value == '') {
		error.push('Missing username')
	} 

	if (pass.value == '') {
		error.push('Missing password')
	}

	if (user.value !== '' && pass.value !== ''){
		if (user.value == 'studentadmin' && pass.value == 'studentadmin'){
			alert('Login Successful')
			userInfo.push(user.value, pass.value)
		} else if (user.value == 'alumni' && pass.value == 'alumni') {
			alert('Login Successful')
			userInfo.push(user.value, pass.value)
		} else {
			error.push('Invalid username/password combination')
			if (format.test(user.value)){
				error.push('Remove special character/s in the username')
			}
		}
	}
	
	if (error.length > 0) {
		alert(error.join('\n'))	
		console.log(error)
	} else {
		console.log(userInfo)
		const loginData = JSON.stringify(userInfo);
		localStorage.setItem("loginData", loginData)
		
		if(user.value == 'studentadmin' && pass.value == 'studentadmin'){
			window.localStorage.setItem("Login", "Student");
      	window.open('../portal/home.html','_self');
		} else {
			window.localStorage.setItem("Login", "Alumni");
      	window.open('../alumni/alumnipage.html','_self');
		}
		
	}

	return 0;
});
