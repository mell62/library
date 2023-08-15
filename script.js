const addBtn = document.querySelector(".add-btn");
const modal = document.querySelector(".modal");
const form = document.querySelector(".book-form");

addBtn.addEventListener("click", () => modal.showModal());

form.addEventListener("submit", (event) => event.preventDefault());
form.addEventListener("submit", () => modal.close());
