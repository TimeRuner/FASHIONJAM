const buttons = document.querySelector('.nav');
const slideContainer = document.querySelector('.welcome__main');
const bgArr = [
    'img/first/firstSlide.png',
    'img/first/lastSlide.png'
]
let sliderIndex = 1;

(function showAutoBg(){
	sliderIndex += 1;
	checkBgArrLength(sliderIndex);
    changeBg(sliderIndex);
    setTimeout(showAutoBg, 4000);
}());

buttons.addEventListener('click', clikedSlideBtn);
function clikedSlideBtn({target}){
    if(target.classList.contains('left')||target.classList.contains('leftImg')){
        sliderIndex--;
    } else if (target.classList.contains('right')||target.classList.contains('rightImg')){
        sliderIndex++;
    }
    checkBgArrLength(sliderIndex);
    changeBg(sliderIndex);
}
function checkBgArrLength(index){
    const lastElement = bgArr.length-1;
    return sliderIndex = index < 0 ? lastElement : index > lastElement ? 0 : index;
}
function changeBg(indexImg){
    slideContainer.style.backgroundImage = 'url(' + bgArr[indexImg] + ')';
}


$(document).ready(function() {
    $('.dots__item').each(function(i){
         $(this).on('click', function(e){
            e.preventDefault();
            if(i > 0 && i < 4){
                remove();
                activeBlack(i);
            }else{
                remove();
                activeWhite(i);
            }
         }) 
     });
    function remove(){
        $('.dots__item').each(function(i){
            $('.dots__item').eq(i).removeClass('activeBlack');
            $('.dots__item').eq(i).removeClass('activeWhite');
        })
    }
    function activeBlack(index){
        $('.dots__item').each(function(i){
            $('.dots__item').eq(i).addClass('blackBg');
        })
        $('.dots__item').eq(index).addClass('activeBlack');
    }
    function activeWhite(index){
        $('.dots__item').each(function(i){
            $('.dots__item').eq(i).removeClass('blackBg');
        })
        $('.dots__item').eq(index).addClass('activeWhite');
    }
    $('a[href*=#]').bind('click', function(e) {
            e.preventDefault();
            let target = $(this).attr("href");
            $('html, body').stop().animate({ scrollTop: $(target).offset().top}, 1000, function() {
            location.hash = target;
        }); 
            return false;
        });

        
});






// const slides = document.querySelectorAll('.sliderContainer_item');
// const dots = document.querySelector('.sliderContainer_dotsContainer');
// const dotsArea = document.querySelectorAll('.sliderContainer_element');
// const firstSlide = document.querySelector('.firstSlide_main');
// const sliderContainer = document.querySelector('.sliderContainer');
// const header = document.querySelector('.header');
// const sectionFive = document.querySelector('.sectionFive');

// let slideIndex = 0;
// let imgBgIndex = 0;
// let wheelBottom = 0;
// let wheelTop = 0;
// let interval = 5000;
// let currentImg = 1;


// if (sliderContainer.addEventListener) {
//     if ('onwheel' in document) {
//       // IE9+, FF17+
//       sliderContainer.addEventListener("wheel", wheelingSlider);
//     } else if ('onmousewheel' in document) {
//       // устаревший вариант события
//       sliderContainer.addEventListener("mousewheel", wheelingSlider);
//     } else {
//       // Firefox < 17
//       sliderContainer.addEventListener("MozMousePixelScroll", wheelingSlider);
//     }
//   } else { // IE8-
//     sliderContainer.attachEvent("onmousewheel", wheelingSlider);
//   }



// dots.addEventListener('click', dotsSelect);          
// function showSlides(n){
//     correctSlideLength(n);
//     removeStyles();
//     addCurrentStyles(slideIndex);
// }
// function currentSlide (n){
//     showSlides(slideIndex = n);
// }
// function wheelSlide(n){
//     showSlides(slideIndex+=n);
// }

// function correctSlideLength(number){
//     const lastSlide = slides.length-1;
//     return slideIndex = number < 0 ? 0 : number > lastSlide ? lastSlide : number;
// }

// function addCurrentStyles(slideIndex){
//     switch(slideIndex){
//         case 0:
//             slides[slideIndex].classList.add('tranformTop');
//             dotsArea[slideIndex].classList.add('dotsActiveWhite');
//             dots.classList.add('dotsActiveFirst');
//             break;
//         case 4:
//             slides[slideIndex].classList.add('tranformTop');
//             dotsArea[slideIndex].classList.add('dotsActiveWhite');
//             break;
//         default:
//             slides[slideIndex].classList.add('tranformTop');
//             dotsArea[slideIndex].classList.add('dotsActiveBlack');
//             break;

//     }
// }
// function removeStyles(){
//     if(dots.matches('.dotsActiveFirst')){ dots.classList.remove('dotsActiveFirst');}
//     for(let i=0; i<slides.length; i++){
//         slides[i].classList.remove('tranformTop');
//     }
//     for(let i=0;i<dotsArea.length;i++){
//         if(i===0||i===4){
//             dotsArea[i].classList.remove('dotsActiveWhite');
//         }
//         else{dotsArea[i].classList.remove('dotsActiveBlack');}
//     }

// }
// function dotsSelect({target}){
//     for(let i = 0; i < dotsArea.length+1; i++){
//         if(target.classList.contains('sliderContainer_element')&&target==dotsArea[i]){
//             currentSlide(i);
//         }
//     }
// }




// function wheelingSlider(e){
//     if(e.deltaY<0){
//         wheelBottom = 0;
//         wheelTop += e.deltaY;
//         header.classList.remove('displayNone');
//         firstSlide.classList.remove('smolerHeight');
//         if(wheelTop<-200){
//             if(slideIndex<5){e.preventDefault();}
//             toTop(wheelTop);
//         }
        
//     }else {
//         wheelTop = 0;
//         wheelBottom += e.deltaY;
//         if(wheelBottom>200){
//             header.classList.add('displayNone');
//             firstSlide.classList.add('smolerHeight');
//         }
//         if(wheelBottom<3500){
//             if(slideIndex<5){e.preventDefault();}
//             toBottom(wheelBottom);
//         }
//     }
// }
// function toBottom(toBottom){
//     if(toBottom%500===0){
//         wheelSlide(1);
//     }
// }
// function toTop(toTop){
//     if(toTop%500===0){
//         wheelSlide(-1);
//     }
// }

// (function showAutoBg(){
// 	currentImg += 1;
// 	checkCurrentImg();
//     positionLastSlideBg(currentImg);
//     setTimeout(showAutoBg, interval);
   
// }());

// function positionLastSlideBg(current){
//     sectionFive.style.backgroundImage = 'url(' + lastSlideBgImg[current] + ')';
//     correctWhiteBgDots(current);
//     switch(current){
//         case 1:
//             sectionFive.style.backgroundPositionY = '-270px';  
//             break;   
//         default:
//             sectionFive.style.backgroundPositionY = '0';
//             break;       
//     }
// }
// function correctWhiteBgDots(value){
//     if(value===1){
//         for(let i = 0; i<dotsArea.length; i++){
//             dotsArea[i].classList.add('dotsWhiteBg');
//         }
//     }else{
//         for(let i = 0; i<dotsArea.length; i++){
//             dotsArea[i].classList.remove('dotsWhiteBg');
//         }
//     }
// }
// function checkCurrentImg(){
//     if (currentImg > lastSlideBgImg.length-1) {
// 		currentImg = 0;
//     }
//     return currentImg;
// }