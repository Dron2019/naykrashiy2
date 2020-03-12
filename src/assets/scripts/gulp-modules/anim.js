let svgTitleGroup = document.querySelector('.logo-title-js');
svgTitleGroup.querySelectorAll('path').forEach((item, index) => {
    item.classList.add('wow');
    item.classList.add('fadeIn');
    item.setAttribute('data-wow-delay', `${index*10/10/10}s`);
})