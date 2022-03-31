var textArea = $('.past')
var currentTime = moment().format("dddd MMM Do, YYYY"); 

var timeBlock = $('.time-block')
var saveBtn = $('.saveBtn')
var planner = [];
var storedPlanner;
$("#currentDay").text(currentTime)

var currentHour = moment().hour();

var hoursArray = ["8", "9", "10", "11", "12", "13", "14", "15", "16"]

function init() {
    storedPlanner = JSON.parse(localStorage.getItem("planner"));

    // This makes it not an empty array planner when we refresh the page.
    if(storedPlanner !== null) {
        planner = storedPlanner
    }
    
    checkHour();
    renderPlanner();  
}

function checkHour() {

    for (i=0; i < hoursArray.length; i++) {
        var whatHour = $('#' + hoursArray[i])
        if(hoursArray[i] == currentHour) {
           whatHour.addClass('present')
        } else if (hoursArray[i] > currentHour) {
            whatHour.addClass('future') 
        }
    }
 
}


function renderPlanner() {
    // 
    for(i=0; i < planner.length; i++) {
        var hourObj = storedPlanner[i].hour;
        if(hourObj) {
            $('#' + hourObj).text(storedPlanner[i].planner)
        } 
    }
 
}

function storePlanner() {
    storedPlanner = JSON.parse(localStorage.getItem("planner"));
}



$("button").click(setLocalStorage) 


function setLocalStorage() {
    
    var storedHour =  $(this).attr("data-hour");
    var storedPlanner = $('#' + storedHour);
    
    planner.push({
        hour: storedHour,
        planner: storedPlanner.val().trim()
    })
    localStorage.setItem("planner", JSON.stringify(planner))
    storePlanner();
}

init();