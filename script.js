let totalSlides = document.querySelectorAll('.slider--item').length;
let currentSlide = 0;

document.querySelector('.slider--width').style.width = `calc(100vw*${totalSlides})`;
document.querySelector('.slider--controls').style.height =
    `${document.querySelector('.slider').clientHeight}px`;

function goPrev() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    updateMagin();

}
function goNext() {
    currentSlide++;
    if (currentSlide > (totalSlides - 1)) {
        currentSlide = 0;
    }
    updateMagin();
}

function updateMagin() {
    let sliderWidth = document.querySelector('.slider--item').clientWidth;
    let newMargim = (currentSlide * sliderWidth);
    document.querySelector('.slider--width').style.marginLeft = `-${newMargim}px`;
}
setInterval(goNext, 5000);