const button = document.getElementById('bookButton');
const dots = button.querySelector('.dots');
const text = button.querySelector('.button_text');

button.addEventListener('click', function() {
    
    dots.style.visibility = 'visible';
    text.style.visibility = 'hidden';
    setTimeout(function() {
        text.style.visibility = 'visible';
        text.textContent = 'loading...';

        dots.style.visibility = 'hidden';
        label.textContent = 'Book Now';
    }, 4000);
});