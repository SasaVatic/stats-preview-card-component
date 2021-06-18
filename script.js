const body = document.querySelector('body');
const img = document.querySelector('.card-img');

window.addEventListener('resize', () => {
    if(body.offsetWidth < 768) {
        img.setAttribute('src', './images/image-header-desktop.jpg');
    }
    else {
        img.setAttribute('src', './images/image-header-mobile.jpg');
    }
});