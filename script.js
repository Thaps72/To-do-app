// 1. Data
let tasks = ["Milk", "Sugar", "Bread", "Click Here"];
// 2. Target UL
let todoList = document.getElementById("todoList");
let addButton = document.getElementById("addBtn");
// 3. Loop and add items
tasks.forEach(function (task) {
  let li = document.createElement("li"); // create <li>
  li.textContent = task; // put text inside
  li.className = "list-group-item"; // add bootstrap style
  todoList.appendChild(li); // attach to <ul>
});

addButton.addEventListener("click", function () {
  console.log("Button was clicked!");
});
