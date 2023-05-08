let loading = document.getElementById('loding');

document.body.style.overflow = 'hidden';
window.addEventListener('load', function() {
    setTimeout(function() {
        loading.style.opacity = '0'
        loading.style.visibility = 'hidden'
        loading.style.transition = '1s'
        document.body.style.overflow = 'auto';
    }, 5000)
});