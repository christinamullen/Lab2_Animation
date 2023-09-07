const button = document.getElementById('bookButton');
const pond = button.querySelector('.pond');
const text = button.querySelector('.button_text');

button.addEventListener('click', function() {
    //dots visible
    text.style.visibility = 'hidden';

    Array.from(pond.children).forEach(circle => {
        circle.style.animation = 'none';  
        circle.offsetHeight;
    });

    pond.querySelector('.in').style.animation = 'showCircle 0.5s 1s forwards, hideCircle 0.5s 3s forwards';
    pond.querySelector('.mid').style.animation = 'showCircle 0.5s 1.5s forwards, hideCircle 0.5s 2.5s forwards';
    pond.querySelector('.out').style.animation = 'showCircle 0.5s 2s forwards, hideCircle 0.5s 2s forwards';

    

    setTimeout(function() {
        text.style.visibility = 'visible';
        text.textContent = 'Booking...';
        //text.textContent = 'Book Now';
    }, 4000);
});