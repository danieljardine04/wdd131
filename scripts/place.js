var temp = 50
var speed = 5

var paraEl = document.getElementById('currentyear');
var paragraphEl = document.getElementById('lastModified');
var para = document.getElementById('country');
para.textContent = "Brazil";
paraEl.textContent = "©2024 Daniel Jardine New York";
paragraphEl.textContent = document.lastModified;

let ulEl = document.getElementById('list');
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");



li1.innerText = "Temperature: 10";
li2.innerText = "Conditions: Partly Cloudy";
li3.innerText = "Wind: 5km/h";


ulEl.appendChild(li1);
ulEl.appendChild(li2);
ulEl.appendChild(li3);


function calculateWindChill(temperature, windspeed){
  return (35.74 + 0.6215*temperature) - (35.75*(windspeed**0.16)) + (0.4275*temperature)*(windspeed**0.16);
}

if(temp <= 50 && speed > 3){
  let windChill = calculateWindChill(temp, speed);
  let li4 = document.createElement("li");
  li4.innerText = 'Wind Chill: ${windChill}';
  ulEl.appendChild(li4);
}