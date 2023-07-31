import "./index.html";
import "./index.scss";
import animateTopNav from "./components/topnav/topnav";
import heroAnimations from "./components/hero/animations";

window.onload = function () {
  animateTopNav();
  heroAnimations();
};
