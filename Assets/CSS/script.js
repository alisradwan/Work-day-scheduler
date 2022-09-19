// Display today Time
var currentTime = moment().format("dddd, MMM Do YYYY");
$("#currentDay").html(currentTime);

$(window).ready(function () {
  $(".saveBtn").on("click", function () {
    var Notice = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, Notice);
  });

  function timeTracker() {
    var timeNow = moment().hour();
    $(".time-block").each(function () {
      var blockTime = parseInt($(this).attr("id").split("hour")[1]);

      // too check the time and chnges the classes for the background

      if (timeNow > blockTime) {
        $(this).css({ "background-color": "#d3d3d3" });
      } else if (timeNow < blockTime) {
        $(this).css({ "background-color": "#77dd77" });
      } else {
        $(this).css({ "background-color": "#ff6961" });
      }
    });
  }

  $("#9AM .description").val(localStorage.getItem("9AM"));
  $("#10AM .description").val(localStorage.getItem("10AM"));
  $("#11AM .description").val(localStorage.getItem("11AM"));
  $("#12PM .description").val(localStorage.getItem("12PM"));
  $("#1PM .description").val(localStorage.getItem("1PM"));
  $("#2PM .description").val(localStorage.getItem("2PM"));
  $("#3PM .description").val(localStorage.getItem("3PM"));
  $("#4PM .description").val(localStorage.getItem("4PM"));
  $("#5PM .description").val(localStorage.getItem("5PM"));

  timeTracker();
});
