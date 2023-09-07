const button = document.getElementById('bookButton');
const dots = button.querySelector('.dots');
const text = button.querySelector('.button_text');

button.addEventListener('click', function() {
    //dots visible
    dots.style.visibility = 'visible';
    text.style.visibility = 'hidden';
    dots.style.right='40px';
    Array.from(dots.children).forEach(dot =>{
        dot.style.opacity = '1';
    });
    //text.style.visibility = 'visible';
    text.textContent = 'loading...';

    setTimeout(function() {
        dots.style.right = '-100px'
        dots.style.visibility = 'hidden';
        text.textContent = 'Book Now';
    }, 4000);
});