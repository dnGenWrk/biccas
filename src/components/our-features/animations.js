import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function sectionOurFeaturesAnimate() {
  const trigger = document.querySelector(".our-feat-trigger");
  const items = document.querySelectorAll(".feat-ico");

  gsap.from(items, {
    scrollTrigger: trigger,
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: 0.8,
  });
}

export default sectionOurFeaturesAnimate;
