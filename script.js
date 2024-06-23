const inputBox = document.getElementById("input-box");
const listCont = document.getElementById("list-cont");
const listsCont2 = document.getElementById("list-cont2");
const listsCont3 = document.getElementById("list-cont3");
const listsCont4 = document.getElementById("list-cont4");

function saveData() {
  localStorage.setItem("data", listCont.innerHTML);
}

function showData() {
  listCont.innerHTML = localStorage.getItem("data");
}

function addDragAndDropHandlers(element) {
  element.addEventListener("dragstart", function (e) {
    e.dataTransfer.setData("text/plain", e.target.id);
    e.dataTransfer.effectAllowed = "move";
    setTimeout(() => {
      e.target.style.display = "none";
    }, 0);
  });

  element.addEventListener("dragend", function (e) {
    e.target.style.display = "block";
  });
}

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    li.className = "list";
    li.setAttribute("draggable", true);
    addDragAndDropHandlers(li);
    listCont.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listCont.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

listsCont2.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

listsCont3.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

listsCont4.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

showData();

// DRAG

let lists = document.getElementsByClassName("list");
let listCont1 = document.getElementById("cont1");
let listCont2 = document.getElementById("cont2");
let listCont3 = document.getElementById("cont3");
let listCont4 = document.getElementById("cont4");

for (list of lists) {
  list.addEventListener("dragstart", function (e) {
    let selected = e.target;
    cont2.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    cont2.addEventListener("drop", function (e) {
      cont2.appendChild(selected);
      selected = null;
    });
    cont1.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    cont1.addEventListener("drop", function (e) {
      cont1.appendChild(selected);
      selected = null;
    });
    cont3.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    cont3.addEventListener("drop", function (e) {
      cont3.appendChild(selected);
      selected = null;
    });
    cont4.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    cont4.addEventListener("drop", function (e) {
      cont4.appendChild(selected);
      selected = null;
    });
  });
}
