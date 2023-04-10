scrollHeader();
document.addEventListener('scroll', function() {
    scrollHeader();
});


function scrollHeader () {
    if(window.scrollY > 100) {
        document.querySelector('.header').classList.add('header--active');
    } else {
        document.querySelector('.header').classList.remove('header--active');
    }
}

