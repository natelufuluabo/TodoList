// Select Elements
const addInput = document.querySelector("#addInput");
const addTodoButton = document.querySelector("#addTodoButton");
const todosContainer = document.querySelector("#todosContainer");


addTodoButton.addEventListener("click", () => {
    const newElement = document.createElement("div");
    const value = addInput.value;
    newElement.innerHTML = `
        <p>${value}</p>
        <div>
            <span>Edit</span>
            <span>Delete</span>
        </div>
    `;
    todosContainer.append(newElement);
    addInput.value = "";
});