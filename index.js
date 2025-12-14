async function getTemp(x){
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(x)}?key=FGUH84J4RUTKF4JCPMQHZGSP2`)
    const data = await response.json();
    console.log(data)
    return data
}
const form = document.getElementById("cityForm");
const input = document.getElementById("cityInput");

form.addEventListener("submit", async function(event) {
    event.preventDefault();
    console.log(input.value)
    const x = input.value    
    console.log(x)
    console.log(encodeURIComponent(x))
    const getData = await getTemp(x)
    console.log(getData)
    const week = parseData(getData.days)
    createGrid(week)
})

function parseData(array){
    const week = []
    for (let index = 0; index < 7; index++) {
        const element = array[index];
        week.push(element)
    }
    return week
}

function createGrid(array){
    const container = document.createElement("div");
    container.classList.add("container");
    const addTo = document.querySelector("body");
    addTo.appendChild(container);
    array.forEach((div) => {
        const day = document.createElement("div");
        container.appendChild(day);
    });
}
function sayHi(nme, hello){
    greeting(nme)
}

function greeting(nme){
    console.log(`hello! ${nme}`)
}
