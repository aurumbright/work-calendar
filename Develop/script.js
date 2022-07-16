let dateDisplayEl = $('#currentDay');

let timeSlot = $('.time-slot').text();
let time = moment(timeSlot, 'h a').format('h a');

console.log(time)

// Clock for top of app
let currentDay = moment().format("dddd MMM Do YYYY hh:mm:ss a");
dateDisplayEl.text(currentDay);

function updateDay() {
    currentDay = moment().format("dddd MMM Do YYYY hh:mm:ss a");
    dateDisplayEl.text(currentDay);
};
setInterval(updateDay, 1000);

// this sort of works but needs to be applied to each row - maybe a forEach?

$('.row').each(function(index) {

    if (moment(time, 'h a').isBefore(moment())) {
        $('input').addClass("past");
    } else if (moment(time).isAfter(moment())) {
        $('input').addClass("future");
    } else {
        $('input').addClass("present");
    }
});


// item one: savebtn saves content of row to localStorage to be reconstituted on reload

// item two: past / present / future styling applied to rows or maybe just input based on time
/* 
If textContent of time-slot when converted to moment() format is less than current moment(), 
apply .past styling


*/