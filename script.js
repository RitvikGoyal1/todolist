const btn = document.getElementById("enter");
const inp =document.getElementById("input"); 
const addto = document.getElementById("tasks");
btn.addEventListener("click", () => {
  const x = inp.value;
  if (x == '') {
    alert("Blank Field... Please write a task before submitting!");
  }
  else{
  const task = document.createElement("p");
  task.textContent = x;
  const crossout = document.createElement("button");
  crossout.textContent = "x";
  crossout.addEventListener("click", () => {
    addto.removeChild(task);
  });
  addto.appendChild(task);
  task.appendChild(crossout);
  inp.value = '';
  };})
