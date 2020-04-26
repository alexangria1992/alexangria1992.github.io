var weatherCondition = "";
var currentTemperature = 0;

var xhttp = new XMLHttpRequest();

    if (!(window.XMLHttpRequest)) {
        // code for IE6, IE5
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    xhttp.open('GET', "http://api.openweathermap.org/data/2.5/weather?q=Auckland,NZ&appID=22c32b90db3c2eafd271a4c2f21ac7ea", true);

    xhttp.onload = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText);
            var weatherData = data.weather[0];
            weatherCondition = weatherData.main;
            var temperatureData = data.main;
            currentTemperature = parseInt(temperatureData.temp) - 273.15; //Convert from Kelvin to Celsius
        }
    }

xhttp.send();