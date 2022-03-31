var textArea = $('.past')
var currentTime = moment().format("MMM Do, YYYY"); 

var timeBlock = $('.time-block')
var saveBtn = $('.saveBtn')
var planner = [];
$("#currentDay").text(currentTime)

var currentHour = moment().hour() - 7;

var hoursArray = ["8", "9", "10", "11", "12", "13", "14", "15", "16"]

function init() {
    checkHour();
    getLocalStorage();
   
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


function getLocalStorage() {
    storedPlanner = JSON.parse(localStorage.getItem("planner"));
    
    console.log(storedPlanner);

    for(i=0; i < storedPlanner.length; i++) {
        var hourObj = storedPlanner[i].hour;
        if(hourObj) {
            $('#' + hourObj).text(storedPlanner[i].planner)
        } 
    }
 
}



$("button").click(setLocalStorage) 


function setLocalStorage() {
    
    var storedHour =  $(this).attr("data-hour");
    var storedPlanner = $('#' + storedHour);
   
    planner.push({
        hour: storedHour,
        planner: storedPlanner.val()
    })
    localStorage.setItem("planner", JSON.stringify(planner))
}

init();