var paraEl = document.getElementById('currentyear');
var paragraphEl = document.getElementById('lastModified');
paraEl.textContent = "©2024 Daniel Jardine New York";
paragraphEl.textContent = document.lastModified;
var listEl = document.querySelectorAll('.active');

 
 

listEl.forEach(function(link){
  link.addEventListener('click', function(event){
    var h2El = document.getElementById('text');
    event.preventDefault();
    h2El.textContent = this.textContent;
})
});

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', function(){
  mainnav.classList.toggle('show');
  hambutton.classList.toggle('show');
});