const addBtn = document.querySelector(".add-btn");
const modalContainer = document.querySelector(".modal-container");
const form = document.querySelector(".book-form");
const cancelBtn = document.querySelector(".cancel-btn");

addBtn.addEventListener("click", modalAppear);

form.addEventListener("submit", (event) => event.preventDefault());
form.addEventListener("submit", modalDisappear);

cancelBtn.addEventListener("click", modalDisappear);

function modalAppear() {
  modalContainer.classList.remove("hidden");
  modalContainer.classList.add("flex", "justify-center", "items-center");
}

function modalDisappear() {
  modalContainer.classList.add("hidden");
  modalContainer.classList.remove("flex", "justify-center", "items-center");
}
