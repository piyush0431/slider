let next = document.getElementById('next');
let prev = document.getElementById('previus');
let slider = document.querySelector('.slider');
let slides = document.querySelectorAll('.slides');

next.onclick = function () {
    slider.appendChild(slides[0]);
}

prev.onclick = function () {
    slider.prepend(slides[slides.length - 1]);
}

// Triggering next on right arrow key press
document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') {
        slider.appendChild(slides[0]);
    }
});

// Triggering prev on left arrow key press
document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') {
        slider.prepend(slides[slides.length - 1]);
    }
});

// Triggering next and prev on scroll
document.addEventListener('wheel', function (e) {
    if (e.deltaY > 0) {
        slider.appendChild(slides[0]);
    } else {
        slider.prepend(slides[slides.length - 1]);
    }
});

// Triggering next and prev on individual slide click
slides.forEach(function (slide) {
    slide.addEventListener('click', function () {
        slider.appendChild(slides[0]);
    });
});
