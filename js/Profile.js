const submit = document.getElementById("student-profile")

submit.addEventListener("click", (e) => {
	e.preventDefault();

	const fname = document.getElementById("first-name")
	const lname = document.getElementById("last-name")
   const mname = document.getElementById("middle-name")
   const bdate = document.getElementById("birth-date")
   const contactNum = document.getElementById("contact-number")
   const emailAdd = document.getElementById("email-address")
   const address = document.getElementById("address")
   const city = document.getElementById("city")
	const error = new Array()
	const studentInfo = new Array()

	var name = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?0-9]/
	var emailCheck = /[!#$%^&*()+\-=\[\]{};':"\\|,<>\/?]/
   var mnumChecker = /^\d{11}$/;
   // var phoneRe = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
   // var mnumChecker = /^\d{2}[0|9]\d{9}$/;
   // // var regexVar = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/
   // var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\-](0?[1-9]|1[012])[\-]\d{4}$/
   // var dateFormat = /^\d{4}[\-](0?[1-9]|1[012])[\-](0?[1-9]|[12][0-9]|3[01])$/
   // const emailChecker = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   var emailChecker = /\S+@\S+\.\S+/
   var dateParse = bdate.value.split('-')
   var yy = parseInt(dateParse[0])
   var mm  = parseInt(dateParse[1])
   var dd = parseInt(dateParse[2])
   var currentYear = new Date().getFullYear()

   if (fname.value == '') {
		error.push('Input First Name')
	} else if (name.test(fname.value)) {
      error.push('Remove Special Characters in First Name')
   } else {
      studentInfo.push(fname.value)
   }

   if (lname.value == '') {
		error.push('Input Last Name')
	} else if (name.test(lname.value)) {
      error.push('Remove Special Characters in Last Name')
   } else {
      studentInfo.push(lname.value)
   } 

   if (bdate.value == '') {
		error.push('Input Birth Date')
	} else if (yy < 1950 || yy > currentYear) {
      error.push('Invalid Birthdate (Year)')
   } else {
      studentInfo.push(bdate.value)
   }
   
   if (contactNum.value == '') {
		error.push('Input Contact Number')
	} else if (mnumChecker.test(contactNum.value)) {
      if (contactNum.value.charAt(0) === '0' && contactNum.value.charAt(1) === '9') {
         studentInfo.push(contactNum.value)
      } else {
         error.push('Invalid Phone Number')
      }
   } else {
      error.push('Invalid Phone Number')
   }
   
   if (emailAdd.value == '') {
		error.push('Input Email Address')
	} else if (((emailChecker.test(emailAdd.value)) === false) || (emailCheck.test(emailAdd.value))) {
      error.push('Invalid Email Format')
   } else {
      studentInfo.push(emailAdd.value)
   }
   
   if (address.value == '') {
		error.push('Input Address')
	} else {
      studentInfo.push(address.value)
   }

   if (city.value == '') {
		error.push('Input City')
	} else if (name.test(city.value)) {
      error.push('Remove Special Characters in City')
   } else {
      studentInfo.push(city.value)
   } 

   if (error.length > 0) {
      console.log(error.join('\n'))
      alert(error.join('\n'))
   } else {
      console.log(studentInfo)
      const studentData = JSON.stringify(studentInfo)
      localStorage.setItem("studentData", studentData)
   }
	// if (user.value !== '' && pass.value !== ''){
	// 	if (user.value == 'studentadmin' && pass.value == 'studentadmin'){
	// 		alert('Login Successful')
	// 		userInfo.push(user.value, pass.value)
	// 	} else if (user.value == 'alumni' && pass.value == 'alumni') {
	// 		alert('Login Successful')
	// 		userInfo.push(user.value, pass.value)
	// 	} else {
	// 		error.push('Invalid username/password combination')
	// 		if (format.test(user.value)){
	// 			error.push('Remove special character/s in the username')
	// 		}
	// 	}
	// }
	
	// if (error.length > 0) {
	// 	alert(error.join('\n'))	
	// 	console.log(error)
	// } else {
	// 	console.log(userInfo)
	// 	const loginData = JSON.stringify(userInfo);
	// 	localStorage.setItem("loginData", loginData)
		
	// 	if(user.value == 'studentadmin' && pass.value == 'studentadmin'){
	// 		window.localStorage.setItem("Login", "true");
   //    	window.open('../portal/home.html','_self');
	// 	} else {
	// 		window.localStorage.setItem("Login", "true");
   //    	window.open('../alumni/alumnipage.html','_self');
	// 	}
		
	// }

	return 0;
});
