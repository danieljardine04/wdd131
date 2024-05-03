const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


button.addEventListener('click', function(){
  if(input.value === ""){
    return input.focus();
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
    input.focus();
  }
})