const promoButton = document.querySelector(".promo__button");
const modal = document.querySelector(".modal");

promoButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === "Esc" || evt.key === "Escape") {
    evt.preventDefault();
    if (modal.classList.contains("modal-show")) {
      modal.classList.remove("modal-show");
    }
  }
});
