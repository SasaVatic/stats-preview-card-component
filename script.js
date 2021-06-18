const body = document.querySelector('body');
const img = document.querySelector('img');

window.onresize = () => {
    console.log(body.offsetWidth);
    if(body.offsetWidth < '768') {
        img.setAttribute('src', './images/image-header-mobile.jpg');
    }
    else {
        img.setAttribute('src', './images/image-header-desktop.jpg');
    }
};