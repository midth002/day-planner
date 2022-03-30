var textArea = $('.past')
var currentTime = moment().format("MMM Do, YYYY"); 
$("#currentDay").text(currentTime)

var currentHour = moment().hour() - 7;

var hoursArray = ["8", "9", "10", "11", "12", "13", "14", "15", "16"]

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


checkHour();