
function navSwiper(id, slidePerView, spaceBetween ,mobileSlider , mobileSpace) {
    var swiper = new Swiper(`#${id}`, {
        slidesPerView: mobileSlider,
        allowTouchMove: true,
        allowSlideNext: true,
        allowSlidePrev: true,
        loop: true,
        spaceBetween: mobileSpace,
        breakpoints: {
            // when window width is >= 840px
            840: {
              slidesPerView: slidePerView,
              spaceBetween: spaceBetween
            }},
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    swiper.setTransition(this, 4000);
}

// NAVBAR SWIPER
navSwiper(`navSwiper`, 9, 18 ,3 ,8)

// FEATUD SWIPER 
navSwiper(`featurdSwiper`, 5, 5 , 2, 5)

//DEALS SWIPER 
navSwiper(`dealsSwiper`, 4, 4, 2, 4)

// populer swiper
navSwiper(`pillBrake`, 4, 4, 2, 4)

// NEW PRODUCT
navSwiper(`newProduct`, 3, 3, 3, 3)
