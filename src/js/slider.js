import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

const swiper = new Swiper('.yacht-slider', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 16,
    modules: [Navigation],
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 16
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 16
        },
    }
});

const swiper2 = new Swiper('.rev-slider', {
    modules: [Pagination],
    loopedSlides: 1,
    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 16
        },
        1280: {
            slidesPerView: 3,
            spaceBetween: 32
        },
    }
});
