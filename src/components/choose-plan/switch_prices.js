"use strict";

(function () {
  const buttons = document.querySelectorAll(".cta-prices");
  const buttonsWrapper = document.getElementById("cta-buttons-wrapper");
  const businessPlanPrices = document.querySelector(".businessPlan");

  const ctaClick = function () {
    buttonsWrapper.dataset.activeBill = this.dataset.cta;
    if (buttonsWrapper.dataset.activeBill === "yearly") {
      businessPlanPrices.innerHTML = 280;
      businessPlanPrices.classList.add("price_amount_animate");
    } else {
      businessPlanPrices.innerHTML = 16;
    }
    buttons.forEach((e) => {
      e.classList.remove("active");
    });
    this.classList.add("active");
  };
  buttons.forEach((e) => {
    e.addEventListener("click", ctaClick);
  });
})();
