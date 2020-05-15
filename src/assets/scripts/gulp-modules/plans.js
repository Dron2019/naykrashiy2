const $planBlock = document.querySelector('.screen9 .tabs');
tabsList = $planBlock.querySelectorAll('.tab');
linksList = $planBlock.querySelectorAll('ul.tab-links li')
arrows = document.querySelector('.screen9 .arrow-block-std');
const SCREEN_WIDTH = window.screen.width;



function switchTabLink(id) {
    let activeLink = document.querySelector('.screen9 .tabs li[data-id="' + id + '"]');
    disableLink();
    if (!activeLink.closest('.tab').classList.contains('active')) {
        disableTabs()
        activeLink.closest('.tab').classList.add('active');
    }
    activeLink.classList.add('active');
}

function disableTabs() {
    $planBlock.querySelector('.tab.active').classList.remove('active');
}

function disableLink() {
    $planBlock.querySelector('ul.tab-links li.active').classList.remove('active');
}

function goToSlide(id) {
    let slideIndex = document.querySelector('.screen9__slider-js [data-id="' + id + '"]').dataset.slickIndex;
    console.log(document.querySelector('[data-id="' + id + '"]'));
    $('.screen9__slider-js').slick('slickGoTo', slideIndex);
}
let getPopupContent = (id) => {
    let activeSlide = document.querySelector('.screen9__slide[data-id="' + id + '"]'),
        activeSlideWithText = document.querySelector('.slider-2-slide[data-id="' + id + '"]');
    return `<div class="screen9 screen9-mobile-popup">
                <img src="${activeSlide.querySelector('img').src}">
                ${activeSlideWithText.querySelector('.slider-2-slide__title').outerHTML}
                <ul class="slider-2-slide__room-description">
                    ${activeSlideWithText.querySelector('.slider-2-slide__room-description').innerHTML}
                </ul>
                <hr>
                ${document.querySelector('.screen9 .screen9__static-text-inner-link').outerHTML}
                <a onclick="openFormPopup()" class="order-call popup-form-js">Замовити дзвінок</a>
            </div>`;
}

function openFormPopup() {
    document.querySelector('.popup-container').classList.add('visible');
    document.querySelector('.popup-container .form-js').classList.add('clip-effect');
}

tabsList.forEach(tab => {
    let title = tab.querySelector('.tab-title');
    title.addEventListener('click', function(evt) {
        if (window.screen.width < 769) tab.classList.add('tablet-active');
        disableTabs();
        tab.classList.add('active');
        // $('.screen9__slider-js').slick('slickUnfilter');
        // $('.screen9__slider-js').slick('slickFilter', '[data-room=' + tab.dataset.room + ']');
    });
});

linksList.forEach(link => {
    link.addEventListener('click', function(evt) {
        disableLink();
        if (window.screen.width < 769) link.closest('.tab.active').classList.remove('tablet-active');
        link.classList.add('active');
        goToSlide(link.dataset.id);
    });
});

/**Слайдер с планировками */
let slideCorrectionIndex = 0.2;
$('.screen9__slider-js').on('init', function(event, slick) {
    $('.screen9 .all').html($('.screen9__slide').length);
    $('.screen9 .current').html('01');
    $('.screen9__slider-js .slick-track')[0].style.position = `relative`;
    if (SCREEN_WIDTH < 481) {
        console.log(slick);
        console.log($('.screen9__slider-js .slick-slide')[0].style.width);

        // $('.screen9__slider-js .slick-track')[0].style.left = - +$('.screen9__slider-js .slick-slide')[0].style.width.replace(/px/, '') * slideCorrectionIndex * 2 - 100 + 'px';
        console.log($('.screen9__slider-js .slick-track')[0].style.left);

    }
});
$('.screen9__slider-js').slick({
    slide: '.screen9__slide',
    nextArrow: $('.screen9 .arrow-next-std'),
    prevArrow: $('.screen9 .arrow-prev-std'),
    fade: true,
    asNavFor: '.screen9__slider-2-js',
    responsive: [{
        breakpoint: 769,
        settings: {

            slidesToScroll: 1,
        },
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 1 + slideCorrectionIndex,
            slidesToScroll: 1,
            fade: false,
            centerMode: true,
            infinite: false,
            centerPadding: '0px'
        }
    }, ],
});
$('.screen9__slider-js').on('beforeChange', (event, slick, currentSlide, nextSlide) => {
    $('.screen9 .current').html((nextSlide + 1));
    // goToSlide(document.querySelector('.screen9__slide[data-slick-index="' + nextSlide + '"]').dataset.id);
    switchTabLink(document.querySelector('.screen9__slide[data-slick-index="' + nextSlide + '"]').dataset.id);
});
$('.screen9__slider-2-js').on('init', function(event, slick) {

    if (SCREEN_WIDTH < 481) {
        /**Выравнивание первого слайда при указывании неровного количества слайдов в слике */
        // $('.screen9__slider-2-js .slick-track')[0].style.left = - +$('.screen9__slider-2-js .slick-slide')[0].style.width.replace(/px/, '') * slideCorrectionIndex * 2 - 100 + 'px';
    }
});
$('.screen9__slider-2-js').slick({
    slide: '.slider-2-slide',
    // nextArrow: $('.screen9 .arrow-next-std'),
    // prevArrow: $('.screen9 .arrow-prev-std'),
    arrows: false,
    fade: true,
    swipe: false,
    adaptiveHeight: true,
    responsive: [{
        breakpoint: 769,
        settings: {

            slidesToScroll: 1,
        },
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 1 + slideCorrectionIndex,
            slidesToScroll: 1,
            fade: false,
            centerMode: true,
            infinite: false,
            centerPadding: '0px'
        }
    }, ],

});
/**Слайдер с планировками END */

/*Popup INIT */
$('.screen9__slider').magnificPopup({
    delegate: 'a',
    type: 'image'
});
document.querySelector('.screen9__mobile-detail-button').addEventListener('click', function(evt) {
    $.magnificPopup.open({
        items: [{
            src: getPopupContent($planBlock.querySelector('li.active').dataset.id), // Dynamically created element
            type: 'inline'
        }]
    });
});


//Перенос стрелок под слайдер в планшетной версии
if (window.screen.width < 769) {
    let navBlock = document.querySelectorAll('.screen9__nav-block')[0],
        plansContainer = document.querySelectorAll('.screen9__plans-slider-wrapper')[0];
    plansContainer.append(navBlock);
};