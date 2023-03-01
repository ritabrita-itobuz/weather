async function weather() {
    const response = await fetch("http://api.weatherapi.com/v1/current.json?key=0c80b2b56f1943ada19100744230103&q=London&aqi=no");
	const data = await response.json();
	console.log(data);
    // show();
}

weather();
document.getElementById("location").innerHTML= data.location.name;
// function show() {
//     let location = document.querySelector("#location");
//     location.innerHTML = data;
// }