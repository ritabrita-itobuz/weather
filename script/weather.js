
var api = "";

var data = async function () {
    const response = await fetch(api);
    return await response.json();    
}
let icon = (image) => {
    let weathericon = document.getElementById("weather-image");
    while (weathericon.firstChild){
        weathericon.removeChild(weathericon.firstChild);
    }
    let element = document.createElement("img");
    element.setAttribute("src", image);
    element.setAttribute("alt","Weather");
    document.getElementById("weather-image").appendChild(element);

}
function getLocation() {
    let val = document.querySelector('input').value;
    api = "http://api.weatherapi.com/v1/current.json?key=0c80b2b56f1943ada19100744230103&q=" + val + "&aqi=no";
    console.log(api);
    data()
    .then((response)=>{
        console.log(response);
        document.getElementById("actual-temparature").innerHTML = response.current.temp_c + "\u00B0";
        document.getElementById("feel-like-temparature").innerHTML = "Feels  " + response.current.feelslike_c + "\u00B0";
        if(response.current.condition.text == "Mist")
            {
                icon('images/mist.png');
            }
        if(response.current.condition.text == "Partly Cloudy")
            {
                icon('images/partly-cloudy.png');
            }
        if(response.current.condition.text == "Sunny")
            {
                icon('images/sun.png');
            }
        if(response.current.condition.text == "Overcast")
            {
                icon('images/overcast.png');
            }
        
})
}

document.addEventListener('keyup',(e)=>{
    if(e.key==='Enter'){
        console.log(e);
        getLocation();
    }
})



