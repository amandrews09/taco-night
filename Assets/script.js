
var now = moment(); // current date and time
    console.log(now.format('YYYY-MM-DD HH:mm:ss')); // format and print the date

   
  
$(document).ready(function () {


  // Get the current hour
var currentHour = new Date().getHours();

// Loop through each time-block div
document.querySelectorAll('.time-block').forEach(function(timeBlock) {
  // Get the hour from the id
  var hour = parseInt(timeBlock.id.split('-')[1]);

  // Compare the hour with the current hour
  if (hour < currentHour) {
    timeBlock.classList.add('past');
    timeBlock.classList.remove('present', 'future');
  } else if (hour === currentHour) {
    timeBlock.classList.add('present');
    timeBlock.classList.remove('past', 'future');
  } else {
    timeBlock.classList.add('future');
    timeBlock.classList.remove('past', 'present');
  }
});


  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  function displayCurrentDay() {
    var currentDate = moment().format('dddd MMMM Do, YYYY');
    $("#currentDay").text(currentDate);
}
displayCurrentDay();
});
