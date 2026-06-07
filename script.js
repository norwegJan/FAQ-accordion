// DECLARE VARIABLES

const accordionBtns = document.querySelectorAll(".accordion-btn");
const btnIconSpans = document.querySelectorAll(".btn-icon");

const iconPlus = `<img src="./assets/images/icon-plus.svg" alt="" />`;
const iconMinus = `<img src="./assets/images/icon-minus.svg" alt="" />`;

const answers = document.querySelectorAll(".answer");

// DECLARE FUNCTIONS

function initAccordion() {
  btnIconSpans.forEach((span) => {
    span.innerHTML = iconPlus;
  });
}

// INIT APP

initAccordion();
