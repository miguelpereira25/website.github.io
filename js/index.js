// Get the clock element from the HTML document
const clockElement = document.getElementById("clock");

// Set the time zone offset for London in minutes
const timeZoneOffset = 60;

// Update the clock every second
setInterval(function() {
  // Get the current time in London
  const currentTime = new Date(new Date().getTime() + timeZoneOffset * 60 * 1000);

  // Format the time as a string (e.g. "12:34:56")
  const timeString = currentTime.toTimeString().slice(0, 8);

  // Update the clock element with the current time
  clockElement.innerText = timeString;
}, 1000);
