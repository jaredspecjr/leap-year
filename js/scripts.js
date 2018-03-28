$(document).ready(function(){
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    debugger;
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    $("#result").text(result);
  });
    var leapYear = function(year) {
      return false;
    }
});
