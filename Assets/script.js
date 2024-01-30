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

  // Add click event listener for save buttons
  $('.saveBtn').on('click', function() {
    // Get the corresponding textarea and its value
    var textarea = $(this).siblings('.description');
    var textValue = textarea.val();

    // Get the id of the parent time-block div
    var timeBlockId = $(this).parent().attr('id');

    // Save the user input to localStorage using the timeBlockId as the key
    localStorage.setItem(timeBlockId, textValue);
  });

  // Retrieve values from localStorage and set the textarea values accordingly
  $('.time-block').each(function() {
    var timeBlockId = $(this).attr('id');
    var storedValue = localStorage.getItem(timeBlockId);

    // Set the textarea value if there is a stored value
    if (storedValue !== null) {
      $(this).find('.description').val(storedValue);
    }
  });

  // Display the current date in the header of the page
  function displayCurrentDay() {
    var currentDate = moment().format('dddd MMMM Do, YYYY');
    $("#currentDay").text(currentDate);
  }
  displayCurrentDay();
});
