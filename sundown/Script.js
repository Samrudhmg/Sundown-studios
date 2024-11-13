// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });



function photofetch(){
    var a = document.querySelector(".elem-container");
var fixed = document.querySelector(".fixed-image");
a.addEventListener("mouseenter", function () {
  fixed.style.display = "block";
});
a.addEventListener("mouseleave", function () {
  fixed.style.display = "none";
});

var elems = document.querySelectorAll(".elem");
elems.forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    var image = e.getAttribute("data-image");
    fixed.style.backgroundImage = `url(${image})`;
  });
});
}photofetch()






function swiperanimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
}swiperanimation()




var menu=document.querySelector(".menu")
var dropdown= document.querySelector(".menu-dropdown")
var flip = 0
menu.addEventListener("click",function(){
    dropdown.style.top=0
        // if(flip=0){
        //     top=0
        //     flip=1
        // }else{
        //     top="-100%"
        //     flip=0
        // }
})

var loader= document.querySelector(".loader")
setTimeout(function(){
    loader.style.top='-100%'
},2500)