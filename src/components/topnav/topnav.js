import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { TextPlugin } from "gsap/dist/TextPlugin";

const targetEl = document.getElementById("navbar-cta");
const mobMenuButton = document.querySelector("[data-collapse-toggle='navbar-cta']");
const nav = document.querySelector(".topnav-animate");

mobMenuButton.addEventListener("click", function (event) {
  targetEl.classList.toggle("hidden");
});

gsap.registerPlugin(MotionPathPlugin, ScrollToPlugin, TextPlugin);
function animateTopNav() {
  gsap.from(nav, {
    opacity: 0,
    y: -50,
    duration: 1.7,
    delay: 0.3,
    ease: "power3.out",
  });
}
export default animateTopNav;
