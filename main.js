console.log("JavaScript is working!")
//Fragrance Selection 
let productName = document.querySelector('.productname');
let productPrice = document.querySelector('.productprice');
let starRating = document.querySelector('.star-ratings');
let reviewNumber = document.querySelector('.reviewnumber');
let longevityScale = document.querySelector('.longevityscale');
let sillageScale = document.querySelector('.sillagescale');

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

const newPageInfo = ['A New Page','4.5', '(4.5)',
    '../image/pearnote.png','Pear',
    '../image/bergamotnote.png', 'Bergamot',
    '../image/teanote.png', 'Green Tea',
    '../image/woodnote.png', 'Rosewood',
    '../image/ambernote.png', 'Amber',
    '8','4'
]

newPageButton.addEventListener('click', ()=>{
    changeInfo(newPageInfo);
    selectOptions[0].classList.add('selected');
    [1, 2, 3, 4].forEach(i => selectOptions[i].classList.remove('selected'));
})

//For One More Day -Fragrance Info
const oneDayInfo = ['For One More Day','5', '(5.0)',
    '../image/fignote.png','Fig',
    '../image/bergamotnote.png', 'Bergamot',
    '../image/woodnote.png', 'Cedarwood',
    '../image/sandalwoodnote.png', 'Sandalwood',
    '../image/musknote.png', 'Musk',
    '5','3'
]

oneDayButton.addEventListener('click', ()=>{
    changeInfo(oneDayInfo);
    selectOptions[1].classList.add('selected');
    [0, 2, 3, 4].forEach(i => selectOptions[i].classList.remove('selected'));
    
})

//Bare Hands, Soft Petals -Fragrance Info
const softPetalsInfo = ['Bare Hands, Soft Petals','4', '(4.0)',
    '../image/rosenote.png','Turkish Rose',
    '../image/applenote.png', 'Green Apple',
    '../image/jasminenote.png', 'Jasmine',
    '../image/woodnote.png', 'Cedarwood',
    '../image/musknote.png', 'Musk',
    '4','2'
]

softPetalsButton.addEventListener('click', ()=>{
    changeInfo(softPetalsInfo);
    selectOptions[2].classList.add('selected');
    [0, 1, 3, 4].forEach(i => selectOptions[i].classList.remove('selected'));
    
})

//Where Time Slows -Fragrance Info
const timeSlowsInfo = ['Where Time Slows','4', '(4.0)',
    '../image/teanote.png','Green Tea',
    '../image/bergamotnote.png', 'Bergamot',
    '../image/jasminenote.png', 'Jasmine',
    '../image/ambernote.png', 'Amber',
    '../image/woodnote.png', 'Cedarwood',
    '8','5'
]

timeSlowsButton.addEventListener('click', ()=>{
    changeInfo(timeSlowsInfo);
    selectOptions[3].classList.add('selected');
    [0, 1, 2, 4].forEach(i => selectOptions[i].classList.remove('selected'));
    
})

//Between the Branches -Fragrance Info
const betweenBranchesInfo = ['Between the Branches', '4.5', '(4.5)',
    '../image/woodnote.png','Cedarwood',
    '../image/sandalwoodnote.png', 'Sandalwood',
    '../image/spicenote.png', 'Soft Spices',
    '../image/ambernote.png', 'Amber',
    '../image/musknote.png', 'Musk',
    '9','5'
]

betweenBranchesButton.addEventListener('click', ()=>{
    changeInfo(betweenBranchesInfo);
    selectOptions[4].classList.add('selected');
    [0, 1, 2, 3].forEach(i => selectOptions[i].classList.remove('selected'));
})



// Changing product information 
function changeInfo(productDisplay){
    productName.innerHTML = productDisplay[0];
    starRating.value = productDisplay[1];
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
    longevityScale.value = productDisplay[13];
    sillageScale.value = productDisplay[14];
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

//GSAP
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin);
  
  /* Jumping to section scroll animation
  - https://codepen.io/GreenSock/pen/abdNRxX */
  const sections = document.querySelectorAll("section");
  
  const scrolling = {
        enabled: true,
        events: "scroll,wheel,touchmove,pointermove".split(","),
        prevent: e => e.preventDefault(),
        disable() {
            if (scrolling.enabled) {
                scrolling.enabled = false;
                window.addEventListener("scroll", gsap.ticker.tick, {passive: true});
                scrolling.events.forEach((e, i) => (i ? document : window).addEventListener(e, scrolling.prevent, {passive: false}));
            }
        },
        enable() {
            if (!scrolling.enabled) {
                scrolling.enabled = true;
                window.removeEventListener("scroll", gsap.ticker.tick);
                scrolling.events.forEach((e, i) => (i ? document : window).removeEventListener(e, scrolling.prevent));
            }
        }
    };


    function goToSection(section, anim, i) {
        if (scrolling.enabled) { // skip if a scroll tween is in progress
            scrolling.disable();
            gsap.to(window, {
                scrollTo: {y: section, autoKill: false},
                onComplete: scrolling.enable,
                duration: 1
            });
            anim && anim.restart();
        }
    }

    sections.forEach((section, i) => {
        const intoAnim = gsap.from(section.querySelector(".locationinfo"), {yPercent: 50 ,duration: 1.25, paused: true});
  
        ScrollTrigger.create({
            trigger: section,
            start: "top bottom-=1",
            end: "bottom top+=1",
            onEnter: () => goToSection(section, intoAnim),
            onEnterBack: () => goToSection(section),
            
        });
    });



gsap.set("#infoleft-path", { opacity: 1 });
gsap.set("#motionpath", { autoAlpha: 1 });
gsap.set("#pathdot-left", { transformOrigin: "50% 50%" });


const pathH = document.querySelector("#motionpath-horizontal");
const pathV = document.querySelector("#motionpath-vertical");
const pathHLength = pathH.getTotalLength();
const pathVLength = pathV.getTotalLength();
const totalPathLength = pathHLength + pathVLength;

// Hide paths
gsap.set("#motionpath-horizontal", {
  strokeDasharray: pathHLength,
  strokeDashoffset: pathHLength
});
gsap.set("#motionpath-vertical", {
  strokeDasharray: pathVLength,
  strokeDashoffset: pathVLength
});


const dotAnimation = gsap.timeline({ paused: true });

// master tween controls total progress (eased)
dotAnimation.to({ progress: 0 }, {
  progress: 1,
  duration: 2,
  ease: "power2.inOut",
  onUpdate: function () {
    const p = this.targets()[0].progress;

    
    const hProgress = Math.min(p * totalPathLength / pathHLength, 1);
    gsap.set("#motionpath-horizontal", {
      strokeDashoffset: pathHLength * (1 - Math.min(hProgress, 1))
    });

    
    if (p * totalPathLength > pathHLength) {
      const vProgress = (p * totalPathLength - pathHLength) / pathVLength;
      gsap.set("#motionpath-vertical", {
        strokeDashoffset: pathVLength * (1 - Math.min(vProgress, 1))
      });
    }

    
    gsap.set("#pathdot-left", {
      motionPath: {
        path: "#motionpath",
        align: "#motionpath",
        alignOrigin: [0.5, 0.5],
        autoRotate: false,
        start: 0,
        end: p
      }
    });
  }
});

let infoLeft = document.querySelector('#info-left')


document.querySelector("#pathdot-left").addEventListener("click", () => {
  dotAnimation.restart();
  setTimeout(() => {
    infoLeft.style.display = 'flex';
  },2000);
});

   
});

