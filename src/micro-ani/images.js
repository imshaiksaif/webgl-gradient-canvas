/*
- Simple image reveal animation using GSAP and ScrollTrigger
- Images reveal when scrolled in, hide when scrolled out
- Multiple animation types available
*/

// Cache for hero elements to avoid repeated DOM queries
let heroElementsCache = null;
let imageCaptionsCache = null;

// Get hero elements with caching
function getHeroElements() {
  if (!heroElementsCache) {
    heroElementsCache = document.querySelectorAll('[ss-wait-for="page-transition"]');
  }
  return heroElementsCache;
}

// Get image caption elements with caching
function getImageCaptionElements() {
  if (!imageCaptionsCache) {
    imageCaptionsCache = document.querySelectorAll('[ss-wait-for="image-captions"]');
  }
  return imageCaptionsCache;
}

// Set initial state for hero elements using GSAP instead of CSS
function setHeroInitialState() {
  try {
    const heroElements = getHeroElements();
    const captionElements = getImageCaptionElements();

    // Handle hero elements (page-transition)
    if (heroElements.length > 0) {
      heroElements.forEach((element) => {
        const isImage = element.tagName.toLowerCase() === "img";

        if (isImage) {
          // Images get blur and scale effect
          gsap.set(element, {
            opacity: 0,
            y: 50,
            scale: 1.1,
            filter: "blur(10px)",
            force3D: true
          });
        } else {
          // Non-images (captions, divs) get simple fade
          gsap.set(element, {
            opacity: 0,
            y: 50,
            force3D: true
          });
        }
      });
    }

    // Handle image caption elements - always use simple fade
    if (captionElements.length > 0) {
      gsap.set(captionElements, {
        opacity: 0,
        y: 30,
        force3D: true
      });
    }
  } catch (error) {
    // Error setting hero initial state
  }
}

// Set initial state immediately
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setHeroInitialState);
} else {
  setHeroInitialState();
}

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
      animationType: "fade",

      ...options
    };

    this.init();
  }

  init() {
    try {
      // Check if GSAP is available
      if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
        return;
      }

      // Handle single element or multiple elements
      this.elements = this.element?.length ? Array.from(this.element) : [this.element];

      // Filter out hidden and invalid elements
      this.elements = this.elements.filter(
        (el) => el && el.offsetParent !== null && el.nodeType === Node.ELEMENT_NODE
      );

      if (this.elements.length === 0) {
        return;
      }

      this.setupAnimation();
    } catch (error) {
      // Error initializing ImageReveal
    }
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
      const animation = gsap.to(element, {
        ...toProps,
        duration: this.options.duration,
        ease: this.options.ease,
        scrollTrigger: {
          trigger: element,
          start: this.options.start,
          end: this.options.end,
          toggleActions: "play none none reverse",
          markers: this.options.debug || false // Add markers if debug mode
        }
      });
    });

    // Force ScrollTrigger refresh after setup
    setTimeout(() => {
      if (typeof ScrollTrigger !== "undefined") {
        ScrollTrigger.refresh();
      }
    }, 100);
  }

  getAnimationProps() {
    switch (this.options.animationType) {
      case "slide":
        return {
          fromProps: { opacity: 0, x: -100, y: 0 },
          toProps: { opacity: 1, x: 0, y: 0 }
        };

      case "zoom":
        return {
          fromProps: { opacity: 0, scale: 0.8 },
          toProps: { opacity: 1, scale: 1 }
        };

      case "flip":
        return {
          fromProps: { opacity: 0, rotationY: 90, transformOrigin: "center center" },
          toProps: { opacity: 1, rotationY: 0 }
        };

      case "blur":
        return {
          fromProps: { opacity: 0, scale: 1.1, filter: "blur(10px)" },
          toProps: { opacity: 1, scale: 1, filter: "blur(0px)" }
        };

      case "clip":
        return {
          fromProps: { opacity: 1, clipPath: "inset(0 100% 0 0)" },
          toProps: { opacity: 1, clipPath: "inset(0 0% 0 0)" }
        };

      case "fade":
      default:
        return {
          fromProps: { opacity: 0, scale: this.options.scale, y: this.options.y },
          toProps: { opacity: 1, scale: 1, y: 0 }
        };
    }
  }

  destroy() {
    // Kill all ScrollTriggers associated with our elements
    ScrollTrigger.getAll().forEach((trigger) => {
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

// Initialize image caption elements with scroll triggers
function initImageCaptions() {
  try {
    const captionElements = getImageCaptionElements();

    if (captionElements.length === 0) return;

    captionElements.forEach((element) => {
      // Create smooth fade-up animation synchronized with images
      new ImageReveal([element], {
        animationType: "fade-up",
        duration: 1.5,
        ease: "power3.out", // Match image easing
        start: "top 85%", // Match image start trigger
        end: "bottom 15%"
      });
    });

    // Refresh ScrollTrigger after setup
    setTimeout(() => {
      if (typeof ScrollTrigger !== "undefined") {
        ScrollTrigger.refresh();
      }
    }, 100);
  } catch (error) {
    // Error initializing image captions
  }
}

// Auto-initialize common elements
function initImageReveal() {
  // Auto-reveal project images (excluding hero images that wait for page transitions)
  createImageReveal(
    'img:not([ss-dont-animate]):not([ss-wait-for="page-transition"]):not([ss-wait-for="image-captions"])',
    {
      animationType: "blur",
      duration: 1.5,
      ease: "power3.out",
      start: "top 85%" // Explicit start trigger
    }
  );

  // Initialize image captions
  initImageCaptions();

  // // Auto-reveal other gallery images
  // createImageReveal('.gallery img, .gallery-grid img:not(.project-image)', {
  //   animationType: 'slide',
  //   duration: 1.2
  // });
}

// Initialize hero images after page transition completes
// Initialize hero images that should wait for page transitions
function initHeroImages() {
  try {
    const heroElements = getHeroElements();

    if (heroElements.length === 0) {
      return;
    }

    // Check if elements are already in view and animate immediately
    const elementsInView = [];
    const elementsOutOfView = [];

    // Use Intersection Observer for better performance if available
    if ("IntersectionObserver" in window) {
      heroElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        const isInView = rect.top < viewportHeight && rect.bottom > 0 && rect.top > -rect.height;

        if (isInView) {
          elementsInView.push(element);
        } else {
          elementsOutOfView.push(element);
        }
      });
    } else {
      // Fallback for older browsers
      heroElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;

        if (isInView) {
          elementsInView.push(element);
        } else {
          elementsOutOfView.push(element);
        }
      });
    }

    // Animate elements already in view immediately
    if (elementsInView.length > 0) {
      animateHeroElementsImmediate(elementsInView);
    }

    // Set up ScrollTrigger for elements out of view
    if (elementsOutOfView.length > 0) {
      setupHeroScrollTriggers(elementsOutOfView);
    }
  } catch (error) {
    // Error initializing hero images
  }
}
function getAnimationPropsForType(type) {
  const animations = {
    "fade-in": {
      fromProps: { opacity: 0, y: 50, scale: 1.1, filter: "blur(10px)" },
      toProps: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
    },
    "fade-up": {
      fromProps: { opacity: 0, y: 50, scale: 1, filter: "blur(10px)" },
      toProps: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
    },
    "fade-down": {
      fromProps: { opacity: 0, y: -50, scale: 1, filter: "blur(0px)" },
      toProps: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
    },
    "fade-left": {
      fromProps: { opacity: 0, x: 50, scale: 1, filter: "blur(0px)" },
      toProps: { opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }
    },
    "fade-right": {
      fromProps: { opacity: 0, x: -50, scale: 1, filter: "blur(0px)" },
      toProps: { opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }
    },
    "scale-up": {
      fromProps: { opacity: 0, scale: 0.8, filter: "blur(0px)" },
      toProps: { opacity: 1, scale: 1, filter: "blur(0px)" }
    }
  };

  return animations[type] || animations["fade-in"];
}

// Configuration for hero animations
const HERO_ANIMATION_CONFIG = {
  duration: 1.5,
  ease: "power2.out",
  stagger: 0.15,
  defaultType: "fade-in"
};

// Reusable function to animate hero elements immediately
function animateHeroElementsImmediate(elements) {
  if (!elements || elements.length === 0) return;

  try {
    elements.forEach((element, index) => {
      if (!element || !element.nodeType || element._ssAnimated) return;

      // Mark as animated
      element._ssAnimated = true;

      // Check if element is an image or not
      const isImage = element.tagName.toLowerCase() === "img";

      // For non-images (like divs with captions), use simple fade animation
      let animationType;
      if (!isImage) {
        animationType = "fade-up"; // Smooth fade for non-image elements
      } else {
        animationType = element.getAttribute("ss-animation") || HERO_ANIMATION_CONFIG.defaultType;
      }

      const { fromProps, toProps } = getAnimationPropsForType(animationType);

      // Set initial state
      gsap.set(element, { ...fromProps, force3D: true });

      // Animate to final state
      gsap.to(element, {
        ...toProps,
        duration: HERO_ANIMATION_CONFIG.duration,
        ease: HERO_ANIMATION_CONFIG.ease,
        delay: index * HERO_ANIMATION_CONFIG.stagger
      });
    });
  } catch (error) {
    // Error animating hero elements
  }
} // Reusable function to setup ScrollTrigger for hero elements
function setupHeroScrollTriggers(elements) {
  if (!elements || elements.length === 0) return;

  try {
    elements.forEach((element, index) => {
      if (!element || !element.nodeType || element._ssAnimated) return;

      // Check if element is an image or not
      const isImage = element.tagName.toLowerCase() === "img";

      // For non-images (like divs with captions), use simple fade animation
      let animationType;
      if (!isImage) {
        animationType = "fade-up"; // Smooth fade for non-image elements
      } else {
        animationType = element.getAttribute("ss-animation") || HERO_ANIMATION_CONFIG.defaultType;
      }

      // Get animation props
      const { fromProps, toProps } = getAnimationPropsForType(animationType);

      // Set initial state
      gsap.set(element, { ...fromProps, force3D: true });

      // Animate with ScrollTrigger, mark as animated only when triggered
      gsap.to(element, {
        ...toProps,
        duration: HERO_ANIMATION_CONFIG.duration,
        ease: HERO_ANIMATION_CONFIG.ease,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none reverse",
          onEnter: () => {
            element._ssAnimated = true;
          }
          // markers: false // Uncomment for debugging
        },
        stagger: HERO_ANIMATION_CONFIG.stagger
      });
    });
  } catch (error) {
    // Error setting up ScrollTrigger for hero elements
  }
} // Listen for page transition complete event
document.addEventListener("pageTransitionComplete", (event) => {
  initHeroImages();
});

// Fallback: Initialize hero images on DOM ready if no page transition system

let fallbackExecuted = false;
let imageRevealInitialized = false;

document.addEventListener("DOMContentLoaded", () => {
  // Optimized delay to see if pageTransitionComplete fires
  setTimeout(() => {
    if (fallbackExecuted) return;

    try {
      const heroElements = getHeroElements();
      if (heroElements.length > 0) {
        // Check if any hero images are still hidden (meaning event didn't fire)
        const hiddenHeroes = Array.from(heroElements).filter((el) => {
          try {
            return getComputedStyle(el).opacity === "0";
          } catch {
            return true; // Assume hidden if we can't get styles
          }
        });

        if (hiddenHeroes.length > 0) {
          fallbackExecuted = true;
          initHeroImages();
        }
      }
    } catch (error) {
      // Error in fallback initialization
    }
  }, 3000); // Reduced from 5000ms for better UX
}); // Initialize when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    if (!imageRevealInitialized) {
      imageRevealInitialized = true;
      console.log("DOM fully loaded and parsed - initializing image reveal:1");

      initImageReveal();
    }
  });

  if (document.readyState !== "loading") {
    if (!imageRevealInitialized) {
      imageRevealInitialized = true;
      console.log("DOM fully loaded and parsed - initializing image reveal:2");

      initImageReveal();
    }
  }
}

// Export for global use
window.ImageReveal = ImageReveal;
window.createImageReveal = createImageReveal;