const addBtn = document.querySelector(".add-btn");
const modal = document.querySelector(".modal");
const form = document.querySelector(".book-form");
const cancelBtn = document.querySelector(".cancel-btn");

addBtn.addEventListener("click", () => modal.showModal());

form.addEventListener("submit", (event) => event.preventDefault());
form.addEventListener("submit", () => modal.close());

cancelBtn.addEventListener("click", () => modal.close());
