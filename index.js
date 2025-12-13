async function getTemp(x){
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(x)}?key=FGUH84J4RUTKF4JCPMQHZGSP2`)
    const data = await response.json();
    console.log(data);
}
const form = document.getElementById("cityForm");
const input = document.getElementById("cityInput");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log(input.value)
    const x = input.value    
    console.log(x)
    console.log(encodeURIComponent(x))
    getTemp(x)
})
