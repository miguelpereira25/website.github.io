<html>
header {
  display: none;
}
<head>
  <title>London Time Clock</title>
  <style>
    /* Add some style to the clock */
    #clock {
      font-size: 48px;
      font-weight: bold;
      text-align: center;
      background-color: lightgray;
      padding: 20px;
      border-radius: 10px;
    }
  </style>
</head>
<body>
  <!-- Add a div to display the clock -->
  <div id="clock"></div>

  <script>
    // Set the time zone offset for London in minutes
    const timeZoneOffset = 60;

    // Update the clock every second
    setInterval(function() {
      // Get the current time in London
      const currentTime = new Date(new Date().getTime() + timeZoneOffset * 60 * 1000);

      // Format the time as a string (e.g. "12:34:56")
      const timeString = currentTime.toTimeString().slice(0, 8);

      // Update the clock element with the current time
      document.getElementById("clock").innerText = timeString;
    }, 1000);
  </script>
</body>
</html>
