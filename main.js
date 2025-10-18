console.log("JavaScript is working!")

let productName = document.querySelector('.productname');
let productPrice = document.querySelector('.productprice');
let starRating = document.querySelector('.star-ratings');
let reviewNumber = document.querySelector('.reviewnumber');

let noteOne = document.querySelector('.noteoneimg');
let noteOneName = document.querySelector('.one');
let noteTwo = document.querySelector('.notetwoimg');
let noteTwoName = document.querySelector('.two');
let noteThree = document.querySelector('.notethreeimg');
let noteThreeName = document.querySelector('.three');
let noteFour = document.querySelector('.notefourimg');
let noteFourName = document.querySelector('.four');
let noteFive = document.querySelector('.notefiveimg');
let noteFiveName = document.querySelector('.five');



const newPageInfo = ['A New Page','$45.00', starRating.value = '4.5', '(4.5)',
    '../image/pearnote.png','Pear',
    '../image/bergamotnote.png', 'Bergamot',
    '../image/teanote.png', 'Green Tea',
    '../image/woodnote.png', 'Rosewood',
    '../image/ambernote.png', 'Amber'
]
let newPageButton = document.querySelector('.newpage-chart');
newPageButton.addEventListener('click', ()=>{
    changeInfo(newPageInfo);
})

function changeInfo(productDisplay){
    productName.innerHTML = productDisplay[0];
    productPrice.innerHTML = productDisplay[1];
    starRating.innerHTML = productDisplay[2];
    reviewNumber.innerHTML = productDisplay[3];
    noteOne.setAttribute('src',productDisplay[4]);
    noteOneName.innerHTML = productDisplay[5];
    noteTwo.setAttribute('src',productDisplay[6]);
    noteTwoName.innerHTML = productDisplay[7];
    noteThree.setAttribute('src',productDisplay[8]);
    noteThreeName.innerHTML = productDisplay[9];
    noteFour.setAttribute('src',productDisplay[10]);
    noteFourName.innerHTML = productDisplay[11];
    noteFive.setAttribute('src',productDisplay[12]);
    noteFiveName.innerHTML = productDisplay[13];
}






//Changing icon to circle on Shoelace
document.querySelector('.sillagescale').getSymbol = () => '<sl-icon name="circle-fill"></sl-icon>';
document.querySelector('.longevityscale').getSymbol = () => '<sl-icon name="circle-fill"></sl-icon>';


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

