
function rotateClockHands() {
    // Get the current time
    const now = new Date();
  
    // Get the hour, minute, and second values
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    // Calculate the rotation angles for each clock hand
    const hourRotation = (hours * 30) + (minutes / 2);
    const minuteRotation = (minutes * 6) + (seconds / 10);
    const secondRotation = seconds * 6;
  
    // Apply the rotation to the clock hands
    const hourHand = document.querySelector('.hours');
    const minuteHand = document.querySelector('.minute');
    const secondHand = document.querySelector('.secnd');
  
    hourHand.style.transform = `rotate(${hourRotation+180}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation+180}deg)`;
    secondHand.style.transform = `rotate(${secondRotation+180}deg)`;
  }
  
  // Call the rotateClockHands function every second to update the clock
  setInterval(rotateClockHands, 1000);
  

// const darkmode=document.getElementById('butn');
// let count=0;
// if(onclick.darkmode){
//     count++;
//     if(count%2!=0){
//         darkmode.addEventListener('click',function onclick(){
//             document.body.style.backgroundColor='black';
//             document.querySelector('.innerclock').style.backgroundColor='black';
//         });
//     }
//     else{
//         darkmode.addEventListener('click',function onclick(){
//             document.body.style.backgroundColor='white';
//             document.querySelector('.innerclock').style.backgroundColor='white';
//         });
        

//     }
// }
const darkmode = document.getElementById('butn');
darkmode.addEventListener('click', function () {
    const body = document.body;
    const innerClock = document.querySelector('.innerclock');
    
    if (body.style.backgroundColor =='black') {
        body.style.backgroundColor = 'white';
        innerClock.style.backgroundColor = 'white';
        darkmode.textContent='NIGHT MODE';
    } else {
        body.style.backgroundColor = 'black';
        innerClock.style.backgroundColor = 'black';
        darkmode.textContent='LIGHT MODE';
    }
});