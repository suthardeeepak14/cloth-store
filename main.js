const bars = document.querySelectorAll(".bar");
const nav = document.querySelector(".navbar");
const closeButtons = document.getElementsByClassName("close");

bars.forEach((bar) => {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
});

Array.from(closeButtons).forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

const products = document.querySelectorAll(".pro");

products.forEach((product) => {
  product.addEventListener("click", function () {
    window.location.href = "product.html";
  });
});
