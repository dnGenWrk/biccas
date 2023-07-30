import { gsap } from "gsap";
// using import syntax
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { TextPlugin } from "gsap/dist/TextPlugin";

const targetEl = document.getElementById("navbar-cta");
const mobMenuButton = document.querySelector("[data-collapse-toggle='navbar-cta']");

mobMenuButton.addEventListener("click", function (event) {
  targetEl.classList.toggle("hidden");
});

gsap.registerPlugin(MotionPathPlugin, ScrollToPlugin, TextPlugin);
function animateTopNav() {
  const nav = document.querySelector(".topnav");
  gsap.from(nav, {
    opacity: 0,
    y: 300,
    duration: 1.6,
    delay: 0.6,
    ease: "power3.out",
  });
}
export default animateTopNav;
