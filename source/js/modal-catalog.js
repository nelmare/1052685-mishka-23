const cardButtons = document.querySelectorAll('.cards__button');
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal__content");

cardButtons.forEach(cardButton => {
  cardButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.add("modal-show");
  })
})

modalContent.addEventListener("click", function (evt) {
  evt.stopPropagation();
});

modal.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === "Esc" || evt.key === "Escape") {
    evt.preventDefault();
    if (modal.classList.contains("modal-show")) {
      modal.classList.remove("modal-show");
    }
  }
});
