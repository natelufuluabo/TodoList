// Select Elements
const addInput = document.querySelector("#addInput");
const addTodoButton = document.querySelector("#addTodoButton");
const todosContainer = document.querySelector("#todosContainer");


addTodoButton.addEventListener("click", () => {
    const newElement = document.createElement("div");
    newElement.classList.add("todo")
    const value = addInput.value;
    newElement.innerHTML = `
        <p class="todoText">${value}</p>
        <div class="buttonsContainer">
            <span>Edit</span>
            <span>Delete</span>
        </div>
    `;
    todosContainer.append(newElement);
    addInput.value = "";
});