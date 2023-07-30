import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { TextPlugin } from "gsap/dist/TextPlugin";
gsap.registerPlugin(MotionPathPlugin);

function heroAnimations() {
  const headeritemsAnimate = {
    // animObj1: document.querySelectorAll(".hero-shape-1"),
    animObj1: document.getElementById("pathsh1"),

    //animObj2: document.querySelectorAll(".aim-obj2"),
    // animObj3: document.querySelectorAll(".aim-obj3"),
    //animObj4: document.querySelectorAll(".aim-obj4"),
    //animObj5: document.querySelectorAll(".aim-obj5"),
    // animObj6: document.querySelectorAll(".aim-obj6"),
    // animObj7: document.querySelectorAll(".aim-obj7"),
    // animObj8: document.querySelectorAll(".aim-obj8"),
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
}
export default heroAnimations;
