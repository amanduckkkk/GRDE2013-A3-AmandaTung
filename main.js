console.log("JavaScript is working!")
//Fragrance Selection 
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


let newPageButton = document.querySelector('.newpage-chart');
let oneDayButton = document.querySelector('.oneday-chart');
let softPetalsButton = document.querySelector('.softpetals-chart');
let timeSlowsButton = document.querySelector('.timeslows-chart');
let betweenBranchesButton = document.querySelector('.betweenbranches-chart');

//A New Page -Fragrance Info
let selectOptions = [newPageButton, oneDayButton, softPetalsButton, timeSlowsButton, betweenBranchesButton];

const newPageInfo = ['A New Page', starRating.value = '4.5', '(4.5)',
    '../image/pearnote.png','Pear',
    '../image/bergamotnote.png', 'Bergamot',
    '../image/teanote.png', 'Green Tea',
    '../image/woodnote.png', 'Rosewood',
    '../image/ambernote.png', 'Amber'
]

newPageButton.addEventListener('click', ()=>{
    changeInfo(newPageInfo);
    selectOptions[0].classList.add('selected');
    [1, 2, 3, 4].forEach(i => selectOptions[i].classList.remove('selected'));
})

//For One More Day -Fragrance Info
const oneDayInfo = ['For One More Day', starRating.value = '5', '(5.0)',
    '../image/fignote.png','Fig',
    '../image/bergamotnote.png', 'Bergamot',
    '../image/woodnote.png', 'Cedarwood',
    '../image/sandalwoodnote.png', 'Sandalwood',
    '../image/musknote.png', 'Musk'
]

oneDayButton.addEventListener('click', ()=>{
    changeInfo(oneDayInfo);
    selectOptions[1].classList.add('selected');
    [0, 2, 3, 4].forEach(i => selectOptions[i].classList.remove('selected'));
    
})

//Bare Hands, Soft Petals -Fragrance Info
const softPetalsInfo = ['Bare Hands, Soft Petals', starRating.value = '4', '(4.0)',
    '../image/rosenote.png','Turkish Rose',
    '../image/applenote.png', 'Green Apple',
    '../image/jasminenote.png', 'Jasmine',
    '../image/woodnote.png', 'Cedarwood',
    '../image/musknote.png', 'Musk'
]

softPetalsButton.addEventListener('click', ()=>{
    changeInfo(softPetalsInfo);
    selectOptions[2].classList.add('selected');
    [0, 1, 3, 4].forEach(i => selectOptions[i].classList.remove('selected'));
    
})

//Where Time Slows -Fragrance Info
const timeSlowsInfo = ['Where Time Slows',starRating.value = '4', '(4.0)',
    '../image/teanote.png','Green Tea',
    '../image/bergamotnote.png', 'Bergamot',
    '../image/jasminenote.png', 'Jasmine',
    '../image/ambernote.png', 'Amber',
    '../image/woodnote.png', 'Cedarwood'
]

timeSlowsButton.addEventListener('click', ()=>{
    changeInfo(timeSlowsInfo);
    selectOptions[3].classList.add('selected');
    [0, 1, 2, 4].forEach(i => selectOptions[i].classList.remove('selected'));
    
})

//Between the Branches -Fragrance Info
const betweenBranchesInfo = ['Between the Branches', starRating.value = '4', '(4.0)',
    '../image/woodnote.png','Cedarwood',
    '../image/sandalwoodnote.png', 'Sandalwood',
    '../image/spicenote.png', 'Soft Spices',
    '../image/ambernote.png', 'Amber',
    '../image/musknote.png', 'Musk'
]

betweenBranchesButton.addEventListener('click', ()=>{
    changeInfo(betweenBranchesInfo);
    selectOptions[4].classList.add('selected');
    [0, 1, 2, 3].forEach(i => selectOptions[i].classList.remove('selected'));
})



// Changing product information 
function changeInfo(productDisplay){
    productName.innerHTML = productDisplay[0];
    starRating.innerHTML = productDisplay[1];
    reviewNumber.innerHTML = productDisplay[2];
    noteOne.setAttribute('src',productDisplay[3]);
    noteOneName.innerHTML = productDisplay[4];
    noteTwo.setAttribute('src',productDisplay[5]);
    noteTwoName.innerHTML = productDisplay[6];
    noteThree.setAttribute('src',productDisplay[7]);
    noteThreeName.innerHTML = productDisplay[8];
    noteFour.setAttribute('src',productDisplay[9]);
    noteFourName.innerHTML = productDisplay[10];
    noteFive.setAttribute('src',productDisplay[11]);
    noteFiveName.innerHTML = productDisplay[12];
}

let twentyMlPrice = '$ 45.00'
let fiftyMlPrice = '$ 70.00'

function changePrice(priceDisplay){
    productPrice.innerHTML = priceDisplay
}

let twentyMlButton = document.querySelector('.twentyml');
twentyMlButton.addEventListener('click', ()=>{
    changePrice(twentyMlPrice);
    twentyMlButton.style.backgroundColor = '#DA4637';
    twentyMlButton.style.color = '#FFFFFF';
    twentyMlButton.style.border = '#952216, solid, 2px';
    fiftyMlButton.style.color = '#403831'
    fiftyMlButton.style.backgroundColor = '#FFFFFF'
    fiftyMlButton.style.border = 'none';
})

let fiftyMlButton = document.querySelector('.fiftyml');
fiftyMlButton.addEventListener('click', ()=>{
    changePrice(fiftyMlPrice);
    fiftyMlButton.style.backgroundColor = '#DA4637';
    fiftyMlButton.style.color = '#FFFFFF';
    fiftyMlButton.style.border = '#952216, solid, 2px';
    twentyMlButton.style.color = '#403831';
    twentyMlButton.style.backgroundColor = '#FFFFFF';
    twentyMlButton.style.border = 'none';
})

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

