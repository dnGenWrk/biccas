"use strict";

(function () {
  const buttons = document.querySelectorAll(".cta-prices");
  const buttonsWrapper = document.getElementById("cta-buttons-wrapper");
  const ctaClick = function () {
    buttonsWrapper.dataset.activeBill = this.dataset.cta;
    buttons.forEach((e) => {
      e.classList.remove("active");
    });
    this.classList.add("active");

    console.log(this.dataset.cta);
  };
  buttons.forEach((e) => {
    e.addEventListener("click", ctaClick);
  });
  console.log("!!! Switch prices test");
})();
