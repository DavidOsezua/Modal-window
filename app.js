"use scrict";
const btnList = document.querySelectorAll(".show-modal");
const close = document.querySelector(".close-btn");
const modal = document.querySelector(".modal");
const overLay = document.querySelector(".overlay");

function openModal() {
  modal.classList.remove("hidden");
  overLay.classList.remove("hidden");
}
function closeModal() {
  modal.classList.add("hidden");
  overLay.classList.add("hidden");
}

for (let i = 0; i < btnList.length; i++)
  btnList[i].addEventListener("click", openModal);

overLay.addEventListener("click", closeModal);
close.addEventListener("click", closeModal);
