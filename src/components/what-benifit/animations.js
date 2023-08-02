import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function sectionWhatBenefitsAnimate() {
  const trigger = document.querySelector(".what-benifit-section");
  const list = document.querySelectorAll(".wht-benefit-anim-list li");
  const imgAnimateLeft = document.querySelectorAll(".wht-benefit-img-anim-left");
  const imgAnimateRight = document.querySelectorAll(".wht-benefit-img-anim-right");

  gsap.from(list, {
    scrollTrigger: trigger,
    x: -50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.4,
  });

  gsap.from(imgAnimateLeft, {
    scrollTrigger: trigger,
    x: 100,
    y: 100,
    opacity: 0,
    duration: 1.2,
    stagger: 0.6,
  });

  gsap.from(imgAnimateRight, {
    scrollTrigger: trigger,
    x: -100,
    opacity: 0,
    duration: 1.2,
  });
}

export default sectionWhatBenefitsAnimate;
