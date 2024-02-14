let next = document.getElementById('next');
let prev = document.getElementById('previus');
let slider = document.querySelector('.slider');

next.onclick = function () {
    let slides = document.querySelectorAll('.slides');
    slider.appendChild(slides[0]);
}

prev.onclick = function () {
    let slides = document.querySelectorAll('.slides');
    slider.prepend(slides[slides.length - 1]);
}