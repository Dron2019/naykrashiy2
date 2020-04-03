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

var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
        // ... more custom settings?
});

/* slider screen 3*/
if (window.screen.width > 480) {
    $('.screen3__slider').on('init', function(event, slick) {
        $('.screen3-arrow-container .all').html('0' + $('.screen3__slide').length);
        $('.screen3-arrow-container .current').html('01');
        $('.big-count-block .all').html('0' + $('.screen3__slide').length);
        $('.big-count-block .current').html('01');
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
        $('.big-count-block .current').html('0' + (nextSlide + 1));

    });


}
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
    if ($('.screen4__slide').length >= 10) {
        $('.screen4-slider .all').html($('.screen4__slide').length);
    }
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
    if ((nextSlide + 1) >= 10) {
        $('.screen4-slider .current').html((nextSlide + 1));
    }
    $('.screen4-slider .current').html('0' + (nextSlide + 1));

});
/* slider screen 4END*/





/*настройка фильтра карты */
let $legendItems = document.querySelectorAll('.legend-items-js>li');
$legendItems.forEach((item, index) => {
        item.onclick = () => {
                item.classList.toggle('selected');
            }
            // console.log(item.dataset);
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
//Перенос стрелок под слайдер в планшетной версии
if (window.screen.width < 769) {
    let navBlock = document.querySelectorAll('.screen9__nav-block')[0],
        plansContainer = document.querySelectorAll('.screen9__plans-slider-wrapper')[0];
    plansContainer.append(navBlock);
}
/**Слайдер с планировками END */



/**Слайдер документов */
$('.document-slider-js').slick({
        slidesToShow: 3,
        nextArrow: $('.screen10 .arrow-next-std'),
        prevArrow: $('.screen10 .arrow-prev-std'),
        slide: '.document-item',
        responsive: [{
            breakpoint: 769,
            settings: {
                slidesToShow: 2,

            }
        }, {
            breakpoint: 481,
            settings: {
                slidesToShow: 1.03,
                centerMode: true,
                centerPadding: '15px'

            }
        }, ]
    })
    /**Слайдер документов END */




function increaseAnimation(element, digit) {
    if (digit == undefined) {
        this.digitLastNumber = +element.innerHTML;
        this.digit = 0;
    }
    element.innerHTML = this.digit;
    this.digit++;

    if (this.digit <= this.digitLastNumber) {
        setTimeout(() => {
            increaseAnimation.call(element, element, this.digit);
        }, 50);
    } else {
        this.digit = undefined;
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
document.querySelectorAll('.popup-form-js').forEach(el => {

    el.onclick = e => {
        document.querySelector('.popup-container').classList.add('visible');
        document.querySelector('.popup-container .form-js').classList.add('clip-effect');
    };
})

document.querySelector('.popup-container').onclick = e => {
    if (e.target.classList.contains('close-form') ||
        e.target.classList.contains('popup-container')) {
        document.querySelector('.popup-container').classList.remove('visible');
        document.querySelector('.popup-container .form-js').classList.remove('clip-effect');
    }
}

/**POPUP FORM END */


/**MENU and SECTION SCROLL */
/// Смена цвета меню в зависимости от экрана (data-menu_theme на секции) и переменные css
let colorObject = {
    yellow_green: {
        active_color: "#004445",
        innactive_color: '#FDFBF9'
    },
    white_yellow: {
        active_color: "#F8B400",
        innactive_color: '#FDFBF9'
    },
    white_green: {
        active_color: "#004445",
        innactive_color: '#FDFBF9'
    },
    first_screen: {
        active_color: "#7fff00",
        innactive_color: '#7fff00'
    },
};

let dropDownAnim = {
    keyframes: [
        { transform: 'translateY(-300px)' },
        { transform: 'translateY(0)' }
    ],
    timeFunc: {
        // timing options
        duration: 500,
        iterations: 1
    }
}
let menuArrow = document.querySelectorAll('.menu-arrow-js'),
    menuItem = document.querySelectorAll('.menu-item-js');

function changeMenuColor(theme) {
    console.log(theme);

    switch (theme) {
        case 'first_screen':
            document.documentElement.style
                .setProperty('--menu-active-color', colorObject.first_screen.active_color);
            document.documentElement.style
                .setProperty('--menu-innactive-color', colorObject.first_screen.innactive_color);
        case 'yellow_green':
            document.documentElement.style
                .setProperty('--menu-active-color', colorObject.yellow_green.active_color);
            document.documentElement.style
                .setProperty('--menu-innactive-color', colorObject.yellow_green.innactive_color);
            break;
        case 'white_yellow':
            document.documentElement.style
                .setProperty('--menu-active-color', colorObject.white_yellow.active_color);
            document.documentElement.style
                .setProperty('--menu-innactive-color', colorObject.white_yellow.innactive_color);
            break;
        case 'white_green':
            document.documentElement.style
                .setProperty('--menu-active-color', colorObject.white_green.active_color);
            document.documentElement.style
                .setProperty('--menu-innactive-color', colorObject.white_green.innactive_color);
            break;

        default:
            break;
    }

};

function headerShowDuringUpScroll(curScreen) {
    if ((curScreen - window.currentScreen) < 0) {
        if (getComputedStyle(document.querySelector('.header-block')).position == 'absolute') {
            document.querySelector('.header-block').style.position = `fixed`;
            document.querySelector('.header-block').animate(dropDownAnim.keyframes, dropDownAnim.timeFunc);
        }
        if (getComputedStyle(document.querySelector('.logo-block')).position == 'static') {
            document.querySelector('.logo-block').style.position = `fixed`;
            document.querySelector('.logo-block').animate(dropDownAnim.keyframes, dropDownAnim.timeFunc);
        }

    } else {
        document.querySelector('.header-block').style.opacity = `1`;
        document.querySelector('.header-block').style.position = `absolute`;
        document.querySelector('.logo-block').style.position = `static`;
    }
};

function headerShowDuringTouch(el, direction) {
    switch (direction) {
        case 'up':
            el.style.opacity = `1`;
            break;
        case 'down':
            el.style.opacity = `0`;
            break;

        default:
            break;
    }
}
changeMenuColor('white_yellow');
menuItem[0].classList.add('current');
let $menuItemList = document.querySelectorAll('.aside-menu__item');
window.currentScreen = 1;
$.scrollify({
    section: ".section",
    scrollSpeed: 2000,
    offset: 0,
    easing: "easeOutExpo",
    setHeights: true,
    updateHash: true,
    touchScroll: true,
    standardScrollElements: '.scroll-layout',
    scrollbars: true,
    before: function(e, r) {
        // e == 8 ? $.scrollify.disable() : null;
        menuItemSwitch(e, r);
        console.log(e, r);
        console.log(window.currentScreen);

        $layout.dataset.screen = e + 1;
        $staticBottomBlock.dataset.screen = e + 1;
        // e == 8 ?
        //     $layout.style.backgroundPositionY = `${e*100+8}vh` :
        //     $layout.style.backgroundPositionY = `${e*100}vh`;
        // $layout.style.backgroundPositionY = `100vh`;
        // console.log(getElHeight(r[e][0]));
        changeMenuColor(r[e][0].dataset.menu_theme);
        moveEffects(e);
        headerShowDuringUpScroll(e);
        window.currentScreen = e;
    },
    after: function(e, r) {},
    overflowScroll: false
});
menuItem.forEach((element, index) => {
    element.addEventListener('click', () => {
        let dataName = element.dataset.name
        element.classList.add('current');
        $.scrollify.move(`#${dataName}`);
    })
});
menuArrow.forEach(element => {
    element.addEventListener('click', () => {
        // console.log(element);
        if (element.classList.contains('aside-menu__arrow-prev')) {
            $.scrollify.previous();
        } else if (element.classList.contains('aside-menu__arrow-next')) {
            $.scrollify.next();
        }
    })
});

if (window.screen.width < 481) {
    $.scrollify.destroy();

}


/** отображение хедера на сенсорных єкранах в зависимости от скролла */
let touchStartCord,
    touchEndCord;
document.body.addEventListener('touchstart', (evt) => {
    touchStartCord = evt.changedTouches[0].screenY;
    console.log(evt.changedTouches[0].screenY);

})
document.body.addEventListener('touchend', (evt) => {
    touchEndCord = evt.changedTouches[0].screenY;
    console.log(evt.changedTouches[0].screenY);
    if (touchStartCord < touchEndCord) {
        headerShowDuringTouch(document.querySelector('header'), 'up')
    } else {
        headerShowDuringTouch(document.querySelector('header'), 'down')
    }
});


/** отображение хедера на сенсорных єкранах в зависимости от скролла  END*/




function clearClass(list, className) {
    list.forEach(item => {
        item.classList.remove(className);
    })
}

function menuItemSwitch(index, sectionArray) {
    let curDataset = sectionArray[index][0].dataset.menu_title;
    // console.log(curDataset);
    clearClass($menuItemList, 'current');
    document.querySelector(`[data-name='${curDataset}']`).classList.add('current');
    // console.log(sectionArray[index][0].dataset.menuTitle);
}

function moveEffects(screenNumber) {
    switch (screenNumber) {
        case 9:
            // console.log('!!');
            increaseAnimation.call(document.querySelectorAll('.statistic-item__digit')[0], document.querySelectorAll('.statistic-item__digit')[0]);
            increaseAnimation.call(document.querySelectorAll('.statistic-item__digit')[1], document.querySelectorAll('.statistic-item__digit')[1]);
            increaseAnimation.call(document.querySelectorAll('.statistic-item__digit')[2], document.querySelectorAll('.statistic-item__digit')[2]);
            // increaseAnimation(document.querySelectorAll('.statistic-item__digit')[0]);
            // setTimeout(() => {
            //     increaseAnimation(document.querySelectorAll('.statistic-item__digit')[1]);
            // }, 100);
            // increaseAnimation(document.querySelectorAll('.statistic-item__digit')[2]);

            // screenList[screenNumber].querySelector('.footer-block').classList.add('visible');
            break;
        case 4:
            if ((screenNumber - window.currentScreen) < 0) {

                putHideClass(document.querySelector('.screen5__image'), 'toBlurDarkReverse', 2200);
            }

            break;
        case 5:
            console.log(screenNumber - window.currentScreen);
            if ((screenNumber - window.currentScreen) > 0) {
                putHideClass(document.querySelector('.screen6'), 'no-background', 1000);
                putHideClass(document.querySelector('.screen5__image'), 'toBlurDark', 1000);
            }
            putHideClass(screenList[screenNumber].querySelector('.screen6__text-block'), 'visible', 1000);
            // screenList[screenNumber].querySelector('.screen6__text-block').classList.add('visible');
            break;
        default:
            break;
    }
};


document.querySelector('.bottom-screen-scroll-layout').addEventListener('wheel', e => {
        // console.log(e);
        let footer = document.querySelectorAll('.footer-block')[0];
        let footerCord = $('.footer-block').offset().top - $(window).scrollTop() - window.screen.availHeight;
        let documentCords = $('.documents-wrapper').offset().top - $(window).scrollTop() - window.screen.availHeight;
        // let builderCords = $('.screen10__logo').offset().top - $(window).scrollTop() - window.screen.availHeight;
        let builderCords = document.querySelectorAll('.screen10__logo')[0].getBoundingClientRect();
        let builderBlockTitle = document.querySelector('.screen10__title');
        // console.log(builderCords);
        if (e.deltaY < 0 && builderBlockTitle.getBoundingClientRect().top > 0) {
            $.scrollify.previous();
        }
        if (builderCords < 0 && documentCords < 0) {
            clearClass($menuItemList, 'current');
            document.querySelector('[data-name="builder"]').classList.add('current');
        }
        if (documentCords < 0 && builderCords.top < (-431)) {
            clearClass($menuItemList, 'current');
            document.querySelector('[data-name="docs"]').classList.add('current');
        }
        if (footerCord < 0) {
            footer.classList.add('visible');
            clearClass($menuItemList, 'current');
            document.querySelector('[data-name="contacts"]').classList.add('current');
        } else {
            footer.classList.remove('visible');
            document.querySelector('[data-name="contacts"]').classList.remove('current');
        }




        // console.dir(document.querySelectorAll('.footer-block')[0]);
        // console.log(document.querySelectorAll('.footer-block')[0].clientY);


    })
    //     /**MENU and SECTION SCROLL END */

document.querySelector('.bottom-screen-scroll-layout').addEventListener('touchend', e => {
    let footer = document.querySelectorAll('.footer-block')[0];
    let footerCord = $('.footer-block').offset().top - $(window).scrollTop() - window.screen.availHeight;
    let documentCords = $('.documents-wrapper').offset().top - $(window).scrollTop() - window.screen.availHeight;
    let builderCords = $('.screen10__developer-description').offset().top - $(window).scrollTop() - window.screen.availHeight;
    if (builderCords < 0 && documentCords < 0) {
        clearClass($menuItemList, 'current');
        document.querySelector('[data-name="builder"]').classList.add('current');
    }
    if (documentCords < 0 && builderCords < 0) {
        clearClass($menuItemList, 'current');
        document.querySelector('[data-name="docs"]').classList.add('current');
    }
    if (footerCord < 0) {
        footer.classList.add('visible');
        clearClass($menuItemList, 'current');
        document.querySelector('[data-name="contacts"]').classList.add('current');
    } else {
        footer.classList.remove('visible');
        document.querySelector('[data-name="contacts"]').classList.remove('current');
    }
});
let touchStartY = 0;
let endStartY = 0;

function touchBackScroll() {
    let builderBlockTitle = document.querySelector('.screen10__logo');
    if (touchStartY < endStartY && builderBlockTitle.getBoundingClientRect().top > 0) {
        $.scrollify.previous();
    }
}
document.querySelector('.bottom-screen-scroll-layout').addEventListener('touchstart', (evt) => {
    // console.log(evt.changedTouches[0].screenY);
    touchStartY = evt.changedTouches[0].screenY;
});
document.querySelector('.bottom-screen-scroll-layout').addEventListener('touchend', (evt) => {
    // console.log(evt.changedTouches[0].screenY);
    endStartY = evt.changedTouches[0].screenY;
    touchBackScroll();
});

/* footer links navigation */

function linksWithoutScroliffy(dataName) {
    // console.log(document.querySelector(`[data-name='${dataName}']`));

    $.scrollify.move(`builder`);
    clearClass($menuItemList, 'current');
    setTimeout(() => {
        document.querySelector(`#${dataName}`).scrollIntoView();
    }, 200);

}
/* footer links navigation end */

/**internal links setup */

let linksList = document.querySelectorAll('.link-js');

linksList.forEach(link => {
        link.onclick = e => {
            e.preventDefault();
            $.scrollify.move('#' + e.target.closest('.link-js').dataset.href);
            // console.log(e.target.closest('.link-js').dataset.href);
        }
    })
    /**internal links setup END */




/**Mob menu setup */
let menuOpen = document.querySelector('.mobile-menu-button-js'),
    menuClose = document.querySelector('.mobile-menu-close-js'),
    mobMenu = document.querySelector('.mobile-menu-js');
menuOpen.onclick = () => {
    mobMenu.classList.add('visible');
    putHideClass(mobMenu, 'opening', 1000);



}
menuClose.onclick = () => {
    putHideClass(mobMenu, 'closing', 1000);
    setTimeout(() => {
        mobMenu.classList.remove('visible');
    }, 1000);
}
mobMenu.querySelectorAll('a.mobile-menu__body-item').forEach(link => {
        link.onclick = () => {
            putHideClass(mobMenu, 'closing', 1000);
            setTimeout(() => {
                mobMenu.classList.remove('visible');
            }, 1000);

        }
    })
    /**Mob menu setup END */

// console.log(document.querySelector('.screen4 line'));




if (window.screen.width < 481) {
    document.querySelector('.screen4 line').setAttributeNS(null, 'stroke', '#F8B400');
    document.querySelector('.screen9__plans-slider-wrapper')
        .insertAdjacentElement('beforeEnd', document.querySelector('.screen9 .order-call'));

    let infraLegend = document.querySelectorAll('.screen7__legend-title')[0];
    /*Откртие окно маркеров в мобильной версии*/
    infraLegend.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('screen7__legend-title')) {
            infraLegend.classList.toggle('mob-opened');
        }
    })

}


function preloader(preloaderSelector) {
    element = document.querySelectorAll(preloaderSelector)[0];
    element.style.cssText = `animation:fadeIn 1s 1 linear`;
    element.style.animationDirection = `reverse`;
    element.addEventListener('animationend', () => {
        element.style.display = `none`;
    });

};
setTimeout(() => {
    preloader('.preloader-js');
}, 2000);