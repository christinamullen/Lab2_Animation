const button = document.getElementById('bookButton');
const pond = button.querySelector('.pond');
const text = button.querySelector('.button_text');

button.addEventListener('click', function() {
    //hide text
    text.style.visibility = 'hidden';

    //reset css animations for each circle so no repeat
    Array.from(pond.children).forEach(circle => {
        circle.style.animation = 'none';  
        circle.offsetHeight;
    });

    //pond ripples in mid out
    pond.querySelector('.in').style.animation = 'showCircle 0.5s 1s forwards, hideCircle 0.5s 3s forwards';
    pond.querySelector('.mid').style.animation = 'showCircle 0.5s 1.5s forwards, hideCircle 0.5s 2.5s forwards';
    pond.querySelector('.out').style.animation = 'showCircle 0.5s 2s forwards, hideCircle 0.5s 2s forwards';
    
    //change text to booking
    setTimeout(function() {
        text.style.visibility = 'visible';
        text.textContent = 'Booking...';

        //wait 3 seconds to show completed
        setTimeout(function() {
            text.textContent = 'You\'re Booked!';
        }, 3000);

    }, 4000);
    
});