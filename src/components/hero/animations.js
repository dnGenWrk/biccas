import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";
//import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
//import { TextPlugin } from "gsap/dist/TextPlugin";
//gsap.registerPlugin(MotionPathPlugin);

function heroAnimations() {
  const headeritemsAnimate = {
    animObj1: document.getElementById("pathsh1"),
    animObj2: document.querySelector(".hero-custom-img-block"),
    animObj3: document.querySelector(".hero-custom-pic2"),
    animObj4: document.querySelector(".mess-1"),
    animObj5: document.querySelector(".hero-custom-shape1"),
  };
  const t1 = gsap.timeline();
  t1.from(headeritemsAnimate.animObj1, {
    opacity: 0,
    width: 0,
    stroke: "#222",
    strokeWidth: 0,
    duration: 1.2,
    delay: 0.5,
  });
  t1.from(headeritemsAnimate.animObj2, {
    backgroundColor: "transparent",
    duration: 0.8,
    delay: 0.2,
  });

  t1.from(headeritemsAnimate.animObj3, {
    x: -55,
    y: 90,
    duration: 1,
    ease: "power3.out",
  });
  t1.from(
    headeritemsAnimate.animObj4,
    {
      opacity: 1,
      y: 300,
      duration: 3,
      delay: 1.6,
      ease: "power3.out",
    },
    0.5
  );
  t1.from(
    headeritemsAnimate.animObj5,
    {
      opacity: 0,
      width: 0,
      x: -250,
      duration: 0.9,
      ease: "power3.out",
    },
    3.7
  );
}
export default heroAnimations;
