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
form.addEventListener("submit", addData);

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
  const rowList = document.querySelectorAll("tr");
  const lastRow = rowList[rowList.length - 1];
  const th = document.createElement("th");

  lastRow.appendChild(th);
  for (let i = 0; i < 4; i++) {
    const td = document.createElement("td");
    lastRow.appendChild(td);
  }
}

function convertStatus(status) {
  if (status === true) {
    return "Read";
  } else {
    return "Not Read";
  }
}

function addData() {
  const tableHeadings = document.querySelectorAll("th");
  const tableTitle = tableHeadings[tableHeadings.length - 1];

  const tableData = document.querySelectorAll("td");
  const tableAuthor = tableData[tableData.length - 4];
  const tablePages = tableData[tableData.length - 3];
  const tableStatus = tableData[tableData.length - 2];
  const tableAction = tableData[tableData.length - 1];

  tableTitle.textContent = `${library[library.length - 1].title}`;
  tableAuthor.textContent = `${library[library.length - 1].author}`;
  tablePages.textContent = `${library[library.length - 1].pages}`;
  tableStatus.textContent = `${convertStatus(
    library[library.length - 1].status
  )}`;
  tableAction.textContent = "Remove";
}
