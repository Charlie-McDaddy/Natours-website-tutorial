const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup__close");
const modalBookBtn = document.querySelector(".modal-book-btn");
const popupBtn = document.querySelectorAll(".modal-btn");

for (let i = 0; i < popupBtn.length; i++) {
  popupBtn[i].addEventListener("click", function () {
    popup.classList.add("popup-open");
  });
}

popup.addEventListener("click", function () {
  popup.classList.remove("popup-open");
});

popupClose.addEventListener("click", function () {
  popup.classList.remove("popup-open");
});

modalBookBtn.addEventListener("click", function () {
  popup.classList.remove("popup-open");
});

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape" || e.key === "Enter") {
    if (popup.classList.contains("popup-open")) {
      popup.classList.remove("popup-open");
    }
  }
});
