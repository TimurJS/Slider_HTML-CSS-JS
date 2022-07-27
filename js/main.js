const prev = document.getElementById('btn-prev'),
    next = document.getElementById('btn-next'),
    slides = document.querySelectorAll('.slide'),
    dots = document.querySelectorAll('.dot');

let step = 0;

const activeSlide = num => {
    for (let slide of slides) {
        slide.classList.remove('active');
    }
    slides[num].classList.add('active');
}

const activeDot = num => {
    for (let dot of dots) {
        dot.classList.remove('active');
    }
    dots[num].classList.add('active');
}

const prepareCurrentSlide = (step) => {
    activeSlide(step);
    activeDot(step);
}

const nextSlide = () => {
    if (step == slides.length - 1) {
        step = 0;
        prepareCurrentSlide(step);
    }
    else {
        step++;
        prepareCurrentSlide(step);
    }
}

const prevSlide = () => {
    if (step == 0) {
        step = slides.length - 1;
        prepareCurrentSlide(step);
    }
    else {
        step--;
        prepareCurrentSlide(step);
    }
}

dots.forEach((item, index) => {
    item.onclick = () => {
        step = index;
        prepareCurrentSlide(index);
    }
})

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

// Transition animation
// setInterval(nextSlide, 2500);