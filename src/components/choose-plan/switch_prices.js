"use strict";
import { gsap } from "gsap";

(function () {
  const buttons = document.querySelectorAll(".cta-prices");
  const buttonsWrapper = document.getElementById("cta-buttons-wrapper");
  const businessPlanPrices = document.querySelector(".businessPlan");
  const proPlanPrices = document.querySelector(".proPlan");

  const animate = {
    fontSize: 120,
    y: -10,
    x: -10,
    opacity: 0,
    duration: 1.2,
  };

  const ctaClick = function () {
    buttonsWrapper.dataset.activeBill = this.dataset.cta;
    if (buttonsWrapper.dataset.activeBill === "yearly") {
      gsap.from(businessPlanPrices, animate);
      gsap.from(proPlanPrices, animate);
      businessPlanPrices.innerHTML = 280;
      proPlanPrices.innerHTML = 200;
    } else {
      gsap.from(businessPlanPrices, animate);
      gsap.from(proPlanPrices, animate);
      businessPlanPrices.innerHTML = 16;
      proPlanPrices.innerHTML = 8;
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
