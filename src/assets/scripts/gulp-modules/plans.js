const $planBlock = document.querySelector('.screen9 .tabs');
tabsList = $planBlock.querySelectorAll('.tab');
linksList = $planBlock.querySelectorAll('ul.tab-links li');




function disableTabs() {
    $planBlock.querySelector('.tab.active').classList.remove('active');
}

function disableLink() {
    $planBlock.querySelector('ul.tab-links li.active').classList.remove('active');
}

tabsList.forEach(tab => {
    let title = tab.querySelector('.tab-title');
    title.addEventListener('click', function(evt) {
        disableTabs();
        tab.classList.add('active');
        $('.screen9__slider-js').slick('slickUnfilter');
        $('.screen9__slider-js').slick('slickFilter', '[data-room=' + tab.dataset.room + ']');
    });
});

linksList.forEach(link => {
    link.addEventListener('click', function(evt) {
        disableLink();
        link.classList.add('active');
    });
});


/**Слайдер с планировками */
$('.screen9__slider-js').on('init', function(event, slick) {
    $('.screen9 .all').html($('.screen9__slide').length);
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
};

// $('.screen9__slider-js').slick('slickFilter', '[data-room=3]');
// $('.screen9__slider-js').slick('slickUnfilter');
/**Слайдер с планировками END */