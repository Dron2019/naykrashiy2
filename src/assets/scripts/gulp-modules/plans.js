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
    });
});

linksList.forEach(link => {
    link.addEventListener('click', function(evt) {
        disableLink();
        link.classList.add('active');
    });
})