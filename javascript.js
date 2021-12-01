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











































})