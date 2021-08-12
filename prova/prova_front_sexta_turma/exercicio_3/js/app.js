$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        autoWidth: true,
        nav: true
    });
  });

let menuHeader = document.querySelectorAll('.menu-header');

for(let i=0; i<menuHeader.length;i++){
    menuHeader[i].textContent = "Item nav "+(i+1);
}