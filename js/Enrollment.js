

// document.getElementById("addClass").addEventListener("click", function() {
//    event.preventDefault()
//    var subjects = [];
//    var output = ''

//    let subj = document.getElementById("subjectList").value
//    if(subj !== ''){
//       subjects.push(subj);
//    }

//    for(let i in subjects){
//       output += "<tr>"
//          + "<td>" + subj + "</td>" 
//          + "<td><button class='delete-item btn btn-danger' data-name=" + subj + ">X</button></td>"
//          + "</tr>";
//    }
//    $('.display-class').html(output);

//    alert(subjects)


   

// });

var subjects = []
const addClass = (event) => {
   event.preventDefault();
   let subj = document.getElementById("subjectList").value
   
   if (subj !== '') {
      subjects.push(subj)
   }

   localStorage.setItem(`subjects`, JSON.stringify(subjects));

   let arr = new Array();

   arr = JSON.parse(localStorage.getItem("subjects"));
   
   let table = document.getElementById('display-class');
   let row = table.insertRow();
   let cell1= row.insertCell();
   let cell2 = row.insertCell();

   if (arr.length > 0) {
      for (let i in arr) {
         cell1.innerHTML = arr[i]
         cell2.innerHTML = `<button class='delete-item btn btn-danger' id="deleteClass()" data-name=" + arr[i] + ">
         <i class="far fa-trash-alt"></i></button>`   
      }
   }
}

document.addEventListener('DOMContentLoaded', () => {
   document.getElementById('addClass').addEventListener('click', addClass)
   // document.getElementById('deleteClass').addEventListener('click', deleteClass)
})

// function
// alert(subjects)
// const deleteClass() => {
//    arr = JSON.parse(localStorage.getItem("subjects"));
//    var name = $(this).data('name')
//    for(var i in arr) {
//       if(arr[i] === name) {
//         arr.splice(i, 1);
//         break;
//       }
//    }
//    sessionStorage.setItem('subjects', JSON.stringify(subjects));
// }

$('.display-class').on("click", ".delete-item", function(event) {
   event.preventDefault();
   // localStorage.getItem(`subjects`, JSON.stringify(subjects));
   arr = JSON.parse(localStorage.getItem("subjects"));
   var name = $(this).data('name')
   // alert(name)

   for(var i in arr) {
      if(arr[i] === name) {
        arr.splice(i, 1);
        break;
      }
   }
   sessionStorage.setItem('subjects', JSON.stringify(subjects));
})

// obj.removeItemFromCart = function(name) {
//    for(var item in cart) {
//      if(cart[item].name === name) {
//        cart[item].count --;
//        if(cart[item].count === 0) {
//          cart.splice(item, 1);
//        }
//        break;
//      }
//  }
//  saveCart();
// }

// obj.removeItemFromCartAll = function(name) {
//    for(var item in cart) {
//      if(cart[item].name === name) {
//        cart.splice(item, 1);
//        break;
//      }
//    }
//    saveCart();
//  }
 
 