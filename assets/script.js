var textArea = $('.past')
var currentTime = moment().format("dddd MMM Do, YYYY");

var timeBlock = $('.time-block')
var saveBtn = $('.saveBtn')
// array for the stored inputs by user
var planner = [];
var storedPlanner;

// Display the current time in the Jumbotron header
$("#currentDay").text(currentTime)

var currentHour = moment().hour();

// Array for the working hours
var hoursArray = ["8", "9", "10", "11", "12", "13", "14", "15", "16"]

function init() {
    storedPlanner = JSON.parse(localStorage.getItem("planner"));

    // This makes it not an empty array planner when we refresh the page.
    if (storedPlanner !== null) {
        planner = storedPlanner
    }

    checkHour();
    renderPlanner();
}

// check the time to see what color class should be displayed
function checkHour() {

    for (i = 0; i < hoursArray.length; i++) {
        var whatHour = $('#' + hoursArray[i])
        if (hoursArray[i] == currentHour) {
            whatHour.addClass('present')
        } else if (hoursArray[i] > currentHour) {
            whatHour.addClass('future')
        }
    }

}

// Render the users input back onto the page if they refresh the page
function renderPlanner() {
    for (i = 0; i < planner.length; i++) {
        var hourObj = storedPlanner[i].hour;
        if (hourObj) {
            $('#' + hourObj).text(storedPlanner[i].planner)
        }
    }

}

// Get stored items from local storage
function storePlanner() {
    storedPlanner = JSON.parse(localStorage.getItem("planner"));
}



$("button").click(setLocalStorage)

// Set the stored data and push it to the planner array
function setLocalStorage() {

    var storedHour = $(this).attr("data-hour");
    var storedPlanner = $('#' + storedHour);

    planner.push({
        hour: storedHour,
        planner: storedPlanner.val().trim()
    })
    localStorage.setItem("planner", JSON.stringify(planner))
    storePlanner();
}

// reloaded page init function will call the necessary functions back to display the data to the user
init();