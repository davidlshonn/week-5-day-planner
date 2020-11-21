$(document).ready(function () {
  var currentDateandTime = moment().format("dddd, MMMM Do YYYY, h:mm a");
  $("#currentDay").text(currentDateandTime);

  $(".saveBtn").on("click", function(){
      var userCalendarTask = $(this).siblings(".description").val();
      console.log(userCalendarTask);
    var timeBlockId = $(this).parent().attr("id");
   console.log(timeBlockId)
    localStorage.setItem(timeBlockId, userCalendarTask)
  })


  var taskFor8 = localStorage.getItem("8")
  $("#8 .description").val(taskFor8);
  var taskFor9 = localStorage.getItem("9")
  $("#9 .description").val(taskFor9);

});
