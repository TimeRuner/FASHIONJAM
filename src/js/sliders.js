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
                active(i);
            }else{
                remove();
                activeWhite(i);
            }
         }) 
     });
   
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
    function active(index){
        removePacive('.container__img',index);
        removePacive('.container__text',index);
    }
    function removePacive (item, num){
        $(item).each(function(i){
            if(i< num){
                $(item).eq(i).removeClass('pasiveLeft');
                $(item).eq(i).removeClass('pasiveRight');
            }
        })
    }
    $('a[href*=#]').bind('click', function(e) {
            e.preventDefault();
            let target = $(this).attr("href");
            $('html, body').stop().animate({ scrollTop: $(target).offset().top}, 1000, function() {
            location.hash = target;
        }); 
            return false;
        });
    
    $(window).scroll(function(){
        if($(this).scrollTop()>=300){
            $('.container__text').eq(0).removeClass('pasiveLeft');
            $('.container__img').eq(0).removeClass('pasiveRight');
        }
        if($(this).scrollTop()<500){
            remove();
            $('.dots__item').eq(0).addClass('activeWhite');
        }
        else if($(this).scrollTop()>=500 && $(this).scrollTop()<1100){
            remove();
            $('.dots__item').eq(1).addClass('activeBlack');
        }else if($(this).scrollTop()>=1100 && $(this).scrollTop()< 1800){
            remove();
            $('.dots__item').eq(2).addClass('activeBlack');
            $('.container__text').eq(1).removeClass('pasiveRight');
            $('.container__img').eq(1).removeClass('pasiveLeft');
        } else if ($(this).scrollTop()>=1800 && $(this).scrollTop()< 2600){
            remove();
            $('.dots__item').eq(3).addClass('activeBlack');
            $('.container__text').eq(2).removeClass('pasiveLeft');
            $('.container__img').eq(2).removeClass('pasiveRight');
        }else{
            remove();
            $('.dots__item').eq(4).addClass('activeWhite');
        }
        if( $(this).scrollTop()>=500 && $(this).scrollTop()<=2600 ){
            $('.dots__item').each(function(i){
                $('.dots__item').eq(i).addClass('blackBg');
            })
        }else{
            $('.dots__item').each(function(i){
                $('.dots__item').eq(i).removeClass('blackBg');
            })
        }

    });
    function remove(){
        $('.dots__item').each(function(i){
            $('.dots__item').eq(i).removeClass('activeBlack');
            $('.dots__item').eq(i).removeClass('activeWhite');
        })
    }
});






