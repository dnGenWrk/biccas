import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function partnersAnimate() {
  const partnersItems = document.querySelectorAll(".partners-features-logo-wrapper");
  const partnersSectionTrigger = document.querySelector(".partners-features-logo-block");
  gsap.from(partnersItems, {
    scrollTrigger: partnersSectionTrigger,
    y: 50,
    opacity: 0,
    duration: 0.6,
    stagger: 0.4,
  });
}

export default partnersAnimate;
