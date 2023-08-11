// Select Elements
const addInput = document.querySelector("#addInput");
const addTodoButton = document.querySelector("#addTodoButton");
const todosContainer = document.querySelector("#todosContainer");


addTodoButton.addEventListener("click", () => {
    const newElement = document.createElement("div");
    newElement.classList.add("todo")
    const value = addInput.value;
    newElement.innerHTML = `
        <div id="inputContainer" class="inputContainer hidden">
            <input id="editInput" class="addInput" type="text" placeholder="Enter to do here" />
            <button id="updateTodoButton" class="addTodoButton">Update</button>
        </div>
        <p id="todoText" class="todoText">${value}</p>
        <div id="buttonsContainer" class="buttonsContainer">
            <span id="editButton">Edit</span>
            <span id="deleteButton">Delete</span>
        </div>
    `;
    todosContainer.append(newElement);
    document.querySelector("#editButton").addEventListener("click", () => {
        document.querySelector("#editInput").value = document.querySelector("#todoText").innerHTML;
        document.querySelector(".todo").classList.add("todo2");
        document.querySelector(".todo2").classList.remove("todo");
        document.querySelector("#todoText").classList.add("hidden");
        document.querySelector("#buttonsContainer").classList.add("hidden");
        document.querySelector("#inputContainer").classList.remove("hidden");
    });

    document.querySelector("#updateTodoButton").addEventListener("click", () => {
        document.querySelector("#todoText").innerHTML = document.querySelector("#editInput").value;
        document.querySelector(".todo2").classList.add("todo");
        document.querySelector(".todo").classList.remove("todo2");
        document.querySelector("#todoText").classList.remove("hidden");
        document.querySelector("#buttonsContainer").classList.remove("hidden");
        document.querySelector("#inputContainer").classList.add("hidden");
    });
    addInput.value = "";
});

