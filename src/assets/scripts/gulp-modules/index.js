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



// $(document).ready(function() {
//     $('#pagepiling').pagepiling({
//         sectionSelector: '.section',
//         css3: true,
//         menu: null,
//         direction: 'vertical',
//         verticalCentered: true,
//     });
// });
// let stopDetector = false;
// e.path.forEach(path => {
//     if (path.id == 'map') {
//         stopDetector = true;
//     }
// });
// if (stopDetector == true) return false;
// console.log(e.path[4].name);
// console.log(e.path.includes('div#map'));
// if ($layout.dataset.screen == 10) {
//     console.log(e.target.getBoundingClientRect());

//     return false;
// }
// if ($layout.dataset.screen != 11) {
//     document.querySelector('.footer-block').classList.remove('visible');
// } else {
//     document.querySelector('.footer-block').classList.add('visible');
// }
// if ($layout.dataset.screen == 11) {
//     return false;
// } else {
//     e.preventDefault();
// }
// e.deltaY > 0 ?
//     changeCounter(screenNumber, '+') :
//     changeCounter(screenNumber, '-');
// screenList.forEach(element => {
//     element.dataset.active = false;
// });
// screenList[screenNumber - 1].dataset.active = true;
// $layout.dataset.screen = screenNumber;
// $staticBottomBlock.dataset.screen = screenNumber;
// console.log(screensCount);


// });
// getTouchDirection($layout);
// $layout.addEventListener('touchend', (e) => {
//     switch (direction) {
//         case 'up':
//             changeCounter(screenNumber, '+');
//             break;
//         case 'down':
//             changeCounter(screenNumber, '-');
//             break;
//         default:
//             break;
//     }
//     screenList.forEach(element => {
//         element.dataset.active = false;
//     });
//     screenList[screenNumber - 1].dataset.active = true;
//     $layout.dataset.screen = screenNumber;
//     $staticBottomBlock.dataset.screen = screenNumber;
//     console.log(screensCount);
// })

// function changeCounter(number, direction) {

//     switch (direction) {
//         case '+':
//             number == screensCount ?
//                 null :
//                 screenNumber++;
//             break;
//         case '-':
//             number == 1 ?
//                 null :
//                 screenNumber--;
//             break;
//         default:
//             break;
//     }
// }

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

/**Слайдер с планировками */
$('.screen9__slider-js').on('init', function(event, slick) {
    $('.screen9 .all').html('0' + $('.screen9__slide').length);
    $('.screen9 .current').html('01');
});
$('.screen9__slider-js').slick({
    slide: '.screen9__slide',
    nextArrow: $('.screen9 .arrow-next-std'),
    prevArrow: $('.screen9 .arrow-prev-std'),
    fade: true,
});
$('.screen9__slider-js').on('beforeChange', (event, slick, currentSlide, nextSlide) => {
    $('.screen9 .current').html('0' + (nextSlide + 1));
});
/**Слайдер с планировками END */



/**Слайдер документов */
$('.document-slider-js').slick({
        slidesToShow: 3,
        nextArrow: $('.screen10 .arrow-next-std'),
        prevArrow: $('.screen10 .arrow-prev-std'),
        slide: '.document-item'
    })
    /**Слайдер документов END */
let digit = document.querySelector('.statistic-item__digit'),
    digit1 = document.querySelector('.statistic-item__digit'),
    digitLastNumber = +digit.innerText;
digit.addEventListener('click', () => {
    // increaseAnimation();
});


function increaseAnimation(digit) {
    digit == undefined ? digit = 0 : null;
    digit1.innerHTML = digit;
    digit++;
    console.log(digit);

    if (digit <= digitLastNumber) {
        setTimeout(() => {
            increaseAnimation(digit);
        }, 50);
    } else {
        return;
    }

}

/**POPUP FORM */
let commonForm = new FormCreater('.form-js', {
    fields: [{
        name: 'name',
        label: langObject.name[lang],
        type: 'text',
        requried: true
    }, {
        name: 'telephone',
        label: langObject.telephone[lang],
        type: 'tel',
        customClass: 'inputtelmask',
        requried: true
    }, {
        name: 'time',
        label: langObject.callNow[lang],
        type: 'checkbox',
        customClass: 'checkbox-first',
    }, {
        name: 'time',
        label: langObject.otherTime[lang],
        type: 'checkbox',
        selectItems: ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00']
    }, {
        name: 'typ',
        label: false,
        type: 'hidden',
        hidden: true,
        value: 1,
    }, {
        name: 'metka',
        label: false,
        type: 'hidden',
        hidden: true,
        value: 'Замовити дзвінок - Boston Creative House'
    }, {
        name: 'inn',
        label: false,
        type: 'hidden',
        hidden: true,
        value: 'Boston'
    }, ],
    color: '',
    url: applicationUrl,
    sendButton: {
        innerText: langObject.send[lang],
        customClass: 'button',
    },
    legend: langObject.orderCall[lang],
    subLegend: langObject.formSubLegend[lang],
});
commonForm.init();

document.querySelectorAll('[type="checkbox"]').forEach(checkBox => {
    let customCheckBox = document.createElement('label');
    customCheckBox.classList.add('custom-check-box');
    checkBox.insertAdjacentElement('afterEnd', customCheckBox);
});

document.querySelectorAll('.input-group input[type="text"],.input-group input[type="tel"]')
    .forEach(el => {
        let decorLine = document.createElement('div');
        decorLine.classList.add('decor-line');
        el.insertAdjacentElement('afterEnd', decorLine);
    })
let closeIcon = `<svg width="42" class="close-form" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.3619 11.1173L10.8826 31.5966" stroke="#004445"/>
                <path d="M10.8827 11.1173L31.362 31.5966" stroke="#004445"/>                </svg>`;
document.querySelector('.popup-container .form-js').insertAdjacentHTML('beforeEnd', closeIcon);
document.querySelector('.popup-form-js').onclick = e => {
    document.querySelector('.popup-container').classList.add('visible');
    document.querySelector('.popup-container .form-js').classList.add('clip-effect');
};

document.querySelector('.popup-container').onclick = e => {
    if (e.target.classList.contains('close-form') ||
        e.target.classList.contains('popup-container')) {
        document.querySelector('.popup-container').classList.remove('visible');
        document.querySelector('.popup-container .form-js').classList.remove('clip-effect');
    }
}

/**POPUP FORM END */


/**MENU and SECTION SCROLL */
let colorObject = {
        yellow_green: {
            active_color: "green",
            innactive_color: 'yellow'
        },
        white_yellow: {
            active_color: "yellow",
            innactive_color: 'white'
        },
        white_green: {
            active_color: "green",
            innactive_color: 'white'
        },

    }
    /**MENU and SECTION SCROLL END */
let $menuItemList = document.querySelectorAll('.aside-menu__item');
$.scrollify({
    section: ".section",
    scrollSpeed: 2000,
    offset: 0,
    easing: "easeOutExpo",
    setHeights: true,
    updateHash: true,
    touchScroll: true,
    standardScrollElements: '.screen10__content',
    scrollbars: true,
    before: function(e, r) {
        // e == 8 ? $.scrollify.disable() : null;
        menuItemSwitch(e, r);
        console.log(e, r);
        $layout.dataset.screen = e + 1;
        $staticBottomBlock.dataset.screen = e + 1;
        $layout.style.backgroundPositionY = `${e*100}vh`;
        $layout.style.backgroundSize = `100vw 110vh`;
    },
    after: function(e, r) {

    },
    overflowScroll: false
});

let menuArrow = document.querySelectorAll('.menu-arrow-js'),
    menuItem = document.querySelectorAll('.menu-item-js');
menuItem.forEach((element, index) => {
    element.addEventListener('click', () => {
        let dataName = element.dataset.name
        element.classList.add('current');
        $.scrollify.move(`#${dataName}`);
    })
});
menuArrow.forEach(element => {
    element.addEventListener('click', () => {
        console.log(element);
        if (element.classList.contains('aside-menu__arrow-prev')) {
            $.scrollify.previous();
        } else if (element.classList.contains('aside-menu__arrow-next')) {
            $.scrollify.next();
        }
    })
});
document.querySelector('.screen10__content').addEventListener('scroll', e => {
    e.stopPropagation();
    console.log(e);

});



function clearClass(list, className) {
    list.forEach(item => {
        item.classList.remove(className);
    })
}


function menuItemSwitch(index, sectionArray) {
    let curDataset = sectionArray[index][0].dataset.menu_title;
    console.log(curDataset);
    clearClass($menuItemList, 'current');
    document.querySelector(`[data-name='${curDataset}']`).classList.add('current');
    // console.log(sectionArray[index][0].dataset.menuTitle);

}