import "./index.html";
import "./index.scss";
import animateTopNav from "./components/topnav/topnav";
import heroAnimations from "./components/hero/animations";
import partnersAnimations from "./components/partners/animations";
import supportPartnersAnimate from "./components/support_partners/animations";
import sectionOurFeaturesAnimate from "./components/our-features/animations";
import sectionWhatBenefitsAnimate from "./components/what-benifit/animations";
import "./components/choose-plan/switch_prices";
import pricesSectionAnimate from "./components/choose-plan/animations";
import "./components/leadform/validate_email";

window.onload = function () {
  animateTopNav();
  heroAnimations();
  partnersAnimations();
  supportPartnersAnimate();
  sectionOurFeaturesAnimate();
  sectionWhatBenefitsAnimate();
  pricesSectionAnimate();
};
