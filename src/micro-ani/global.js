/*
  Tasks:
  - Logo Animation stagger up based on page load "Beta [PAGE TITLE]"
  - Image reveal on scroll on projects page
*/

// Global configuration object
const aniGlobalVars = {
  // Selectors (avoiding hardcoded IDs/classes where possible)
  logoHolder: "[ss-ele='logo-holder']",
  
  // SVG selectors - using data attributes would be better than IDs
  svgElement: 'svg',
  suffixElements: '[class*="suffix"]', // Match any element with 'suffix' in class
  betaGroup: '[id*="beta"]',          // Match any element with 'beta' in ID
  letterElements: '[class*="letter"]', // Match any element with 'letter' in class
  
  // Page mapping - avoid hardcoded IDs
  pageMapping: {
    '/': '[pagePath="/"]',
    'projects': '[pagePath*="projects"]',
    'objects': '[pagePath*="objects"]', 
    'lab': '[pagePath*="lab"]'
  },
  
  // Animation settings
  animations: {
    // Timing
    letterDuration: 0.6,
    suffixDuration: 0.8,
    exitDuration: 0.4,
    exitSuffixDuration: 0.6,
    
    // Stagger
    letterStagger: 0.05,
    exitStagger: 0.03,
    
    // Easing
    enterEase: "power2.out",
    exitEase: "power2.in",
    
    // Transform origins
    transformOrigin: 'bottom center',
    
    // Initial positions
    hiddenY: '100%',
    partialY: '50%',
    visibleY: 0,
    
    // Opacity
    hidden: 0,
    visible: 1
  },
  
  // Navigation settings
  navigation: {
    checkInterval: 100, // ms
    debugMode: false
  }
};

// Utility functions
const logoUtils = {
  // Get logo elements safely
  getLogoElements() {
    const logoHolder = document.querySelector(aniGlobalVars.logoHolder);
    if (!logoHolder) {
      if (aniGlobalVars.navigation.debugMode) console.warn('Logo holder not found');
      return null;
    }

    const svg = logoHolder.querySelector(aniGlobalVars.svgElement);
    if (!svg) {
      if (aniGlobalVars.navigation.debugMode) console.warn('SVG not found');
      return null;
    }

    return { logoHolder, svg };
  },

  // Get suffix elements
  getSuffixElements(svg) {
    return Array.from(svg.querySelectorAll(aniGlobalVars.suffixElements));
  },

  // Get beta elements  
  getBetaElements(svg) {
    const betaGroup = svg.querySelector(aniGlobalVars.betaGroup);
    return betaGroup ? Array.from(betaGroup.querySelectorAll(aniGlobalVars.letterElements)) : [];
  },

  // Get letters from suffix
  getLettersFromSuffix(suffix) {
    return Array.from(suffix.querySelectorAll(aniGlobalVars.letterElements));
  },

  // Find target suffix for page
  findTargetSuffix(svg, pathname) {
    const { pageMapping } = aniGlobalVars;
    
    // Check exact path first
    if (pageMapping[pathname]) {
      return svg.querySelector(pageMapping[pathname]);
    }
    
    // Check partial matches
    for (const [key, selector] of Object.entries(pageMapping)) {
      if (key !== '/' && pathname.includes(key)) {
        return svg.querySelector(selector);
      }
    }
    
    // Default to home page
    return svg.querySelector(pageMapping['/']);
  },

  // Find currently visible suffix
  findVisibleSuffix(suffixes) {
    return suffixes.find(suffix => {
      const display = gsap.getProperty(suffix, 'display');
      const opacity = gsap.getProperty(suffix, 'opacity');
      return display !== 'none' && opacity > 0;
    });
  },

  // Log debug info
  debug(message, data = null) {
    if (aniGlobalVars.navigation.debugMode) {
      console.log(`[Logo Animation] ${message}`, data);
    }
  }
};
// Animation modules
const animationModules = {
  // Setup initial GSAP properties
  setupElements(elements, properties) {
    if (elements && elements.length > 0) {
      gsap.set(elements, properties);
    }
  },

  // Create enter animation
  createEnterAnimation(elements, options = {}) {
    const config = { ...aniGlobalVars.animations, ...options };
    
    return gsap.to(elements, {
      y: config.visibleY,
      opacity: config.visible,
      duration: config.letterDuration,
      ease: config.enterEase,
      stagger: config.letterStagger,
      transformOrigin: config.transformOrigin,
      ...options
    });
  },

  // Create exit animation
  createExitAnimation(elements, options = {}) {
    const config = { ...aniGlobalVars.animations, ...options };
    
    return gsap.to(elements, {
      y: config.hiddenY,
      opacity: config.hidden,
      duration: config.exitDuration,
      ease: config.exitEase,
      stagger: config.exitStagger,
      transformOrigin: config.transformOrigin,
      ...options
    });
  },

  // Create suffix container animation
  createSuffixAnimation(suffix, direction = 'in', options = {}) {
    const config = { ...aniGlobalVars.animations, ...options };
    
    if (direction === 'in') {
      return gsap.fromTo(suffix, 
        {
          y: config.partialY,
          opacity: config.hidden
        },
        {
          y: config.visibleY,
          opacity: config.visible,
          duration: config.suffixDuration,
          ease: config.enterEase,
          ...options
        }
      );
    } else {
      return gsap.to(suffix, {
        y: config.hiddenY,
        opacity: config.hidden,
        duration: config.exitSuffixDuration,
        ease: config.exitEase,
        ...options
      });
    }
  }
};
// Main logo animation controller
const logoAnimations = {
  timeline: null,
  currentPath: null,

  // Initialize logo animation on page load
  init() {
    if (typeof gsap === 'undefined') {
      console.warn('GSAP is not loaded. Please include GSAP library.');
      return;
    }

    this.currentPath = window.location.pathname;
    this.setupInitialState();
    this.animatePageLoad();
    this.setupNavigationListeners();
  },

  // Setup initial state using modular utilities
  setupInitialState() {
    const elements = logoUtils.getLogoElements();
    if (!elements) return;

    const { svg } = elements;
    const config = aniGlobalVars.animations;

    // Setup suffix elements
    const suffixes = logoUtils.getSuffixElements(svg);
    animationModules.setupElements(suffixes, {
      display: 'none',
      y: config.hiddenY,
      opacity: config.hidden
    });

    // Setup BETA elements (keep visible and static)
    const betaLetters = logoUtils.getBetaElements(svg);
    animationModules.setupElements(betaLetters, {
      y: config.visibleY,
      opacity: config.visible,
      transformOrigin: config.transformOrigin
    });

    logoUtils.debug('Initial state setup complete');
  },

  // Animate on page load
  animatePageLoad() {
    const currentPath = window.location.pathname;
    logoUtils.debug('Page load animation started', currentPath);

    // Create main timeline
    this.timeline = gsap.timeline();

    // Show the appropriate suffix (BETA is already static)
    this.showSuffixForPage(currentPath);
  },

  // Setup navigation listeners using configuration
  setupNavigationListeners() {
    const handlePathChange = (newPath) => {
      if (newPath !== this.currentPath) {
        logoUtils.debug('Path changed', { from: this.currentPath, to: newPath });
        this.currentPath = newPath;
        this.transitionToPage(newPath);
      }
    };

    // Handle popstate (back/forward buttons)
    window.addEventListener('popstate', () => {
      handlePathChange(window.location.pathname);
    });

    // Handle programmatic navigation
    ['pushState', 'replaceState'].forEach(method => {
      const original = history[method];
      history[method] = (...args) => {
        original.apply(history, args);
        handlePathChange(window.location.pathname);
      };
    });

    // Fallback: Check for URL changes periodically
    setInterval(() => {
      handlePathChange(window.location.pathname);
    }, aniGlobalVars.navigation.checkInterval);
  },

  // Show suffix based on current page using utilities
  showSuffixForPage(pathname) {
    const elements = logoUtils.getLogoElements();
    if (!elements) return;

    const { svg } = elements;

    // Hide all suffixes first
    const allSuffixes = logoUtils.getSuffixElements(svg);
    animationModules.setupElements(allSuffixes, { display: 'none' });

    // Find and show target suffix
    const targetSuffix = logoUtils.findTargetSuffix(svg, pathname);
    if (targetSuffix) {
      logoUtils.debug('Showing suffix for page', { pathname, suffix: targetSuffix.getAttribute('pagePath') });
      this.animateSuffixIn(targetSuffix);
    } else {
      logoUtils.debug('No suffix found for page', pathname);
    }
  },

  // Animate suffix in using modular animations
  animateSuffixIn(suffix) {
    const config = aniGlobalVars.animations;
    
    // Show suffix
    gsap.set(suffix, { display: 'block' });

    // Get letters from suffix
    const letters = logoUtils.getLettersFromSuffix(suffix);

    // Set initial state for letters
    animationModules.setupElements(letters, {
      y: config.hiddenY,
      opacity: config.hidden,
      transformOrigin: config.transformOrigin
    });

    // Create timeline for suffix animation
    const tl = gsap.timeline();

    // Animate letters with stagger
    tl.add(animationModules.createEnterAnimation(letters));

    // Animate the whole suffix container
    tl.add(animationModules.createSuffixAnimation(suffix, 'in'), 0.1);

    logoUtils.debug('Suffix animated in');
  },

  // Animate suffix out using modular animations
  animateSuffixOut(suffix, callback) {
    const letters = logoUtils.getLettersFromSuffix(suffix);

    // Create timeline for exit animation
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set(suffix, { display: 'none' });
        logoUtils.debug('Suffix animated out');
        if (callback) callback();
      }
    });

    // Animate letters out with stagger
    tl.add(animationModules.createExitAnimation(letters));

    // Animate the whole suffix out
    tl.add(animationModules.createSuffixAnimation(suffix, 'out'), 0.2);
  },

  // Handle page transitions using utilities
  transitionToPage(newPath) {
    logoUtils.debug('Transitioning to page', newPath);
    
    const elements = logoUtils.getLogoElements();
    if (!elements) return;

    const { svg } = elements;
    const suffixes = logoUtils.getSuffixElements(svg);
    const currentSuffix = logoUtils.findVisibleSuffix(suffixes);

    if (currentSuffix) {
      logoUtils.debug('Current suffix found', currentSuffix.getAttribute('pagePath'));
      // Animate out current suffix, then show new one
      this.animateSuffixOut(currentSuffix, () => {
        this.showSuffixForPage(newPath);
      });
    } else {
      logoUtils.debug('No current suffix, showing new one directly');
      // No current suffix, just show new one
      this.showSuffixForPage(newPath);
    }
  },

  // Reset animation (useful for testing)
  reset() {
    if (this.timeline) {
      this.timeline.kill();
    }
    logoUtils.debug('Animation reset');
    this.setupInitialState();
  },

  // Kill all animations
  killAnimations() {
    if (this.timeline) {
      this.timeline.kill();
    }
    gsap.killTweensOf("*");
    logoUtils.debug('All animations killed');
  },

  // Enable/disable debug mode
  setDebugMode(enabled) {
    aniGlobalVars.navigation.debugMode = enabled;
    logoUtils.debug('Debug mode', enabled ? 'enabled' : 'disabled');
  }
};

// Initialization module
const logoInitializer = {
  init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        logoAnimations.init();
      });
    } else {
      logoAnimations.init();
    }
  }
};

// Auto-initialize
logoInitializer.init();

// Global API
window.logoAnimations = logoAnimations;
window.aniGlobalVars = aniGlobalVars;

// Enable debug mode in development
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
  logoAnimations.setDebugMode(true);
}

// Module exports
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { 
    logoAnimations, 
    aniGlobalVars, 
    logoUtils, 
    animationModules 
  };
}

