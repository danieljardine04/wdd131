var paraEl = document.getElementById('currentyear');
var paragraphEl = document.getElementById('lastModified');
var buttonEl = document.getElementById("create");
var divEl = document.querySelector(".container");
var journalsEl = document.querySelector(".journals");
var entriesEl = document.querySelector(".entries");
var submitButton = document.getElementById('submitButton');
var currentJournal = 0;
var idCount = 0;

paraEl.textContent = "©2024 Daniel Jardine New York";
paragraphEl.textContent = document.lastModified;

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', function(){
  mainnav.classList.toggle('show');
  hambutton.classList.toggle('show');
});

var journalHolder = [];

function createJournal(){
  console.log("The Journey begins");
  let journal = []
  // let form = document.createElement('form');
  let label = document.createElement('label');
  let input = document.createElement('input');
  let button = document.createElement('button'); 
  
  label.textContent = "What would you like to name your Journal.";
  input.setAttribute('type', 'text');
  button.textContent = "Create Journal";
  

  divEl.appendChild(label);
  divEl.appendChild(input);
  divEl.appendChild(button)
  // divEl.appendChild(form);

  button.addEventListener("click", function() {
    console.log("Hello can you see me?")
    buttonEl.classList.remove('incognito');
    journalEntry = {
      name: input.value,
      entries: [],
      id: idCount
    };
    journal.push(journalEntry);
    journalHolder.push(journal);
    idCount++
    saveCurrentJournal();
    console.log("I made it here");
    addJournal();
    console.log("Completed");
    divEl.innerHTML = "";

  });
}

function addJournal(){
  if(journalsEl){
    journalsEl.innerHTML = "";
  journalHolder.forEach(journal => {
    var div = document.createElement("div");
    var h2 = document.createElement("h2");
    var a = document.createElement("a");
    var openButton = document.createElement('button');
    

    div.classList.add("card");
    h2.textContent = journal[0].name;
    // console.log(journal[0].entries[0].name);
    a.setAttribute('href', "./entries.html");
    openButton.textContent = "Open Journal";

    a.appendChild(openButton);
    div.appendChild(h2);
    div.appendChild(a);
    journalsEl.appendChild(div);

    saveJournal();
     openButton.addEventListener("click", function(){
      if(currentJournal !== journal[0].id){
        currentJournal = journal[0].id;
        saveCurrentJournal();

      }
      console.log(currentJournal);
      
      addEntries()

     })
     

  })
}
}


function saveJournal(){
  localStorage.setItem('journals', JSON.stringify(journalHolder));

}

function saveCurrentJournal(){
  localStorage.setItem('currentJournal', JSON.stringify(currentJournal));
  localStorage.setItem('journalid', JSON.stringify(idCount));
}

function loadJournals(){
  var journal = JSON.parse(localStorage.getItem('journals'));
  if(!journal){
    journal = [];
  } else{
    journalHolder = journal;
    addJournal();
    console.log(journalHolder[1][0]);
  }
}

function loadCurrentJournal(){
  var cJournal = JSON.parse(localStorage.getItem('currentJournal'));
  var journalId = JSON.parse(localStorage.getItem('journalid'));
  if(!cJournal){
    currentJournal = 0;
    

  }else {
    currentJournal = cJournal;
    idCount = journalId;
  }
  if(!journalId){
    journalId = 0;
  } else {
    idCount = journalId;
  }
}

function addEntries(){
  entriesEl.innerHTML = "";
  var entries = journalHolder[currentJournal][0].entries;
  for(i = 0; i < entries.length; i++) {
    var entry = entries[i];
    let entrydiv = document.createElement("div");
    let entryName = document.createElement("h3");
    let entrySummary = document.createElement("p");


    entrydiv.classList.add("entry");
    entryName.textContent = entry.name;
    entrySummary.textContent = entry.summary;
    entrydiv.appendChild(entryName);
    entrydiv.appendChild(entrySummary);
    entriesEl.appendChild(entrydiv);

  }
}

function addJournalEntry(){
  if(journalHolder[currentJournal][0]){
    loadJournals();
    let inputName = document.getElementById('entryName');
    let entryText = document.getElementById('entryText');
    let entry = {
      name: inputName.value,
      summary: entryText.value
    }
    var entries = journalHolder[currentJournal][0].entries;
    entries.push(entry);
    saveJournal();
    console.log("GoodJob!");
    
    
  }
}
if(submitButton){
  console.log("Yo you made it");
  
  submitButton.addEventListener("click", function(){
     addJournalEntry();
     console.log("Journal Entry complete my dude");
   })
}

if(buttonEl){
  buttonEl.addEventListener("click", function(){
    buttonEl.classList.add("incognito");
    createJournal();
  });

}

loadJournals();
loadCurrentJournal();
if(entriesEl){
  addEntries();
}