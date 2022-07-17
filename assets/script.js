let dateDisplayEl = $('#currentDay');

// Clock for top of app
let currentDay = moment().format("dddd MMM Do YYYY hh:mm:ss a");
dateDisplayEl.text(currentDay);

function updateDay() {
    currentDay = moment().format("dddd MMM Do YYYY hh:mm:ss a");
    dateDisplayEl.text(currentDay);
};
setInterval(updateDay, 1000);

// Changes colors of rows based on current time
$('.row').each(function () {

    let time = $(this).children('.time-slot').text().trim();
    let workBlock = $(this).children('.time-block');
    let now = moment();

    $(".hour").removeClass(".present .past .future");


    if ((moment(time, 'h a')).isSame(now, 'hour')) {
        $(workBlock).addClass("present");
        $(workBlock).removeClass("past");
        $(workBlock).removeClass("future");

        console.log("present");

    } else if (moment(time, 'h a') > now) {
        $(workBlock).addClass("future");
        $(workBlock).removeClass("present");
        $(workBlock).removeClass("past");

        console.log("future");

    } else if (now > (moment(time, 'h a'))) {
        $(workBlock).addClass("past");
        $(workBlock).removeClass("present");
        $(workBlock).removeClass("future");

        console.log("past");
    }
});

// Last item: savebtn saves content of row to localStorage to be reconstituted on reload

// localStorage.setItem("entry", JSON.stringify(entry));