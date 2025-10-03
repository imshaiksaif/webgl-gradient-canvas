/*
  Footer Z-Index Manager - Updates .footer z-index when [ss-ele="footer"] passes viewport
*/

function initFooterZIndex() {
  const footerElement = document.querySelector("[ss-ele='footer']");
  const footerClass = document.querySelector(".footer");

  if (!footerElement || !footerClass || typeof ScrollTrigger === 'undefined') {
    return;
  }

  ScrollTrigger.create({
    trigger: footerElement,
    start: "top bottom",
    end: "bottom top",
    onEnter: () => footerClass.style.zIndex = "0",
    onLeaveBack: () => footerClass.style.zIndex = ""
  });
}

// Initialize when ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initFooterZIndex);
} else {
  initFooterZIndex();
}
