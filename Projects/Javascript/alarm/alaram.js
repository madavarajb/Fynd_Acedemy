function setAlarm() {
    var Input = document.getElementById('time').value;
    var alarm = new Date(Input);
    var currentDate = new Date();

    // Check if the alarm time has already passed
    if (alarm <= currentDate) {
        alert('Invalid alarm time. Please set a future time.');
        return;
    }

    var timer = setInterval(function() {
        var currentDateTime = new Date();

        // Check if the alarm time has passed
        if (alarm <= currentDateTime) {
            alert('Get Up!');
            clearInterval(timer); // Stop checking
        }
    }, 1000);
}

var lockButton = document.querySelector('.lockon');
lockButton.addEventListener('click', setAlarm);