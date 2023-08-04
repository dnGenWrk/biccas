import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function pricesSectionAnimate() {
  const trigger = document.querySelector(".choose-plan-section");

  gsap.from(trigger, {
    scrollTrigger: trigger,
    opacity: 0,
    y: 150,
    opacity: 0,
    duration: 1.6,
  });
}

export default pricesSectionAnimate;
