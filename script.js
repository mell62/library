const addBtn = document.querySelector(".add-btn");
const modal = document.querySelector(".modal");
const form = document.querySelector(".book-form");
const cancelBtn = document.querySelector(".cancel-btn");
const tbody = document.querySelector("tbody");
const library = [];

addBtn.addEventListener("click", () => modal.showModal());

form.addEventListener("submit", (event) => event.preventDefault());
form.addEventListener("submit", addToLibrary);
form.addEventListener("submit", addRow);
form.addEventListener("submit", addCells);
form.addEventListener("submit", () => modal.close());

cancelBtn.addEventListener("click", () => modal.close());

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addToLibrary() {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const status = document.querySelector("#status").checked;
  const newBook = new Book(title, author, pages, status);

  library.push(newBook);
}

function addRow() {
  const tr = document.createElement("tr");
  tbody.appendChild(tr);
}

function addCells() {
  const trList = document.querySelectorAll("tr");
  const newRow = trList[trList.length - 1];
  const th = document.createElement("th");

  newRow.appendChild(th);
  for (let i = 0; i < 4; i++) {
    const td = document.createElement("td");
    newRow.appendChild(td);
  }
}
