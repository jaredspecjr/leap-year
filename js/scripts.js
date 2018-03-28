var leapYear = function(year) {
  if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
};

$(document).ready(function(){
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    debugger;
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    $("#result").text(result);
  });
});
