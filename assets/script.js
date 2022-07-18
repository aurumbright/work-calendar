let dateDisplayEl = $('#currentDay');

// Clock for top of app
let currentDay = moment().format("dddd MMM Do YYYY hh:mm:ss a");
dateDisplayEl.text(currentDay);

function updateDay() {
    currentDay = moment().format("dddd MMM Do YYYY hh:mm:ss a");
    dateDisplayEl.text(currentDay);
};

// Changes colors of rows based on current time
function colorChange() {
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
}

// Last item: savebtn saves content of row to localStorage to be reconstituted on reload

let entry1 = document.getElementById("entry1");
let entry2 = document.getElementById('entry2');
let entry3 = document.getElementById('entry3');
let entry4 = document.getElementById('entry4');
let entry5 = document.getElementById('entry5');
let entry6 = document.getElementById('entry6');
let entry7 = document.getElementById('entry7');
let entry8 = document.getElementById('entry8');
let entry9 = document.getElementById('entry9');
let entry10 = document.getElementById('entry10');

let saveButtons = document.getElementsByClassName("saveBtn");

for (const saveBtn of saveButtons) {
    saveBtn.addEventListener("click", function onClick() {
        let today = {
            savedEntry1: entry1.value.trim(),
            savedEntry2: entry2.value.trim(),
            savedEntry3: entry3.value.trim(),
            savedEntry4: entry4.value.trim(),
            savedEntry5: entry5.value.trim(),
            savedEntry6: entry6.value.trim(),
            savedEntry7: entry7.value.trim(),
            savedEntry8: entry8.value.trim(),
            savedEntry9: entry9.value.trim(),
            savedEntry10: entry10.value.trim()
        };

        localStorage.setItem("today", JSON.stringify(today));
    });
};

let todaysTodos = JSON.parse(localStorage.getItem("today"));

function reconstituteTodos() {
    if (todaysTodos !== null) {
        entry1.value = todaysTodos.savedEntry1;
        entry2.value = todaysTodos.savedEntry2;
        entry3.value = todaysTodos.savedEntry3;
        entry4.value = todaysTodos.savedEntry4;
        entry5.value = todaysTodos.savedEntry5;
        entry6.value = todaysTodos.savedEntry6;
        entry7.value = todaysTodos.savedEntry7;
        entry8.value = todaysTodos.savedEntry8;
        entry9.value = todaysTodos.savedEntry9;
        entry10.value = todaysTodos.savedEntry10;
    } else {
        return;
    }
};

// For clearing local storage and reloading the page
let btnClear = document.getElementById('clear');

btnClear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});

// calling the various functions
setInterval(updateDay, 1000);
colorChange();
setInterval(colorChange, 60000);
reconstituteTodos();

/*

Soggy version:

let entry1 = document.getElementById('entry1');
let entry2 = document.getElementById('entry2');
let entry3 = document.getElementById('entry3');
let entry4 = document.getElementById('entry4');
let entry5 = document.getElementById('entry5');
let entry6 = document.getElementById('entry6');
let entry7 = document.getElementById('entry7');
let entry8 = document.getElementById('entry8');
let entry9 = document.getElementById('entry9');
let entry10 = document.getElementById('entry10');

let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');
let btn6 = document.getElementById('btn6');
let btn7 = document.getElementById('btn7');
let btn8 = document.getElementById('btn8');
let btn9 = document.getElementById('btn9');
let btn10 = document.getElementById('btn10');

//first entry
btn1.addEventListener("click", function() {
    localStorage.setItem('todo1', entry1.value);
});
entry1.value = localStorage.getItem('todo1');

// next entry
btn2.addEventListener("click", function() {
    localStorage.setItem('todo2', entry2.value);
});
entry2.value = localStorage.getItem('todo2');

//next entry
btn3.addEventListener("click", function() {
    localStorage.setItem('todo3', entry3.value);
});
entry3.value = localStorage.getItem('todo3');

//next entry
btn4.addEventListener("click", function() {
    localStorage.setItem('todo4', entry4.value);
});
entry4.value = localStorage.getItem('todo4');

//next entry
btn5.addEventListener("click", function() {
    localStorage.setItem('todo5', entry5.value);
});
entry5.value = localStorage.getItem('todo5');

//next entry
btn6.addEventListener("click", function() {
    localStorage.setItem('todo6', entry6.value);
});
entry6.value = localStorage.getItem('todo6');

//next entry
btn7.addEventListener("click", function() {
    localStorage.setItem('todo7', entry7.value);
});
entry7.value = localStorage.getItem('todo7');

//next entry
btn8.addEventListener("click", function() {
    localStorage.setItem('todo8', entry8.value);
});
entry8.value = localStorage.getItem('todo8');

//next entry
btn9.addEventListener("click", function() {
    localStorage.setItem('todo9', entry9.value);
});
entry9.value = localStorage.getItem('todo9');

//next entry
btn10.addEventListener("click", function() {
    localStorage.setItem('todo10', entry10.value);
});
entry10.value = localStorage.getItem('todo10');
*/
