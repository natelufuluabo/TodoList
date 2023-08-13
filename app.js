// Select Elements
const addInput = document.querySelector("#addInput");
const addTodoButton = document.querySelector("#addTodoButton");
const todosContainer = document.querySelector("#todosContainer");

// Functions 
const addToDo = (id, value, container) => {
    const newElement = document.createElement("div");
    newElement.classList.add("todo");
    const editInputId = `editInput-${id}`;
    const updateTodoButtonId = `updateTodoButton-${id}`;
    const buttonsContainerId = `buttonsContainer-${id}`;
    const todoTextId = `todoText-${id}`;
    const editButtonId = `editButton-${id}`;
    const deleteButtonId = `deleteButton-${id}`;
    const inputContainerId = `inputContainer-${id}`;
    newElement.innerHTML = `
        <div id=${inputContainerId} class="inputContainer hidden">
            <input id=${editInputId} class="addInput" type="text" placeholder="Enter to do here" />
            <button id=${updateTodoButtonId} class="addTodoButton">Update</button>
        </div>
        <p id=${todoTextId} class="todoText">${value}</p>
        <div id=${buttonsContainerId} class="buttonsContainer">
            <span id=${editButtonId}>Edit</span>
            <span id=${deleteButtonId}>Delete</span>
        </div>
    `;
    container.append(newElement);
};

let id = 0;

addTodoButton.addEventListener("click", () => {
    const value = addInput.value;
    if (value.length === 0) return;
    addToDo(id, value, todosContainer);
    id++;
    addInput.value = "";
    // const editButton = document.querySelectorAll("#editButton");
    // const editInput = document.querySelectorAll("#editInput");
    // const todo = document.querySelectorAll(".todo");
    // const todo2 = document.querySelectorAll(".todo2");
    // const todoText = document.querySelectorAll("#todoText");
    // const buttonsContainer = document.querySelectorAll("#buttonsContainer");
    // const inputContainer = document.querySelectorAll("#inputContainer");
    // editButton.forEach((button) => {
    //     button.addEventListener("click", () => {
    //         // editInput.forEach((input) => {
    //         //     input.value = 
    //         // });
    //         todo.forEach((todo) => {
    //             todo.classList.add("todo2");
    //         });
    //         todo2.forEach((todo) => {
    //             todo.classList.remove("todo");
    //         });
    //         todoText.forEach((text) => {
    //             text.classList.add("hidden");
    //         });
    //         buttonsContainer.forEach((container) => {
    //             container.classList.add("hidden");
    //         });
    //         inputContainer.forEach((container) => {
    //             container.classList.remove("hidden");
    //         });
    //     });
    // });
    // document.querySelector("#editButton").addEventListener("click", () => {
    //     document.querySelector("#editInput").value = document.querySelector("#todoText").innerHTML;
    // });

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

