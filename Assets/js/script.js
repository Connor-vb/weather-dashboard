var key = "4a02e9e0e56d95ec330273edf33d384c"
var testCity = "San Francisco"
var searchCity = document.getElementById("search-text").value
var urlOne = "http://api.openweathermap.org/data/2.5/weather?q=" + testCity + "&appid=" + key

function search(){
    console.log(searchCity)


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
                        document.getElementById("current-temp").textContent = "current temp: " + data.daily[0].temp.max
                    }
                )
            )            
        }
    )
)
}