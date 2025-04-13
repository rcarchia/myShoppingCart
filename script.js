const list = document.querySelector("ul");
const input = document.querySelector("input");
const buttons = document.querySelector("button")



buttons.addEventListener("click", () => {
  const listItem = document.createElement("li");
  const span = document.createElement("span");
  
  span.textContent = input.value;
  input.value = "";

  const button = document.createElement("button");
  button.textContent = "Delete";

  button.addEventListener("click", () => {
    list.removeChild(listItem);
  })

  listItem.appendChild(span);
  listItem.appendChild(button);
  list.appendChild(listItem);

  input.focus();
})

