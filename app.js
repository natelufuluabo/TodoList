// Select Elements
const addInput = document.querySelector("#addInput");
const addTodoButton = document.querySelector("#addTodoButton");
const todosContainer = document.querySelector("#todosContainer");

// Functions 
const addToDo = (id, value, container) => {
    const newElement = document.createElement("div");
    newElement.classList.add("todo");
    newElement.setAttribute('id', `todo-${id}`);
    const editInputId = `editInput-${id}`;
    const updateTodoButtonId = `updateTodoButton-${id}`;
    const buttonsContainerId = `buttonsContainer-${id}`;
    const todoTextId = `todoText-${id}`;
    const editButtonId = `editButton-${id}`;
    const deleteButtonId = `deleteButton-${id}`;
    const inputContainerId = `inputContainer-${id}`;
    const todoContainerId = `todo-${id}`;

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

    const todoContainer = document.querySelector(`#${todoContainerId}`);
    const editButton = document.querySelector(`#${editButtonId}`);
    const updateTodoButton = document.querySelector(`#${updateTodoButtonId}`);
    const editInput = document.querySelector(`#${editInputId}`);
    const todoText = document.querySelector(`#${todoTextId}`);
    const buttonsContainer = document.querySelector(`#${buttonsContainerId}`);
    const inputContainer = document.querySelector(`#${inputContainerId}`);

    editButton.addEventListener("click", () => {
        editInput.value = todoText.innerHTML;
        todoContainer.classList.add("todo2");
        todoContainer.classList.remove("todo");
        todoText.classList.add("hidden");
        buttonsContainer.classList.add("hidden");
        inputContainer.classList.remove("hidden");
    });

    updateTodoButton.addEventListener("click", () => {
        todoText.innerHTML = editInput.value;
        todoContainer.classList.add("todo");
        todoContainer.classList.remove("todo2");
        todoText.classList.remove("hidden");
        buttonsContainer.classList.remove("hidden");
        inputContainer.classList.add("hidden");
    });
};

let id = 0;

addTodoButton.addEventListener("click", () => {
    const value = addInput.value;
    if (value.length === 0) return;
    addToDo(id, value, todosContainer);
    id++;
    addInput.value = "";
});

