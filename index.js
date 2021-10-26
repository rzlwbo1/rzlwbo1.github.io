// const menus = document.querySelector(".menus");
// const navExpand = document.querySelector(".nav-items");

// menus.addEventListener("click", function(evt) {
//   navExpand.classList.toggle("open");
// })

$(document).ready(function(){

  $(".menus").click(function() {
    $(".nav-items").slideToggle('slow')
  })

});