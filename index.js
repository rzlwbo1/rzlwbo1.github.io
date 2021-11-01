
/// Check width browser
let lebarBrowser = document.body.clientWidth;
if(lebarBrowser > 575.98) {
  Swal.fire({
    title: 'Perhatian!',
    text: 'Versi Desktop / layar Komuter belum maksimal',
    icon: 'warning',
    showConfirmButton: false,
    allowOutsideClick: false
  })
}
console.log(lebar);



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
    $(".nav-items").slideToggle(400);
  })

});

console.log(menus.children[0].classList.contains('active'));


/// tooltips

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))

var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})