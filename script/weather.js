let api = "";

let data = async function () {
    const response = await fetch(api);
    return await response.json();    
}

const icon = (image) => {
    let weathericon = document.getElementById("weather-image");
    while (weathericon.firstChild){
        weathericon.removeChild(weathericon.firstChild);
    }
    let element = document.createElement("img");
    element.setAttribute("src", image);
    element.setAttribute("alt","Weather");
    document.getElementById("weather-image").appendChild(element);
}

const clickTextBox = () => {
    document.getElementById("listOfItems").classList.toggle("listVisible");
}
 
const displayOnTextBox = () => {
    let item = document.querySelectorAll("#listOfItems li");
    for(let i = 0;i < item.length ; i++){
        item[i].onclick = function(){
            document.getElementById("input").value = this.innerText;
            getLocation();
            document.getElementById("listOfItems").classList.toggle("listVisible");
        }
    }
}

displayOnTextBox();

document.addEventListener('keyup',(e)=>{
    if(e.key === 'Enter'){
        getLocation();
        if(document.getElementById("listOfItems").classList.contains("listVisible")) {
            document.getElementById("listOfItems").classList.remove("listVisible");
        }
        else {
            document.getElementById("listOfItems").classList.add("listVisible");
        }
    }
})

const getLocation = () => {
    let input = document.querySelector('input').value;
    api = "http://localhost:3000";
    data()
    .then((response) => {
        const area = response.find((info) => info.location === input);
        console.log(area.location);
        document.getElementById("actual-temparature").innerHTML = area.tempC + "\u00B0";
        document.getElementById("feel-like-temparature").innerHTML = "Feels  " + area.condition.feelsLikeC + "\u00B0";
        if(area.condition.text == "Mist")
            {
                icon('./images/mist.png');
            }
        if(area.condition.text === "Partly cloudy")
            {
                icon('./images/partly-cloudy.png');
            }
        if(area.condition.text === "Sunny")
            {
                icon('./images/sun.png');
            }
        if(area.condition.text === "Clear")
            {
                icon('./images/sun.png');
            }
        if(area.condition.text === "Overcast")
            {
                icon('./images/overcast.png');
            }
        if(area.condition.text === "Light snow")
            {
                icon('./images/snowman.png');
            }
})
}