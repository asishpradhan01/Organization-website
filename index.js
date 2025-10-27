const hamburgerMenu = document.querySelector(".hamburger-menu");
const ListItems = document.querySelector(".list-items");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  ListItems.classList.toggle("active");
});

document.querySelectorAll(".nav-item").forEach((n) =>
  n.addEventListener("click", () => {
    hamburgerMenu.classList.remove("active");
    ListItems.classList.remove("active");
  })
);

const buttons = document.querySelectorAll("[data-curasel-bttn]");

buttons.forEach((buttons) => {
  buttons.addEventListener("click", () => {
    const offset = buttons.dataset.bttn === "next" ? 1 : -1;
    const slides = buttons
      .closest("[data-caurosel]")
      .querySelector("[data-slides]");

    const activeSlide = document.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});
