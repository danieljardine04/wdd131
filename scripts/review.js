var paraEl = document.getElementById('currentyear');
var paragraphEl = document.getElementById('lastModified');
var inputEl = document.getElementById('submit-add');
count = 0;
var divEl = document.getElementById('completed');
var pEl = document.createElement('p');
pEl.textContent = `${getCounter()} forms have been submitted.`;
divEl.appendChild(pEl);

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