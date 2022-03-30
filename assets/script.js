var hourDiv = $('.hour')
var currentTime = moment().format("MMM Do, YYYY"); 
$("#currentDay").text(currentTime)

var currentHour = moment().hour();
console.log(typeof currentHour)
var hoursArray = ["8", "9", "10", "11", "12", "13", "14", "15", "16"]

function checkHour() {
    for(i=0; i < hoursArray.length; i++) {
     if(hoursArray[i] == currentHour) {
         
         console.log(hoursArray[i] + " Is the current hour")
     }
        
      
       

    }
}

checkHour();