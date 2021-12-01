// Load HTML & CSS

$(document).ready(function(){

    // Display current time / date

    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    // assign click listener for save button
    $(".saveBtn").on("click", function () {
        // Get values
        console.log(this);
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // save items in local storage
        localStorage.setItem(time, text);   
    })
    // load saved data from local storage, divided by each hour in military time format
    $("#hour6 .description").val(localStorage.getItem("hour6"));
    $("#hour7 .description").val(localStorage.getItem("hour7"));
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
    $("#hour18 .description").val(localStorage.getItem("hour18"));
    $("#hour19 .description").val(localStorage.getItem("hour19"));
    $("#hour20 .description").val(localStorage.getItem("hour20"));

    // track hours
    function hourTracker() {
        // current hours count
        var currentHour = moment().hour();

        // time block loop
        $(".time-block").each(function () {
            var sectionHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log( sectionHour, currentHour)

            // check current time. Make color change for the past
            if (sectionHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (sectionHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("future");
                $(this).removeClass("present");                
            }
            else  {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");                
            }
        })
    }
    hourTracker();
})