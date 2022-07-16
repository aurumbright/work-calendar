let dateDisplayEl = $('#currentDay');

// Clock for top of app
let currentDay = moment().format("dddd MMM Do YYYY hh:mm:ss a");
dateDisplayEl.text(currentDay);

function updateDay() {
    currentDay = moment().format("dddd MMM Do YYYY hh:mm:ss a");
    dateDisplayEl.text(currentDay);
};
setInterval(updateDay, 1000);

// item one: savebtn saves content of row to localStorage to be reconstituted on reload

// localStorage.setItem("entry", JSON.stringify(entry));


// item two: past / present / future styling applied to rows or maybe just input based on time
/* 
If textContent of time-slot when converted to moment() format is less than current moment(), 
apply .past styling
*/

// make sure to only addClass to input child of current row element

// may need to add array for rows to loop through as ids


$('.row').each(function() {

    let timeSlot = $('.time-slot').text();
    let time = moment(timeSlot, 'h a');

    if (moment(time, 'h a').isBefore(moment())) {
        $(this).children('input').addClass("past");
        $(this).children('input').removeClass("present");
        $(this).children('input').removeClass("future");

    } else if (moment(time, 'h a').isAfter(moment())) {
        $(this).children('input').addClass("future");
        $(this).children('input').removeClass("present");
        $(this).children('input').removeClass("past");

    } else {
        $(this).children('input').addClass("present");
        $(this).children('input').removeClass("past");
        $(this).children('input').removeClass("future");
    }
});