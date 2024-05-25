const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
  displayList(chapter);
});

button.addEventListener('click', function(){
  if(input.value != ""){
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = '';
    input.focus();
  }
  else {
    const liEl = document.createElement('li');
    const deleteButton = document.createElement('button');

    liEl.textContent = input.value;
    deleteButton.textContent = "❌";
    liEl.append(deleteButton);
    list.append(liEl);

    deleteButton.addEventListener('click', function(){
      list.removeChild(liEl);
      input.focus();
      input.value = '';
    })
    
  }
})

function displayList(item){
  const liEl = document.createElement('li');
    const deleteButton = document.createElement('button');

    liEl.textContent = item;
    deleteButton.textContent = "❌";
    liEl.append(deleteButton);
    list.append(liEl);

    deleteButton.addEventListener('click', function(){
      list.removeChild(liEl);
      deleteChapter(liEl.textContent);
      input.focus();
      input.value = '';
});
}

function setChapterList(){
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList(){
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter){
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter((item) => item !== chapter);
  setChapterList();
}