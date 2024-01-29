// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var now = moment(); // current date and time
    console.log(now.format('YYYY-MM-DD HH:mm:ss')); // format and print the date
  
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

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
});
