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

$('.row').each(function () {

    let time = $(this).children('.time-slot').text().trim();
    let workBlock = $(this).children('.time-block');
    let now = moment();

    $(workBlock).removeClass(".present .past .future");

    if (now > (moment(time, 'h a'))) {
        $(workBlock).addClass("past");
        $(workBlock).removeClass("present");
        $(workBlock).removeClass("future");

        console.log("past");

    } else if (moment(time, 'h a') > now) {
        $(workBlock).addClass("future");
        $(workBlock).removeClass("present");
        $(workBlock).removeClass("past");

        console.log("future");

    } else {
        $(workBlock).addClass("present");
        $(workBlock).removeClass("past");
        $(workBlock).removeClass("future");

        console.log("present");
    }
});
