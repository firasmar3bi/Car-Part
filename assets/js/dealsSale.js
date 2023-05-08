// Set the date we're counting down to
let countDownDate = new Date("May 5, 2024 16:17:25");

// Update the count down every 1 second
let x = setInterval(function() {

    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("dealsTime").innerHTML =
        `
    <div class="py-2 px-4">
        <p>${hours}</p>
        <span>hours</span>
    </div>
    <div class="time-">:</div>
    <div class="py-2 px-4 rounded-2 border-1">
        <p>${minutes}</p>
        <span>minutes</span>
    </div>
    <div class="time-">:</div>
    <div class="py-2 px-4 rounded-2 border-1">
        <p>${seconds}</p>
      <span>seconds</span>
    </div>
    `

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);