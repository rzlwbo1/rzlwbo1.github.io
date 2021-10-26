const menus = document.querySelector(".menus");
const navExpand = document.querySelector(".nav-items");

// menus.addEventListener("click", function(evt) {
//   navExpand.classList.toggle("open");
// })

$(document).ready(function(){

  $(".menus").click(function() {
    if(menus.children[0].classList.contains('active')) {
      menus.children[0].classList.remove('active')
      menus.children[1].classList.add('active')
    }else {
      menus.children[0].classList.add('active')
      menus.children[1].classList.remove('active')
    }
    $(".nav-items").slideToggle('slow');
  })

});

console.log(menus.children[0].classList.contains('active'));