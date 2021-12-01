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
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    // track hours
    function hourTracker() {
        // current hours count
        var currentHour = moment().hour();

        // time block loop
        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log( blockHour, currentHour)

            // check current time. Make color change
            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }










        })
    }
    hourTracker();
})