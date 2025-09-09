/*
- Simple image reveal animation using GSAP and ScrollTrigger
- Images reveal when scrolled in, hide when scrolled out
- Multiple animation types available
*/

class ImageReveal {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      duration: 1.2,
      ease: "power2.out",
      scale: 1.1,
      y: 50,
      start: "top 85%",
      end: "bottom 15%",
      stagger: 0.1,

      // Animation type - choose from: 'fade', 'slide', 'zoom', 'flip', 'blur', 'clip'
      animationType: 'fade',

      ...options
    };

    this.init();
  }

  init() {
    // Check if GSAP is available
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      console.error('GSAP or ScrollTrigger not loaded');
      return;
    }

    // Handle single element or multiple elements
    this.elements = this.element.length ? Array.from(this.element) : [this.element];

    // Filter out hidden elements
    this.elements = this.elements.filter(el => el.offsetParent !== null);

    if (this.elements.length === 0) return;

    this.setupAnimation();
  }

  setupAnimation() {
    // Get animation properties based on type
    const { fromProps, toProps } = this.getAnimationProps();

    // Set initial state for all elements
    gsap.set(this.elements, {
      ...fromProps,
      force3D: true
    });

    // Create individual ScrollTrigger for each element
    this.elements.forEach((element, index) => {
      gsap.to(element, {
        ...toProps,
        duration: this.options.duration,
        ease: this.options.ease,
        scrollTrigger: {
          trigger: element,
          start: this.options.start,
          end: this.options.end,
          toggleActions: "play none none reverse"
        }
      });
    });
  }

  getAnimationProps() {
    switch (this.options.animationType) {
      case 'slide':
        return {
          fromProps: { opacity: 0, x: -100, y: 0 },
          toProps: { opacity: 1, x: 0, y: 0 }
        };

      case 'zoom':
        return {
          fromProps: { opacity: 0, scale: 0.8 },
          toProps: { opacity: 1, scale: 1 }
        };

      case 'flip':
        return {
          fromProps: { opacity: 0, rotationY: 90, transformOrigin: "center center" },
          toProps: { opacity: 1, rotationY: 0 }
        };

      case 'blur':
        return {
          fromProps: { opacity: 0, scale: 1.1, filter: "blur(10px)" },
          toProps: { opacity: 1, scale: 1, filter: "blur(0px)" }
        };

      case 'clip':
        return {
          fromProps: { opacity: 1, clipPath: "inset(0 100% 0 0)" },
          toProps: { opacity: 1, clipPath: "inset(0 0% 0 0)" }
        };

      case 'fade':
      default:
        return {
          fromProps: { opacity: 0, scale: this.options.scale, y: this.options.y },
          toProps: { opacity: 1, scale: 1, y: 0 }
        };
    }
  }

  destroy() {
    // Kill all ScrollTriggers associated with our elements
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.vars && trigger.vars.trigger && this.elements.includes(trigger.vars.trigger)) {
        trigger.kill();
      }
    });

    // Reset elements to initial state
    gsap.set(this.elements, {
      clearProps: "all"
    });
  }
}

// Simple function to create reveal animation
function createImageReveal(selector, options = {}) {
  const elements = document.querySelectorAll(selector);
  if (elements.length === 0) return null;
  return new ImageReveal(elements, options);
}

// Auto-initialize common elements
function initImageReveal() {
  // Auto-reveal project images
  createImageReveal('.page-wrapper img', {
    animationType: 'blur',
    duration: 1.5,
    ease: "power3.out"
  });

  // // Auto-reveal other gallery images
  // createImageReveal('.gallery img, .gallery-grid img:not(.project-image)', {
  //   animationType: 'slide',
  //   duration: 1.2
  // });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initImageReveal);
} else {
  initImageReveal();
}

// Export for global use
window.ImageReveal = ImageReveal;
window.createImageReveal = createImageReveal;