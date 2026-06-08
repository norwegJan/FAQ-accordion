// DECLARE VARIABLES

const accordionBtns = document.querySelectorAll(".accordion-btn");

const iconPlus = `<img src="./assets/images/icon-plus.svg" alt="" />`;
const iconMinus = `<img src="./assets/images/icon-minus.svg" alt="" />`;

// DECLARE FUNCTIONS

function initAccordion() {
  const btnIconSpans = document.querySelectorAll(".btn-icon");

  btnIconSpans.forEach((span) => {
    span.innerHTML = iconPlus;
  });
}

function toggleAnswer(event) {
  const button = event.currentTarget;
  const iconSpan = button.querySelector(".btn-icon");
  const answerId = button.getAttribute("aria-controls");
  const answer = document.getElementById(answerId);
  const isExpanded = button.getAttribute("aria-expanded") === "true";
  const shouldExpand = !isExpanded;

  if (shouldExpand) {
    button.setAttribute("aria-expanded", "true");
    answer.classList.remove("hidden");
    button.classList.add("active");
    iconSpan.innerHTML = iconMinus;
  } else {
    button.setAttribute("aria-expanded", "false");
    answer.classList.add("hidden");
    button.classList.remove("active");
    iconSpan.innerHTML = iconPlus;
  }
}

// ADD EVENT LISTENERS

accordionBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    toggleAnswer(event);
  });
});

// INIT APP

initAccordion();
