const projectsGlobalVars = {
  logoHolder: "[ss-ele='logo-holder']",
  footer: "[ss-ele='footer']",
}

// Animation function to fade out logo when footer starts
function initLogoFadeAnimation() {
  const logoHolder = document.querySelector(projectsGlobalVars.logoHolder);
  const footer = document.querySelector(projectsGlobalVars.footer);

  if (!logoHolder || !footer) {
    console.warn('Logo holder or footer element not found');
    return;
  }

  // Create modern stagger animation for logo
  gsap.to(logoHolder, {
    y: -10, // Move up by 30px
    opacity: 0,
    // scale: 0.95, // Slightly scale down for modern effect
    duration: 0.5,
    ease: "expo.out", // Exponential ease for very modern feel
    scrollTrigger: {
      trigger: footer,
      start: "top bottom", // Start when footer first touches bottom of viewport (0% visible)
      end: "top bottom-=80px", // Complete animation over 80px for smooth transition
      scrub: 1, // Smooth animation tied to scroll
      onEnter: () => {
      },
      onLeaveBack: () => {
        // Simple fade logo back in when scrolling up
        gsap.to(logoHolder, {
          y: 0,
          opacity: 1,
          // scale: 1,
          duration: 0.4,
          ease: "expo.in" // Simple fade without bounce
        });
      }
    }
  });
}


// Initialize the animation when DOM is ready
document.addEventListener('DOMContentLoaded', initLogoFadeAnimation);