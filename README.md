<!DOCTYPE html>
<html>
<head>
  <title>London Time Clock</title>
  <style>
    /* Add some style to the clock */
    .clock {
      width: 300px;
      height: 300px;
      border-radius: 50%;
      border: 10px solid black;
      position: relative;
    }
    .clock .face {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: white;
      border-radius: 50%;
    }
    .clock .hand {
      width: 50%;
      height: 10px;
      background-color: black;
      position: absolute;
      top: 50%;
      left: 50%;
      transform-origin: 100%;
      transform: rotate(90deg);
      transition: transform 0.1s linear;
    }
    .clock .hand.hour {
      width: 70%;
    }
    .clock .digital {
      font-size: 48px;
      font-weight: bold;
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  </style>
</head>
<body>
  <!-- Add a div to display the clock -->
  <div id="clock" class="clock">
    <!-- Add a div to display the clock face -->
    <div class="face"></div>
    <!-- Add divs to display the clock hands -->
    <div id="hour-hand" class="hand hour"></div>
    <div id="minute-hand" class="hand"></div>
    <div id="second-hand" class="hand"></div>
    <!-- Add a div to display the digital time -->
    <div id="digital" class="digital"></div>
  </div>

  <script>
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
      document.getElementById("hour-hand").style.transform = `rotate(${hourAngle}deg)`;
      document.getElementById("minute-hand").style.transform = `rotate(${minuteAngle
