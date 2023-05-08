let showNavBar = document.getElementById('showNavbar').offsetTop;
let navBarTwo = document.getElementById('navBarTwo');
let navBarThree = document.getElementById('navBarThree');
let showButtonScroll = document.getElementById('showButtonScroll');


window.addEventListener('scroll', function() {
    if (window.pageYOffset >= showNavBar) {
        navBarTwo.classList.add("fixed-top");
        navBarTwo.style.boxShadow = "0px 7px 20px 0px";
        navBarThree.classList.add('d-none')
        navBarThree.style.zIndex = '9999999999999';
        showButtonScroll.style.display = 'block'

    } else {
        navBarTwo.classList.remove("fixed-top");
        navBarThree.classList.remove('d-none')
        showButtonScroll.style.display = 'none'
        navBarTwo.style.boxShadow = "0px 0px 0px 0px";

    }
});
showButtonScroll.addEventListener('click', function() {
    navBarThree.classList.toggle("d-none")
})