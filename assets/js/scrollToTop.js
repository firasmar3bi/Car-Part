let scrollToTop = document.getElementById('scroolToTop')
var saleHeight = document.getElementById('scrolvispilty').offsetTop;

scrollToTop.style.opacity = 0;

window.addEventListener('scroll', function() {
    if (window.scrollY >= saleHeight) {
        scrollToTop.style.opacity = '1';
    }
    if (window.scrollY < saleHeight) {
        scrollToTop.style.opacity = '0';
    }
});

scrollToTop.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});