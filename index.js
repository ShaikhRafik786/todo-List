let addTodo = document.getElementById("add");
// let adddelet = document.getElementById("delet");
let toDoList = document.getElementById("list");
let inputField = document.getElementById("inputField");

addTodo.addEventListener("click",  function () {
    var paragraph = document.createElement("p");
    paragraph.innerHTML = inputField.value;
    paragraph.classList.add("para");
    toDoList.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function () {
     paragraph.style.textDecoration = "line-through";
    });
paragraph.addEventListener('dblclick', function() {
    toDoList.removeChild(paragraph);
   });
});
























