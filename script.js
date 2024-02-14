let next = document.getElementById('next');
let prev = document.getElementById('previus');
let slider = document.querySelector('.slider');

function nextSlide() {
    let slides = document.querySelectorAll('.slides');
    slider.appendChild(slides[0]);
}

function prevSlide() {
    let slides = document.querySelectorAll('.slides');
    slider.prepend(slides[slides.length - 1]);
}

next.onclick = nextSlide;
prev.onclick = prevSlide;


document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight') {
        next.click();
    } else if (event.key === 'ArrowLeft') {
        prev.click();
    }
});
