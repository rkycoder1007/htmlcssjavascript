const menu=document.querySelector(".menu");
const navbar=document.querySelector(".navbar");
const search=document.querySelector(".search");
const searchbox=document.querySelector(".searchbox");
const kart=document.querySelector(".kart");
const cart=document.querySelector(".cart");
const userLogin=document.querySelector(".userLogin");
const user=document.querySelector(".user");
const box=document.querySelectorAll(".box");
console.log(userLogin);

menu.addEventListener("click",()=>{
    navbar.classList.toggle("active");
    searchbox.classList.remove("active");
    kart.classList.remove("active");
    userLogin.classList.remove("active");
})
search.addEventListener("click",()=>{
    searchbox.classList.toggle("active");
    navbar.classList.remove("active");
    kart.classList.remove("active");
    userLogin.classList.remove("active");
})
cart.addEventListener("click",()=>{
    kart.classList.toggle("active");
    searchbox.classList.remove("active");
    navbar.classList.remove("active");
    userLogin.classList.remove("active");
})
user.addEventListener("click",()=>{
    userLogin.classList.toggle("active");
    kart.classList.remove("active");
    searchbox.classList.remove("active");
    navbar.classList.remove("active");
})

//Initialize Swiper 
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop:true,
  //  autoplay:{
  //     delay:5000,
  // disableOnInteraction:false,
  //  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1020: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
// box.forEach((boxes)=>{
//   boxes.addEventListener("mouseenter",()=>{
//     swiper.autoplay.stop();
//   })
// })