// Get the clock element from the HTML document
const clockElement = document.getElementById("clock");

// Set the time zone offset for London in minutes
const timeZoneOffset = 60;

// Update the clock every second
setInterval(function() {
  // Get the current time in London
  const currentTime = new Date(new Date().getTime() + timeZoneOffset * 60 * 1000);

  // Get the hour, minute, and second from the current time
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  // Calculate the angle for each clock hand
  const hourAngle = (hours / 12) * 360;
  const minuteAngle = (minutes / 60) * 360;
  const secondAngle = (seconds / 60) * 360;

  // Rotate the clock hands to the correct angle
  document.getElementById("hour-hand").style.transform = `rotate(${hourAngle}deg
