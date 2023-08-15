const addBtn = document.querySelector(".add-btn");
const modalContainer = document.querySelector(".modal-container");

addBtn.addEventListener("click", modalAppear);

// function modalAppear() {
//   modalContainer.classList.remove("hidden");
//   modalContainer.classList.add("flex", "justify-center", "items-center");
// }

function modalAppear() {
  modalContainer.classList.remove("hidden");
  modalContainer.classList.add("flex", "justify-center", "items-center");
}
