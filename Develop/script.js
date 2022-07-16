let dateDisplayEl = $('#currentDay');

let timeSlot = $('.time-slot').text();

// this is wrong I think 
let time = dayjs(timeSlot, 'h a').format('h a');



// Clock for top of app
let currentDay = dayjs().format("dddd MMM D YYYY hh:mm:ss a");
dateDisplayEl.text(currentDay);

function updateDay() {
    currentDay = dayjs().format("dddd MMM D YYYY hh:mm:ss a");
    dateDisplayEl.text(currentDay);
};
setInterval(updateDay, 1000);

// this sort of works but needs to be applied to each row - maybe a forEach?
// still not working...

$('.row').each(function(index) {

    if (dayjs().isBefore(dayjs(time, 'hour'))) {
        $('input').addClass("future");
    } else if (dayjs().isAfter(dayjs(time, 'hour'))) {
        $('input').addClass("past");
    } else {
        $('input').addClass("present");
    }
});


// item one: savebtn saves content of row to localStorage to be reconstituted on reload
// this will probably be setting it as placeholder text? or something like that

// item two: past / present / future styling applied to rows or maybe just input based on time
/* 
If textContent of time-slot when converted to dayjs() format is less than current dayjs(), 
apply .past styling


*/