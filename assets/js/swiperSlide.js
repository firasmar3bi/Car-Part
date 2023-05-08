let screenWidth = screen.width;
console.log(screenWidth);

function navSwiper(id, slidePerView, spaceBetween) {
    var swiper = new Swiper(`#${id}`, {
        slidesPerView: slidePerView,
        allowTouchMove: true,
        allowSlideNext: true,
        allowSlidePrev: true,
        loop: true,
        spaceBetween: spaceBetween,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    // swiper.setTransition(4000, 'linear');

    swiper.setTransition(this, 4000);
}



// NAVBAR SWIPER
if (screenWidth <= 840) {
    navSwiper(`navSwiper`, 3, 18)
} else {
    navSwiper(`navSwiper`, 9, 18)
}

// FEATUD SWIPER 
if (screenWidth <= 840) {
    navSwiper(`featurdSwiper`, 2, 5)
} else {
    navSwiper(`featurdSwiper`, 5, 5)
}

//DEALS SWIPER 
if (screenWidth <= 840) {
    navSwiper(`dealsSwiper`, 2, 4)
} else {
    navSwiper(`dealsSwiper`, 4, 4)
}

// populer swiper

if (screenWidth <= 840) {
    navSwiper(`pillBrake`, 2, 4)
} else {
    navSwiper(`pillBrake`, 4, 4)
}


// NEW PRODUCT
if (screenWidth <= 840) {
    navSwiper(`newProduct`, 3, 3)
} else {
    navSwiper(`newProduct`, 3, 3)
}