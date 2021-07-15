const scroolUpElement = document.querySelector('.scrollup');

scroolUpElement.addEventListener('click', () => {
    window.scrollTo(0, 0);
});

window.onscroll = () => {
    if (window.scrollY > 0) {
        scroolUpElement.dataset.visible = 'true'
        return
    }

    return scroolUpElement.dataset.visible = 'false'
}
