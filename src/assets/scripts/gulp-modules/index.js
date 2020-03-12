/**глобальная переменная для переключение экранов */
let screenNumber = 1,
    screensCount = document.querySelectorAll('.screen-js').length;
$layout = document.querySelector('.first-screen-layout'),
    $staticBottomBlock = document.querySelector('.bottom-static-block'),
    screenList = document.querySelectorAll('.screen-js');

/**For touch detection */
let startCord = 0,
    endCord = 0;
direction = 'none';





$layout.addEventListener('wheel', function(e) {
    let stopDetector = false;
    // e.path.forEach(path => {
    //     if (path.id == 'map') {
    //         stopDetector = true;
    //     }
    // });
    // if (stopDetector == true) return false;
    // console.log(e.path[4].name);
    // console.log(e.path.includes('div#map'));


    e.deltaY > 0 ?
        changeCounter(screenNumber, '+') :
        changeCounter(screenNumber, '-');
    screenList.forEach(element => {
        element.dataset.active = false;
    });
    screenList[screenNumber - 1].dataset.active = true;
    $layout.dataset.screen = screenNumber;
    $staticBottomBlock.dataset.screen = screenNumber;
    console.log(screensCount);

    e.preventDefault();
});
getTouchDirection($layout);
$layout.addEventListener('touchend', (e) => {
    switch (direction) {
        case 'up':
            changeCounter(screenNumber, '+');
            break;
        case 'down':
            changeCounter(screenNumber, '-');
            break;
        default:
            break;
    }
    screenList.forEach(element => {
        element.dataset.active = false;
    });
    screenList[screenNumber - 1].dataset.active = true;
    $layout.dataset.screen = screenNumber;
    $staticBottomBlock.dataset.screen = screenNumber;
    console.log(screensCount);
})

function changeCounter(number, direction) {

    switch (direction) {
        case '+':
            number == screensCount ?
                null :
                screenNumber++;
            break;
        case '-':
            number == 1 ?
                null :
                screenNumber--;
            break;
        default:
            break;
    }
}

/* slider screen 3*/
$('.screen3__slider').on('init', function(event, slick) {
    $('.screen3-arrow-container .all').html('0' + $('.screen3__slide').length);
    $('.screen3-arrow-container .current').html('01');
});
let screen3Slider = $('.screen3__slider').slick({
    slide: '.screen3__slide',
    infinity: false,
    fade: true,
    nextArrow: $('.screen3-arrow-container .next'),
    prevArrow: $('.screen3-arrow-container .previous'),

});
screen3Slider.on('beforeChange', (event, slick, currentSlide, nextSlide) => {
    $('.screen3-arrow-container .current').html('0' + (nextSlide + 1));
});
/* slider screen 3 END*/

// $.mask.definitions['#'] = '[0-9]';
// $.mask.definitions['9'] = '';
// $('input[name="phone"]').mask("+(38) ### ###-##-##", {
//     placeholder: "_"
// });

// $('input[name="phone"]').mask('(000) 000-0000', {
//     placeholder: "_"
// });

/* slider screen 4*/
$('.screen4-slider').on('init', function(event, slick) {
    $('.screen4-slider .all').html('0' + $('.screen4__slide').length);
    $('.screen4-slider .current').html('01');
});
let screen4Slider = $('.screen4-slider').slick({
    slide: '.screen4__slide',
    infinity: false,
    fade: true,
    nextArrow: $('.screen4-slider .arrow-next-std'),
    prevArrow: $('.screen4-slider .arrow-prev-std'),

});
screen4Slider.on('beforeChange', (event, slick, currentSlide, nextSlide) => {
    $('.screen4-slider .current').html('0' + (nextSlide + 1));
});
/* slider screen 4END*/





function getTouchDirection(element) {
    // element == undefined ? element = document.body : null;
    element.addEventListener('touchstart', (e) => {
        e.preventDefault();
        startCord = e.changedTouches[0].screenX;

    });
    element.addEventListener('touchend', (e) => {
        e.preventDefault();
        endCord = e.changedTouches[0].screenX;
        if (startCord > endCord) {
            direction = 'down';
        } else if (startCord < endCord) {
            direction = 'up';
        } else {
            direction = '';
        }
    });
};


/*настройка фильтра карты */

let $legendItems = document.querySelectorAll('.legend-items-js>li');

$legendItems.forEach((item, index) => {
        item.onclick = () => {
            item.classList.toggle('selected');
        }
        console.log(item.dataset);


    })
    /*настройка фильтра карты END*/