const input = document.querySelector(".input");
const addBtn = document.querySelector(".add-btn");
const list = document.querySelector(".list");
const reset = document.querySelector(".reset");

addBtn.addEventListener("click", () => {
  let mesaj = input.value;

  if (!mesaj) {
    alert("Please enter a text");
  } else {
    const li = document.createElement("li");
    list.appendChild(li);
    li.setAttribute("class", "li-item");

    li.style.listStyleType = "none";

    const tik = document.createElement("i");
    li.appendChild(tik);
    tik.setAttribute("class", "fa-solid fa-check");

    const text = document.createElement("span");
    li.appendChild(text);
    text.textContent = mesaj;

    const delBtn = document.createElement("i");
    li.appendChild(delBtn);
    delBtn.setAttribute("class", "fa fa-trash");

    input.value = "";
    input.focus();

    tik.addEventListener("click", () => {
      text.style.textDecoration = "line-through";
      text.style.color = "red";
      reset.style.display = "block";
      reset.addEventListener("click", () => {
        if ((text.style.color = "red")) {
          li.remove();
          reset.style.display = "none";
        }
      });
    });

    delBtn.addEventListener("click", () => {
      list.removeChild(li);
    });
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addBtn.click();
  }
});

window.addEventListener("load", () => {
  input.focus();
});
