$(document).ready(function () {
// Geolocation with ip-api



  // Creatin variables
  var lat;
  var long;

  // Check & getting geolocation
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {

      lat = position.coords.latitude;
      long = position.coords.longitude;

      var api = 'https://api.apixu.com/v1/current.json?key=4f6ce05cdeca4ea09cb51926171902&q=' + lat + ',' + long + ''; // API url

      // Parsing the JSON data
      $.getJSON(api, function (data) {
        var weatherCond = data.current.condition.text;
        var weatherIcon = data.current.condition.icon;
        var city = data.location.name;
        var region = data.location.region;
        var tempF = data.current.temp_f;
        var tempC = data.current.temp_c;
        var tempS = true;

        // Showing weather data information
        $("#city").html(city);
        $("#reg").html(region);
        $("#icon").attr("src", weatherIcon);
        $("#cond").html(weatherCond);
        $("#temp").html(tempF + " &#8457;");
        // Showing celsius or farenheit.
        $("#temp").click(function () {
         
          if (tempS === false) {
            $("#temp").html(tempF + " &#8457;");
            
            tempS = true;
          } else {
            $("#temp").html(tempC + " &#8451;");
            tempS = false;
          }
        });
      });
    });
  }
});