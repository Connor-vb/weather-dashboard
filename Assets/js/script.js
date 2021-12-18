var key = "4a02e9e0e56d95ec330273edf33d384c"
var testCity = "San Francisco"



function search(){
var searchCity = document.getElementById("search-text").value;
var urlOne = "http://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&appid=" + key;
console.log(searchCity);
fetch (urlOne).then(
    res=>res.json().then(
        data=>{
            console.log(data)
            var lat = data.coord.lat
            var lon = data.coord.lon
            var urltwo = "http://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + key
            fetch (urltwo).then(
                res=>res.json().then(
                    data=>{
                        console.log(data)
                        document.getElementById("current-temp").textContent = "Temp: " + data.daily[0].temp.max
                        document.getElementById("current-wind").textContent = "Wind: " + data.daily[0].wind_speed
                        document.getElementById("current-hum").textContent = "Humidity: " + data.daily[0].humidity
                        document.getElementById("current-uv").textContent = "UV Index: " + data.daily[0].uvi

                        document.getElementById("day-one-t").textContent = "Temp: " + data.daily[1].temp.max
                        document.getElementById("day-one-wind").textContent = "Wind: " + data.daily[1].wind_speed
                        document.getElementById("day-one-hum").textContent = "Humidity: " + data.daily[1].humidity

                        document.getElementById("day-two-t").textContent = "Temp: " + data.daily[2].temp.max
                        document.getElementById("day-two-wind").textContent = "Wind: " + data.daily[2].wind_speed
                        document.getElementById("day-two-hum").textContent = " Humidity: " + data.daily[2].humidity

                        document.getElementById("day-three-t").textContent = "Temp: " + data.daily[3].temp.max
                        document.getElementById("day-three-wind").textContent = "Wind: " + data.daily[3].wind_speed
                        document.getElementById("day-three-hum").textContent = "Humidity: " + data.daily[3].humidity

                        document.getElementById("day-four-t").textContent = "Temp: " + data.daily[4].temp.max
                        document.getElementById("day-four-wind").textContent = "Wind: " + data.daily[4].wind_speed
                        document.getElementById("day-four-hum").textContent = "Humidity: " + data.daily[4].humidity

                        document.getElementById("day-five-t").textContent = "Temp: " + data.daily[5].temp.max
                        document.getElementById("day-five-wind").textContent = "Wind: " + data.daily[5].wind_speed
                        document.getElementById("day-five-hum").textContent = "Humidity: " + data.daily[5].humidity

                    }
                )
            )            
        }
    )
)
}

