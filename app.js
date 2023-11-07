const input = document.querySelector(".input");
const add = document.querySelector(".add-btn");
const list = document.querySelector(".list");

add.addEventListener("click", () => {
  if (!input.value) {
    alert("Please enter a value");
  } else {
    let li = document.createElement("li");
    // console.log("lı olustu");
    list.appendChild(li);

    li.setAttribute("class", "li-items");

    let lineDraw = document.createElement("i");
    li.appendChild(lineDraw);
    lineDraw.setAttribute("class", "fa-solid fa-check");

    let pEl = document.createElement("span");
    li.appendChild(pEl);
    pEl.textContent = input.value;

    let deleteButton = document.createElement("i");
    li.appendChild(deleteButton);
    deleteButton.setAttribute("class", "fa fa-trash");

    input.value = "";

    let reset = document.querySelector(".reset");

    lineDraw.addEventListener("click", () => {
      pEl.style.textDecoration = "line-through";
      reset.style.display = "block";
      reset.addEventListener("click", () => {
        if (pEl.style.textDecoration == "line-through") {
          li.remove();
          reset.style.display = "none";
        }
      });
    });
  }
});

list.addEventListener("click", (e) => {
  if (e.target.className === "fa fa-trash") {
    let listItems = e.target.parentElement;
    list.removeChild(listItems);
  }
});
