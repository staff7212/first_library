import $ from '../core';

$.prototype.carousel = function(autoplay = 0) {
    for (let i = 0; i < this.length; i++) {
        const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width;
        const slides = this[i].querySelectorAll('.carousel-item');
        const slidesField = this[i].querySelector('.carousel-slides');
        const dots = this[i].querySelectorAll('.carousel-indicators li');
        let paused;

        slidesField.style.width = 100 * slides.length + '%';
        slides.forEach(slide => {
            slide.style.width = width;
        });

        let offset = 0;
        let slideIndex = 0;

        $(this[i].querySelector('[data-slide="next"]')).click((e) => {
            e.preventDefault();
            if (offset == (+width.replace(/\D/g, '')  * (slides.length - 1))) {
                offset = 0;
            } else {
                offset += +width.replace(/\D/g, '');
            }

            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slideIndex === slides.length - 1) {
                slideIndex = 0;
            } else {
                slideIndex++;
            }

            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');

        });

        $(this[i].querySelector('[data-slide="prev"]')).click((e) => {
            e.preventDefault();
            if(offset == 0) {
                offset = +width.replace(/\D/g, '') * (slides.length - 1);
            } else {
                offset -= +width.replace(/\D/g, '');
            }

            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slideIndex == 0) {
                slideIndex = slides.length - 1;
            } else {
                slideIndex--;
            }

            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });


        //нажатие на индикаторы №1
        $('.carousel .carousel-indicators li').click(e => {
            const slideTo = e.target.getAttribute('data-slide-to');
            console.log(slideTo);
            slideIndex = slideTo - 1;
            offset = (+width.replace(/\D/g, '')) * (slideTo - 1);
            slidesField.style.transform = `translateX(-${offset}px)`;

            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });

        //нажатие на индикаторы №2
        // dots.forEach(dot => {
        //     dot.addEventListener('click', (e) => {
        //         const slideTo = e.target.getAttribute('data-slide-to');
    
        //         slideIndex = slideTo - 1;
        //         offset = (+width.replace(/\D/g, '')) * (slideTo - 1);
        //         slidesField.style.transform = `translateX(-${offset}px)`;
    
        //         dots.forEach(dot => dot.classList.remove('active'));
        //         dots[slideIndex].classList.add('active');
        //     });
        // });

        const activateAutoplay = () => {
            if (autoplay) {
                paused = setInterval(() => {
                    document.querySelector('[data-slide="next"]').click();
                }, autoplay);
            }
        };
        
        activateAutoplay();
        this[0].addEventListener('mouseenter', () => clearInterval(paused));
        this[0].addEventListener('mouseleave', () => activateAutoplay());
    }
};

$('.carousel').carousel(3000);