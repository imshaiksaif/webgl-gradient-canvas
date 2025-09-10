/*
  Tasks:
  - Logo Animation stagger up based on page load "Beta [PAGE TITLE]"
  - Image reveal on scroll on projects page
*/

// Global configuration object
const aniGlobalVars = {
  // Selectors (avoiding hardcoded IDs/classes where possible)
  logoHolder: "[ss-ele='logo-holder']",
  navbar: ".homepage-nav-bar, .main-nav", // Navbar selectors
  pageWrapper: ".page-wrapper", // Page wrapper selector

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
    navbarFadeDuration: 0.4, // Navbar fade timing
    pageWrapperFadeDuration: 0.5, // Page wrapper fade timing

    // Stagger
    letterStagger: 0.05,
    exitStagger: 0.03,
    staggerUpDelay: 0.08, // For upward stagger animation

    // Easing
    enterEase: "power2.out",
    exitEase: "power2.in",
    staggerUpEase: "power2.inOut",

    // Transform origins
    transformOrigin: 'bottom center',

    // Initial positions
    hiddenY: '100%',
    partialY: '50%',
    visibleY: 0,
    staggerUpY: '-100%', // Move text completely out of view upward

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

  // Get navbar elements
  getNavbarElements() {
    return document.querySelectorAll(aniGlobalVars.navbar);
  },

  // Get page wrapper elements
  getPageWrapperElements() {
    return document.querySelectorAll(aniGlobalVars.pageWrapper);
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

  // Create stagger up animation for page transitions
  createStaggerUpAnimation(elements, options = {}) {
    const config = { ...aniGlobalVars.animations, ...options };

    return gsap.to(elements, {
      y: config.staggerUpY,
      opacity: config.hidden, // Fade out completely
      duration: config.letterDuration * 1.2, // Slightly slower for better visual effect
      ease: config.staggerUpEase,
      stagger: config.staggerUpDelay,
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
  },

  // Create navbar fade animation
  createNavbarFadeAnimation(direction = 'out', options = {}) {
    const config = { ...aniGlobalVars.animations, ...options };
    const navbarElements = logoUtils.getNavbarElements();

    if (navbarElements.length === 0) {
      logoUtils.debug('No navbar elements found');
      return gsap.timeline(); // Return empty timeline
    }

    if (direction === 'out') {
      return gsap.to(navbarElements, {
        opacity: config.hidden,
        duration: config.navbarFadeDuration,
        ease: config.exitEase,
        ...options
      });
    } else {
      return gsap.to(navbarElements, {
        opacity: config.visible,
        duration: config.navbarFadeDuration,
        ease: config.enterEase,
        ...options
      });
    }
  },

  // Create page wrapper fade animation
  createPageWrapperFadeAnimation(direction = 'out', options = {}) {
    const config = { ...aniGlobalVars.animations, ...options };
    const pageWrapperElements = logoUtils.getPageWrapperElements();

    if (pageWrapperElements.length === 0) {
      logoUtils.debug('No page wrapper elements found');
      return gsap.timeline(); // Return empty timeline
    }

    if (direction === 'out') {
      return gsap.to(pageWrapperElements, {
        opacity: config.hidden,
        duration: config.pageWrapperFadeDuration,
        ease: config.exitEase,
        ...options
      });
    } else {
      return gsap.to(pageWrapperElements, {
        opacity: config.visible,
        duration: config.pageWrapperFadeDuration,
        ease: config.enterEase,
        ...options
      });
    }
  }
};
// Main logo animation controller
const logoAnimations = {
  timeline: null,
  currentPath: null,
  isInitialLoad: true, // Track if this is the first page load
  isTransitioning: false, // Track if we're currently in a transition
  pendingPath: null, // Store the path we want to transition to

  // Initialize logo animation on page load
  init() {
    if (typeof gsap === 'undefined') {
      console.warn('GSAP is not loaded. Please include GSAP library.');
      return;
    }

    // Check if we just completed a transition to prevent conflicts
    if (localStorage.getItem('logoAnimationTransitioning') === 'true') {
      localStorage.removeItem('logoAnimationTransitioning');
      logoUtils.debug('Skipping transition setup - page just loaded from navigation');
      // Still setup the basic state but don't intercept navigation immediately
      this.currentPath = window.location.pathname;
      this.isInitialLoad = true;
      this.isTransitioning = false;

      // Setup initial state with navbar hidden for animation
      this.setupInitialStateForTransition();
      this.animatePageLoad();

      // Delay navigation listener setup to prevent immediate conflicts
      setTimeout(() => {
        this.setupNavigationListeners();
      }, 500);
      return;
    }

    this.currentPath = window.location.pathname;
    this.isInitialLoad = true;
    this.isTransitioning = false;
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

    // Setup navbar elements (initially hidden for page load animation)
    const navbarElements = logoUtils.getNavbarElements();
    if (navbarElements.length > 0) {
      animationModules.setupElements(navbarElements, {
        opacity: config.hidden // Start hidden for initial page load animation
      });
      logoUtils.debug('Navbar elements initialized as hidden for page load animation');
    }

    // Setup page wrapper elements (initially hidden for page load animation)
    const pageWrapperElements = logoUtils.getPageWrapperElements();
    if (pageWrapperElements.length > 0) {
      animationModules.setupElements(pageWrapperElements, {
        opacity: config.hidden // Start hidden for initial page load animation
      });
      logoUtils.debug('Page wrapper elements initialized as hidden for page load animation');
    }

    logoUtils.debug('Initial state setup complete');
  },

  // Setup initial state when coming from a transition
  setupInitialStateForTransition() {
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

    // Setup navbar elements (hidden because they should fade out during transition)
    const navbarElements = logoUtils.getNavbarElements();
    if (navbarElements.length > 0) {
      animationModules.setupElements(navbarElements, {
        opacity: config.hidden // Hidden from previous page transition
      });
      logoUtils.debug('Navbar elements initialized as hidden from previous transition');
    }

    // Setup page wrapper elements (hidden because they should fade out during transition)
    const pageWrapperElements = logoUtils.getPageWrapperElements();
    if (pageWrapperElements.length > 0) {
      animationModules.setupElements(pageWrapperElements, {
        opacity: config.hidden // Hidden from previous page transition
      });
      logoUtils.debug('Page wrapper elements initialized as hidden from previous transition');
    }

    logoUtils.debug('Initial state setup for transition complete');
  },

  // Animate on page load
  animatePageLoad() {
    const currentPath = window.location.pathname;
    logoUtils.debug('Page load animation started with navbar fade in', currentPath);

    // Create main timeline
    this.timeline = gsap.timeline();

    // Show the appropriate suffix with initial load animation (stagger in)
    this.showSuffixForPage(currentPath, false); // false indicates this is initial load
  },

  // Setup navigation listeners using configuration
  setupNavigationListeners() {
    const handlePathChange = (newPath) => {
      // Prevent infinite loops by checking if we're already transitioning to this path
      if (newPath !== this.currentPath && !this.isTransitioning && this.pendingPath !== newPath) {
        logoUtils.debug('Path change detected', { from: this.currentPath, to: newPath });

        // Store the pending path and start transition
        this.pendingPath = newPath;
        this.isTransitioning = true;

        // Prevent the actual navigation by reverting the URL
        if (this.currentPath !== window.location.pathname) {
          history.replaceState(null, '', this.currentPath);
        }

        // Start our controlled transition
        this.transitionToPage(newPath);
      }
    };

    // Handle popstate (back/forward buttons)
    window.addEventListener('popstate', (event) => {
      if (!this.isTransitioning) {
        handlePathChange(window.location.pathname);
      }
    });

    // Intercept programmatic navigation
    ['pushState', 'replaceState'].forEach(method => {
      const original = history[method];
      history[method] = (...args) => {
        if (!this.isTransitioning) {
          const newPath = args[2] || window.location.pathname;
          // Only handle if it's a different path
          if (newPath !== this.currentPath) {
            handlePathChange(newPath);
          }
        } else {
          // If we're transitioning and this is our controlled navigation, allow it
          original.apply(history, args);
        }
      };
    });

    // Intercept link clicks
    document.addEventListener('click', (event) => {
      const link = event.target.closest('a[href]');
      if (link && !this.isTransitioning) {
        const href = link.getAttribute('href');
        if (href && href.startsWith('/') && href !== this.currentPath) {
          event.preventDefault();
          logoUtils.debug('Link click intercepted', href);
          handlePathChange(href);
        }
      }
    });

    // Remove the periodic URL check as it can cause issues
    // The other event listeners should be sufficient
  },

  // Show suffix based on current page using utilities
  showSuffixForPage(pathname, isTransition = false) {
    const elements = logoUtils.getLogoElements();
    if (!elements) return;

    const { svg } = elements;

    // Hide all suffixes first
    const allSuffixes = logoUtils.getSuffixElements(svg);
    animationModules.setupElements(allSuffixes, { display: 'none' });

    // Find and show target suffix
    const targetSuffix = logoUtils.findTargetSuffix(svg, pathname);
    if (targetSuffix) {
      logoUtils.debug('Showing suffix for page', { pathname, suffix: targetSuffix.getAttribute('pagePath'), isTransition });
      this.animateSuffixIn(targetSuffix, isTransition);
    } else {
      logoUtils.debug('No suffix found for page', pathname);
    }
  },

  // Animate suffix in using modular animations
  animateSuffixIn(suffix, isTransition = false) {
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

    // Choose animation type based on context
    if (isTransition) {
      // Page transition: first animate to visible position, then stagger up
      logoUtils.debug('Using transition animation sequence for new page with sequential animations');

      // First bring letters to visible position
      tl.add(animationModules.createEnterAnimation(letters));

      // Then apply stagger up effect with a slight delay
      tl.add(animationModules.createStaggerUpAnimation(letters), 0.3);

      // Fade in navbar AFTER logo animations complete
      tl.add(animationModules.createNavbarFadeAnimation('in'), '+=0.2');

      // Fade in page wrapper AFTER navbar fades in
      tl.add(animationModules.createPageWrapperFadeAnimation('in'), '+=0.1');
    } else {
      // Initial page load: stagger in animation
      logoUtils.debug('Using stagger in animation for page load with sequential animations');

      // Logo stagger in animation
      tl.add(animationModules.createEnterAnimation(letters));

      // Fade in navbar AFTER logo animation completes
      tl.add(animationModules.createNavbarFadeAnimation('in'), '+=0.2');

      // Fade in page wrapper AFTER navbar fades in
      tl.add(animationModules.createPageWrapperFadeAnimation('in'), '+=0.1');
    }    // Animate the whole suffix container
    tl.add(animationModules.createSuffixAnimation(suffix, 'in'), 0.1);

    logoUtils.debug('Suffix animated in', { isTransition });
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

  // Animate current suffix with stagger up effect during transition
  animateStaggerUpTransition(suffix, callback) {
    const letters = logoUtils.getLettersFromSuffix(suffix);

    logoUtils.debug('Starting page wrapper fade out before logo stagger up transition');

    // Create stagger up animation for current suffix
    const staggerUpTl = gsap.timeline({
      onComplete: () => {
        // Hide the suffix after stagger up animation
        gsap.set(suffix, { display: 'none' });
        logoUtils.debug('Stagger up transition complete, suffix hidden');
        if (callback) callback();
      }
    });

    // Fade out page wrapper FIRST
    staggerUpTl.add(animationModules.createPageWrapperFadeAnimation('out'));

    // Apply stagger up animation to current letters AFTER page wrapper fades
    staggerUpTl.add(animationModules.createStaggerUpAnimation(letters), '+=0.1');

    // Fade out navbar AFTER logo stagger up completes
    staggerUpTl.add(animationModules.createNavbarFadeAnimation('out'), '+=0.1');
  },  // Handle page transitions using utilities
  transitionToPage(newPath) {
    logoUtils.debug('Starting controlled transition to page', newPath);

    const elements = logoUtils.getLogoElements();
    if (!elements) {
      this.completeTransition(newPath);
      return;
    }

    const { svg } = elements;
    const suffixes = logoUtils.getSuffixElements(svg);
    const currentSuffix = logoUtils.findVisibleSuffix(suffixes);

    // Mark that this is no longer the initial load
    this.isInitialLoad = false;

    if (currentSuffix) {
      logoUtils.debug('Current suffix found, starting stagger up animation', currentSuffix.getAttribute('pagePath'));

      // Start the stagger up animation for current suffix
      this.animateStaggerUpTransition(currentSuffix, () => {
        // Navigate immediately when animation completes
        logoUtils.debug('Stagger up animation complete, navigating to new page');
        this.completeTransition(newPath);
      });
    } else {
      logoUtils.debug('No current suffix, navigating directly');
      // No current suffix, navigate immediately
      this.completeTransition(newPath);
    }
  },

  // Complete the actual navigation and show new page
  completeTransition(newPath) {
    logoUtils.debug('Completing transition to', newPath);

    // Clear any existing timeouts or animations that might interfere
    gsap.killTweensOf("*");

    // Update our internal state first
    this.currentPath = newPath;
    this.isTransitioning = false;
    this.pendingPath = null;

    // Add a flag to localStorage to prevent re-initialization issues
    localStorage.setItem('logoAnimationTransitioning', 'true');

    // Small delay to ensure state is properly set before navigation
    setTimeout(() => {
      // Perform the actual page navigation
      window.location.href = newPath;
    }, 50);

    logoUtils.debug('Navigating to', newPath);
  },

  // Reset animation (useful for testing)
  reset() {
    if (this.timeline) {
      this.timeline.kill();
    }
    this.isInitialLoad = true; // Reset initial load state
    this.isTransitioning = false; // Reset transition state
    this.pendingPath = null; // Clear pending path
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

