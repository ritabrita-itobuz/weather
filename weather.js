async function weather() {
    const response = await fetch("http://api.weatherapi.com/v1/current.json?key=0c80b2b56f1943ada19100744230103&q=London&aqi=no");
	// const data = await response.json();
    return await response.json();
	// console.log(data);
    // show();
    
}

let result=weather()
.then((res)=>{
    console.log(res);
    document.getElementById("location").innerHTML= res.location.name;
    document.getElementById("temparature").innerHTML= res.current.temp_f + "\u00B0";
    document.getElementById("feel-temparature").innerHTML= "Feels " +res.current.feelslike_f + "\u00B0";

    // if(res.current.text === "Clear")
    
})



