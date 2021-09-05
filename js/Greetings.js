window.onload = function getDate() {
   let today = new Date();
   const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
   const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
   let day = days[today.getDay()]
   let date = months[today.getMonth()] + " " + today.getDate() + ', ' + today.getFullYear()
   // today = today.split(' ').slice(0, 4).join(' ');
   // let date = today.getFullYear() + '-' + (today.getMonth() + 1 < 10 ? `0${today.getMonth()+1}` : today
   //     .getMonth() + 1) + '-' + today.getDate();
   let time = (today.getHours() < 10 ? `0${today.getHours()}` : today.getHours()) + ":" + (today.getMinutes() <
       10 ? `0${today.getMinutes()}` : today.getMinutes()) + ":" + (today.getSeconds() < 10 ?
       `0${today.getSeconds()}` : today.getSeconds());
   let hourTime = today.getHours();
   let greetings = "Hello";
   // IF-Else Statement

   if (hourTime >= 00 && hourTime <= 10) {
       greetings = 'Good Morning';
   } else if (hourTime >= 11 && hourTime <= 18) {
       greetings = 'Good Afternoon';
   } else if (hourTime >= 19 && hourTime <= 24) {
       greetings = "Good Evening";
   }

   document.getElementById("dateToday").value = `${greetings}! today is ${day}, ${date}`
   // console.log(today);
   var announcements = JSON.parse(localStorage.getItem("classAnnouncements"))
   if(announcements != '') {
      document.getElementById("announcement-text").innerHTML = announcements;
   } 
}