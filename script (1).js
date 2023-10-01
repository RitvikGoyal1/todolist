const btn = document.getElementById('submitBtn');
const inp = document.getElementById('taskInput'); 
const addto = document.getElementById('Hello');
btn.addEventListener('click', () => {
  const x = inp.value;
  if (x === '') {
    alert("Blank Field... Please write a task before submitting!");
  }
  else{
  const listItem = document.createElement('p');
  listItem.textContent = x;
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'X';
  deleteButton.addEventListener('click', () => {
    addto.removeChild(listItem);
  });
  addto.appendChild(listItem);
  listItem.appendChild(deleteButton);
  inp.value = '';
  };})
