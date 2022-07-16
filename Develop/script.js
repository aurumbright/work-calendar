let timeDisplayEl = $('#currentDay');


// Clock for top of app
let currentTime = moment().format("dddd MMM Do YYYY hh:mm:ss a");
timeDisplayEl.text(currentTime);

function updateTime() {
    currentTime = moment().format("dddd MMM Do YYYY hh:mm:ss a");
    timeDisplayEl.text(currentTime);
};
setInterval(updateTime, 1000);

//