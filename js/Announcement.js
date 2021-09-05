function newAnnouncement() {
   var announceData = []
   var announcement = prompt("Create a new class announcement")
   
   if (announcement != null) {
      document.getElementById("announcement-text").innerHTML = announcement;
      // announceData.push(announcement)
      // const announcementData = JSON.stringify(announceData);
      // localStorage.setItem("Announcements", announcementData)
      announceData.push(announcement)
      const classAnnouncements = JSON.stringify(announceData);
      localStorage.setItem("classAnnouncements", classAnnouncements)
   }
}

function deleteAnnouncement() {
   localStorage.removeItem('classAnnouncements')
   document.getElementById("announcement-text").value = ''
   location.reload()
   // if (document.getElementById("announcement-text").value != '') {
   //    
   // } else {
   //    document.getElementById("announcement-text").value = ''
   // }

}

// window.onload = function announcementChecker() {
//    var announcements = JSON.parse(localStorage.getItem("classAnnouncements"))
//    alert(announcements)
//    if(announcements != '') {
//       document.getElementById("announcement-text").innerHTML = announcements;
//    } 
// }
// var announcements = JSON.parse(localStorage.getItem("data"));
// document.getElementById("result1").innerHTML = odser;