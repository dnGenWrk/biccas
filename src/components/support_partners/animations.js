import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function supportPartnersAnimate() {
  const triggerBlock = document.querySelector(".support-partners-block");
  const stars = document.querySelectorAll(".str-animate");
  const partnSup = document.querySelector(".partners-support-wrp1");
  const iconsSet = document.querySelectorAll(".support-partners-icons");
  const iconContainer = document.querySelectorAll(".icon-container");

  //const t2 = gsap.timeline();
  gsap.from(stars, {
    scrollTrigger: triggerBlock,
    fill: "#BBBBBB",
    // opacity: 0,
    duration: 0.6,
    stagger: 0.2,
  });
  gsap.from(iconContainer, {
    scrollTrigger: triggerBlock,
    opacity: 0,
    width: 0,
    height: 0,
    duration: 0.65,
    stagger: 0.4,
  });

  gsap.from(iconsSet, {
    scrollTrigger: triggerBlock,
    // fill: "#BBBBBB",
    // opacity: 0,
    //stroke: "#BBBBBB",
    y: 50,
    duration: 0.65,
    stagger: 0.4,
  });
}

export default supportPartnersAnimate;
