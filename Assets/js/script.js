var key = "4a02e9e0e56d95ec330273edf33d384c"
// var time = moment().format(MM/DD/YYYY);


function search(){
var searchCity = document.getElementById("search-text").value;
searchCity = searchCity.charAt(0).toUpperCase() + searchCity.slice(1);
localStorage.setItem("City", searchCity);
localStorage.getItem("City");
var searchedCity = document.createElement("BUTTON");
searchedCity.innerHTML=localStorage.getItem("City");
document.getElementById("search-text").appendChild(searchedCity);
console.log(searchedCity);
var urlOne = "https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&appid=" + key;
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
                        document.getElementById("city-res").textContent =  searchCity + moment().format(' (MM/DD/YYYY)');
                        document.getElementById("current-temp").textContent = "Temp: " + data.daily[0].temp.max
                        document.getElementById("current-wind").textContent = "Wind: " + data.daily[0].wind_speed
                        document.getElementById("current-hum").textContent = "Humidity: " + data.daily[0].humidity
                        document.getElementById("current-uv").textContent = "UV Index: " + data.daily[0].uvi
                        if (data.daily[0].uvi < 3) {
                            document.getElementById("current-uv").style.color = "green";
                        }
                        if (data.daily[0].uvi > 3 && data.daily[0].uvi <= 6) {
                            document.getElementById("current-uv").style.color = "yellow";
                        }
                        if (data.daily[0].uvi > 6 && data.daily[0].uvi <= 10) {
                            document.getElementById("current-uv").style.color = "red";
                        }

                        document.getElementById("date-one").textContent = moment().add(1, 'days').format(' (MM/DD/YYYY)');
                        document.getElementById("day-one-t").textContent = "Temp: " + data.daily[1].temp.max
                        document.getElementById("day-one-wind").textContent = "Wind: " + data.daily[1].wind_speed
                        document.getElementById("day-one-hum").textContent = "Humidity: " + data.daily[1].humidity

                        document.getElementById("date-two").textContent = moment().add(2, 'days').format(' (MM/DD/YYYY)');
                        document.getElementById("day-two-t").textContent = "Temp: " + data.daily[2].temp.max
                        document.getElementById("day-two-wind").textContent = "Wind: " + data.daily[2].wind_speed
                        document.getElementById("day-two-hum").textContent = " Humidity: " + data.daily[2].humidity

                        document.getElementById("date-three").textContent = moment().add(3, 'days').format(' (MM/DD/YYYY)');
                        document.getElementById("day-three-t").textContent = "Temp: " + data.daily[3].temp.max
                        document.getElementById("day-three-wind").textContent = "Wind: " + data.daily[3].wind_speed
                        document.getElementById("day-three-hum").textContent = "Humidity: " + data.daily[3].humidity

                        document.getElementById("date-four").textContent = moment().add(4, 'days').format(' (MM/DD/YYYY)');
                        document.getElementById("day-four-t").textContent = "Temp: " + data.daily[4].temp.max
                        document.getElementById("day-four-wind").textContent = "Wind: " + data.daily[4].wind_speed
                        document.getElementById("day-four-hum").textContent = "Humidity: " + data.daily[4].humidity

                        document.getElementById("date-five").textContent = moment().add(5, 'days').format(' (MM/DD/YYYY)');
                        document.getElementById("day-five-t").textContent = "Temp: " + data.daily[5].temp.max
                        document.getElementById("day-five-wind").textContent = "Wind: " + data.daily[5].wind_speed
                        document.getElementById("day-five-hum").textContent = "Humidity: " + data.daily[5].humidity
                        
                        document.getElementById("search-text").value = "";
                    }
                )
            )            
        }
    )
)
}


