const activeClass = "active";

const headings = document.querySelectorAll("h2");

headings[0].classList.add(activeClass);
headings[0].nextElementSibling.classList.add(activeClass);

function toggleExpandCollapse() {
  this.classList.toggle(activeClass);
  this.nextElementSibling.classList.toggle(activeClass);
}

headings.forEach((item) => {
  item.addEventListener("click", toggleExpandCollapse);
});
