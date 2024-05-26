var paraEl = document.getElementById('currentyear');
var paragraphEl = document.getElementById('lastModified');
var inputEl = document.getElementById('submit-add');
var count = 0;
var divEl = document.getElementById('completed');
var pEl = document.createElement('p');
pEl.textContent = `${getCounter} forms have been submitted.`;


paraEl.textContent = "©2024 Daniel Jardine New York";
paragraphEl.textContent = document.lastModified;



const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
]


function loadSelectOptions(list){
  getCounter();
  list.forEach(product => {
    let selectEl = document.getElementById('product');
    let option = document.createElement('option');
    option.setAttribute("value", `${product.id}`);
    option.text = product.name;
    selectEl.appendChild(option);
  })
}

loadSelectOptions(products);

function countForms(){
  localStorage.setItem('counter', JSON.stringify(count));
}

function getCounter(){
  var counter = JSON.parse(localStorage.getItem('counter'));
  if(!counter){
    count = 0;
  }
  else {
    count = counter;
  }
  return counter;

}

inputEl.addEventListener('click', function(){
  count++
  countForms();

})



