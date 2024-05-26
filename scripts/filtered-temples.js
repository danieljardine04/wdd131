var paraEl = document.getElementById('currentyear');
var paragraphEl = document.getElementById('lastModified');
paraEl.textContent = "©2024 Daniel Jardine New York";
paragraphEl.textContent = document.lastModified;
var listEl = document.querySelectorAll('.active');
var gridSection = document.querySelector('.grid');
 
 

// listEl.forEach(function(link){
//   link.addEventListener('click', function(event){
//     var h2El = document.getElementById('text');
//     event.preventDefault();
//     h2El.textContent = this.textContent;
//     if(h2El.textContent = "Large"){
//       makeTempleCards(temples.filter(temple => {temple.area.includes(temple.area > 90000);
//       }))
//     }
// })
// });

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', function(){
  mainnav.classList.toggle('show');
  hambutton.classList.toggle('show');
});



const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Rio de Janeiro Brasil",
    location: "Rio de Janiero, Brasil",
    dedicated: "2022, May, 8",
    area: 29966,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rio-de-janeiro-brazil/400x250/1-001db7326e638032470a02813c9e47191ef74b0e.jpeg"
  },
  {
    templeName: "Salt Lake City Utah",
    location: "Salt Lake City Utah",
    dedicated: "1893, April, 6",
    area: 253000,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple5.jpg"
  },
  {
    templeName: "Boston Massachusetts",
    location: "Boston, Massachusetts",
    dedicated: "2000, October, 1",
    area: 69600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/boston-massachusetts/400x250/boston-temple-lds-945541-wallpaper.jpg"
  }
];

makeTempleCards(temples);

function makeTempleCards(temps){
  gridSection.innerHTML = "";
  temps.forEach(function(temple){
    let card = document.createElement("div");
    let name = document.createElement('h3');
    let location = document.createElement('p');
    let dedication = document.createElement('p');
    let area = document.createElement('p');
    let img = document.createElement('img');

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`
    area.innerHTML = `<span class="label">Area:</span> ${temple.area}`
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    gridSection.appendChild(card);

  })
    
  }

  listEl.forEach(function(link){
    link.addEventListener('click', function(event){
      var h2El = document.getElementById('text');
      event.preventDefault();
      h2El.textContent = this.textContent;
      if(h2El.textContent == "Home"){
        makeTempleCards(temples);
      }
      if(h2El.textContent == "Old"){
        var newTemples = [];
        temples.filter(temple => {
          var yearString = temple.dedicated.substring(0, 4);
          var year = parseInt(yearString);
          if(year <= 1900){
            newTemples.push(temple);
          }
          
        })
        makeTempleCards(newTemples);
      }
      if(h2El.textContent == "New"){
        var newTemples = [];
        temples.filter(temple => {
          var yearString = temple.dedicated.substring(0, 4);
          var year = parseInt(yearString);
          if(year >= 2000){
            newTemples.push(temple);
          }
          
        })
        makeTempleCards(newTemples);
      }
      if(h2El.textContent == "Large"){
        var newTemples = [];
        temples.filter(temple => {
          if(temple.area > 90000){
            newTemples.push(temple);

          }

        })
        makeTempleCards(newTemples);
      }
      if(h2El.textContent == "Small"){
        var newTemples = [];
        temples.filter(temple => {
          if(temple.area < 10000){
            newTemples.push(temple);

          }

        })
        makeTempleCards(newTemples);
      }
  })
  });

  