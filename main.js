console.log("JavaScript is working!")



//SwiperJS
// Code take from: codesandbox.io/p/sandbox/v648cl?file=%2Findex.html%3A80%2C4-92%2C8
 var swiper = new Swiper(".optionSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".reviewSwiper", {
    effect: "coverflow",
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
    delay:5000,
    disableOnInteraction: false,
    },
    coverflowEffect: {
        slideShadows: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});

