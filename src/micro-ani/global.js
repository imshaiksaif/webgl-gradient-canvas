/*
  Tasks:
  - Logo Animation stagger up based on page load "Beta [PAGE TITLE]"
  - Image reveal on scroll on projects page

  Updates:
  - Replaced CSS wildcard attribute selectors (*=) with direct selectors for Safari compatibility
  - Changed [class*="suffix"] to .suffix, [id*="beta"] to #beta, etc.
  - Updated page mapping to use direct pagepath attribute values
*/

// Global configuration object
const aniGlobalVars = {
  // Selectors (avoiding hardcoded IDs/classes where possible)
  logoHolder: "[ss-ele='logo-holder']",
  navbar: ".homepage-nav-bar, .main-nav", // Navbar selectors
  pageWrapper: ".page-wrapper", // Page wrapper selector
  heroSmallTitle: "[ss-ele='hero-small-title']", // Hero small title elements

  // SVG selectors - using direct attributes for Safari compatibility
  svgElement: "svg",
  suffixElements: ".suffix", // Direct class selector for suffix elements
  betaGroup: "#beta", // Direct ID selector for beta group
  letterElements: ".letter", // Direct class selector for letter elements

  // Page mapping - using direct attribute selectors for Safari compatibility
  pageMapping: {
    "/": '[pagepath="/"]',
    projects: '[pagepath="/projects"]',
    objects: '[pagepath="/objects"]',
    lab: '[pagepath="/lab"]'
  },

  // Animation settings
  animations: {
    // Timing - Reduced for smoother transitions
    letterDuration: 0.5, // Reduced from 0.6
    suffixDuration: 0.6, // Reduced from 0.8
    exitDuration: 0.3, // Reduced from 0.4
    exitSuffixDuration: 0.4, // Reduced from 0.6
    navbarFadeDuration: 0.3, // Reduced from 0.4
    pageWrapperFadeDuration: 0.4, // Reduced from 0.5

    // Stagger - Reduced for faster sequence
    letterStagger: 0.04, // Reduced from 0.05
    exitStagger: 0.02, // Reduced from 0.03
    staggerUpDelay: 0.06, // Reduced from 0.08

    // Hero small title animation settings
    heroSmallTitleFadeDuration: 0.4, // Duration for hero title fade animations
    heroSmallTitleExitY: -20, // Y offset when hero title exits (moves up)
    heroSmallTitleEnterDelay: 0.1, // Delay before hero title enters after starting

    // Easing
    enterEase: "power2.out",
    exitEase: "power2.in",
    staggerUpEase: "power2.inOut",

    // Transform origins
    transformOrigin: "bottom center",

    // Initial positions
    hiddenY: "100%",
    partialY: "50%",
    visibleY: 0,
    staggerUpY: "-110%", // Move text completely out of view upward

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
  // Remove anti-flicker CSS after setup
  removeAntiFlickerCSS() {
    const style = document.getElementById("logo-animation-antiflicker");
    if (style) {
      style.remove();
      logoUtils.debug("Anti-flicker CSS removed");
    }
  },

  // Get logo elements safely
  getLogoElements() {
    const logoHolder = document.querySelector(aniGlobalVars.logoHolder);
    if (!logoHolder) {
      return null;
    }

    const svg = logoHolder.querySelector(aniGlobalVars.svgElement);
    if (!svg) {
      return null;
    }

    return { logoHolder, svg };
  },

  // Get suffix elements
  getSuffixElements(svg) {
    const elements = Array.from(svg.querySelectorAll(aniGlobalVars.suffixElements));
    console.log("saif Primary suffix selector found elements", elements.length);
    return elements;
  },

  // Get beta elements
  getBetaElements(svg) {
    const betaGroup = svg.querySelector(aniGlobalVars.betaGroup);
    if (!betaGroup) return [];

    const letters = Array.from(betaGroup.querySelectorAll(aniGlobalVars.letterElements));
    return letters;
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
      const suffix = svg.querySelector(pageMapping[pathname]);
      if (suffix) return suffix;
    }

    // Check partial matches - if pathname CONTAINS the key (e.g., /webflow/objects contains "objects")
    for (const [key, selector] of Object.entries(pageMapping)) {
      if (key !== "/" && pathname.includes(key)) {
        const suffix = svg.querySelector(selector);
        if (suffix) {
          logoUtils.debug("Found suffix via partial match", { key, pathname, selector });
          return suffix;
        }
      }
    }

    // Additional fallback: try to find suffix by ID if selector doesn't work
    // Look for elements with suffix- prefix in their ID
    const suffixes = svg.querySelectorAll(".suffix");
    for (const suffix of suffixes) {
      const id = suffix.getAttribute("id") || "";
      // Check if the ID contains the page name
      for (const [key] of Object.entries(pageMapping)) {
        if (key !== "/" && pathname.includes(key) && id.includes(key)) {
          logoUtils.debug("Found suffix via ID fallback", { key, pathname, id });
          return suffix;
        }
      }
    }

    // Default to home page
    return svg.querySelector(pageMapping["/"]);
  },

  // Find currently visible suffix
  findVisibleSuffix(suffixes) {
    return suffixes.find((suffix) => {
      const display = gsap.getProperty(suffix, "display");
      const opacity = gsap.getProperty(suffix, "opacity");
      return display !== "none" && opacity > 0;
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
  },

  // Check if a path should have page transitions
  shouldHaveTransition(pathname) {
    // Get all page keys from pageMapping (includes homepage "/", projects, objects, lab)
    const transitionPages = Object.keys(aniGlobalVars.pageMapping);

    // Check if pathname exactly matches "/" or includes any of the other pages
    return (
      pathname === "/" || transitionPages.some((page) => page !== "/" && pathname.includes(page))
    );
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

    console.log("saif Creating enter animation for elements", elements.length, elements);

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

    console.log("saif Creating stagger up animation for elements", elements.length, elements);

    return gsap.to(elements, {
      y: config.staggerUpY,
      opacity: config.visible, // Keep visible during stagger up
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
  createSuffixAnimation(suffix, direction = "in", options = {}) {
    const config = { ...aniGlobalVars.animations, ...options };

    if (direction === "in") {
      return gsap.fromTo(
        suffix,
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
  createNavbarFadeAnimation(direction = "out", options = {}) {
    const config = { ...aniGlobalVars.animations, ...options };
    const navbarElements = logoUtils.getNavbarElements();

    if (navbarElements.length === 0) {
      logoUtils.debug("No navbar elements found");
      return gsap.timeline(); // Return empty timeline
    }

    if (direction === "out") {
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
  createPageWrapperFadeAnimation(direction = "out", options = {}) {
    const config = { ...aniGlobalVars.animations, ...options };
    const pageWrapperElements = logoUtils.getPageWrapperElements();

    if (pageWrapperElements.length === 0) {
      logoUtils.debug("No page wrapper elements found");
      return gsap.timeline(); // Return empty timeline
    }

    if (direction === "out") {
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
  },

  // Create hero small title fade animation
  createHeroSmallTitleAnimation(direction = "out", options = {}) {
    const config = { ...aniGlobalVars.animations, ...options };
    const heroSmallTitleElements = document.querySelectorAll(aniGlobalVars.heroSmallTitle);

    if (heroSmallTitleElements.length === 0) {
      logoUtils.debug("No hero small title elements found");
      return gsap.timeline(); // Return empty timeline
    }

    if (direction === "out") {
      return gsap.to(heroSmallTitleElements, {
        opacity: config.hidden,
        y: config.heroSmallTitleExitY,
        duration: config.heroSmallTitleFadeDuration,
        ease: config.exitEase,
        ...options
      });
    } else {
      // Stagger down animation for 'in' direction
      return gsap.fromTo(
        heroSmallTitleElements,
        {
          opacity: config.hidden,
          y: config.heroSmallTitleExitY // Start from above (negative Y)
        },
        {
          opacity: config.visible,
          y: config.visibleY,
          duration: config.heroSmallTitleFadeDuration,
          ease: config.enterEase,
          stagger: config.letterStagger, // Use same stagger as letters for consistency
          ...options
        }
      );
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
    if (typeof gsap === "undefined") {
      console.warn("GSAP is not loaded. Please include GSAP library.");
      return;
    }

    // Check if logo elements exist
    const elements = logoUtils.getLogoElements();
    if (!elements) {
      logoUtils.debug("Logo elements not found - will animate navbar and page wrapper only");
    }

    // Check if we just completed a transition to prevent conflicts
    if (localStorage.getItem("logoAnimationTransitioning") === "true") {
      localStorage.removeItem("logoAnimationTransitioning");
      logoUtils.debug("Skipping transition setup - page just loaded from navigation");

      this.currentPath = window.location.pathname;
      this.isInitialLoad = true;
      this.isTransitioning = false;

      // Setup initial state immediately
      this.setupInitialStateForTransition();

      // Remove anti-flicker CSS and start animation
      setTimeout(() => {
        logoUtils.removeAntiFlickerCSS();
        this.animatePageLoad();
      }, 50);

      // Delay navigation listener setup to prevent immediate conflicts
      setTimeout(() => {
        this.setupNavigationListeners();
      }, 300);
      return;
    }

    this.currentPath = window.location.pathname;
    this.isInitialLoad = true;
    this.isTransitioning = false;

    // Setup initial state immediately
    this.setupInitialState();

    // Remove anti-flicker CSS and start animation
    setTimeout(() => {
      logoUtils.removeAntiFlickerCSS();
      this.animatePageLoad();
    }, 50);

    this.setupNavigationListeners();
  },

  // Setup initial state using modular utilities
  setupInitialState() {
    const config = aniGlobalVars.animations;
    const elements = logoUtils.getLogoElements();

    // Setup logo elements if they exist
    if (elements) {
      const { svg } = elements;

      // Setup suffix elements
      const suffixes = logoUtils.getSuffixElements(svg);
      animationModules.setupElements(suffixes, {
        display: "none",
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
    }

    // Setup navbar elements (initially hidden for page load animation)
    const navbarElements = logoUtils.getNavbarElements();
    if (navbarElements.length > 0) {
      animationModules.setupElements(navbarElements, {
        opacity: config.hidden // Start hidden for initial page load animation
      });
      logoUtils.debug("Navbar elements initialized as hidden for page load animation");
    }

    // Setup page wrapper elements (initially hidden for page load animation)
    const pageWrapperElements = logoUtils.getPageWrapperElements();
    if (pageWrapperElements.length > 0) {
      animationModules.setupElements(pageWrapperElements, {
        opacity: config.hidden // Start hidden for initial page load animation
      });
      logoUtils.debug("Page wrapper elements initialized as hidden for page load animation");
    }

    // Setup hero small title elements (initially hidden for page load animation)
    const heroSmallTitleElements = document.querySelectorAll(aniGlobalVars.heroSmallTitle);
    if (heroSmallTitleElements.length > 0) {
      animationModules.setupElements(heroSmallTitleElements, {
        opacity: config.hidden, // Start hidden for initial page load animation
        y: config.heroSmallTitleExitY // Start at exit position for proper stagger down animation
      });
      logoUtils.debug("Hero small title elements initialized as hidden for page load animation");
    }

    logoUtils.debug("Initial state setup complete");
  },

  // Setup initial state when coming from a transition
  setupInitialStateForTransition() {
    const config = aniGlobalVars.animations;
    const elements = logoUtils.getLogoElements();

    // Setup logo elements if they exist
    if (elements) {
      const { svg } = elements;

      // Setup suffix elements
      const suffixes = logoUtils.getSuffixElements(svg);
      animationModules.setupElements(suffixes, {
        display: "none",
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
    }

    // Setup navbar elements (hidden because they should fade out during transition)
    const navbarElements = logoUtils.getNavbarElements();
    if (navbarElements.length > 0) {
      animationModules.setupElements(navbarElements, {
        opacity: config.hidden // Hidden from previous page transition
      });
      logoUtils.debug("Navbar elements initialized as hidden from previous transition");
    }

    // Setup page wrapper elements (hidden because they should fade out during transition)
    const pageWrapperElements = logoUtils.getPageWrapperElements();
    if (pageWrapperElements.length > 0) {
      animationModules.setupElements(pageWrapperElements, {
        opacity: config.hidden // Hidden from previous page transition
      });
      logoUtils.debug("Page wrapper elements initialized as hidden from previous transition");
    }

    // Setup hero small title elements (hidden because they should fade out during transition)
    const heroSmallTitleElements = document.querySelectorAll(aniGlobalVars.heroSmallTitle);
    if (heroSmallTitleElements.length > 0) {
      animationModules.setupElements(heroSmallTitleElements, {
        opacity: config.hidden, // Hidden from previous page transition
        y: config.heroSmallTitleExitY // Start at exit position for consistent animation
      });
      logoUtils.debug("Hero small title elements initialized as hidden from previous transition");
    }

    logoUtils.debug("Initial state setup for transition complete");
  },

  // Animate on page load
  animatePageLoad() {
    const currentPath = window.location.pathname;
    logoUtils.debug("Page load animation started", currentPath);

    // Create main timeline
    this.timeline = gsap.timeline();

    const elements = logoUtils.getLogoElements();

    if (elements) {
      // Show the appropriate suffix with initial load animation (stagger in)
      this.showSuffixForPage(currentPath, false); // false indicates this is initial load
    } else {
      // No logo elements - just animate navbar and page wrapper
      logoUtils.debug("Animating navbar and page wrapper only (no logo elements)");

      // Fade in hero small title first
      this.timeline.add(animationModules.createHeroSmallTitleAnimation("in"));

      // Fade in navbar
      this.timeline.add(animationModules.createNavbarFadeAnimation("in"), "+=0.1");

      // Fade in page wrapper
      this.timeline.add(animationModules.createPageWrapperFadeAnimation("in"), "+=0.05");
    }

    // Fade in footer after main animation completes (increased delay)
    const footerEls = document.querySelectorAll(".footer");
    if (footerEls.length > 0) {
      this.timeline.add(
        gsap.to(footerEls, {
          opacity: 1,
          duration: 0.4,
          ease: "power2.out"
        }),
        "+=2.8"
      );
    }
  },

  // Setup navigation listeners using configuration
  setupNavigationListeners() {
    const handlePathChange = (newPath) => {
      // Check if both current page and target page should have transitions
      const currentPageHasTransitions = logoUtils.shouldHaveTransition(this.currentPath);
      const targetPageHasTransitions = logoUtils.shouldHaveTransition(newPath);

      // Only use controlled transitions if BOTH pages are transition-enabled
      const shouldUseTransition = currentPageHasTransitions && targetPageHasTransitions;

      // Prevent infinite loops by checking if we're already transitioning to this path
      if (newPath !== this.currentPath && !this.isTransitioning && this.pendingPath !== newPath) {
        logoUtils.debug("Path change detected", {
          from: this.currentPath,
          to: newPath,
          shouldUseTransition,
          currentPageHasTransitions,
          targetPageHasTransitions
        });

        if (shouldUseTransition) {
          // Store the pending path and start transition
          this.pendingPath = newPath;
          this.isTransitioning = true;

          // Prevent the actual navigation by reverting the URL
          if (this.currentPath !== window.location.pathname) {
            history.replaceState(null, "", this.currentPath);
          }

          // Start our controlled transition
          this.transitionToPage(newPath);
        } else {
          // Allow normal navigation for non-transition pages
          logoUtils.debug("Allowing normal navigation - not both pages have transitions enabled");
          // Don't prevent default navigation
        }
      }
    };

    // Handle popstate (back/forward buttons)
    window.addEventListener("popstate", (event) => {
      if (!this.isTransitioning) {
        handlePathChange(window.location.pathname);
      }
    });

    // Intercept programmatic navigation
    ["pushState", "replaceState"].forEach((method) => {
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
    document.addEventListener("click", (event) => {
      const link = event.target.closest("a[href]");
      if (link && !this.isTransitioning) {
        const href = link.getAttribute("href");
        if (href && href.startsWith("/") && href !== this.currentPath) {
          // Check if both pages should have transitions before preventing default
          const currentPageHasTransitions = logoUtils.shouldHaveTransition(this.currentPath);
          const targetPageHasTransitions = logoUtils.shouldHaveTransition(href);
          const shouldUseTransition = currentPageHasTransitions && targetPageHasTransitions;

          if (shouldUseTransition) {
            // Only prevent default if we're going to handle the transition
            event.preventDefault();
            logoUtils.debug("Link click intercepted for transition", href);
            handlePathChange(href);
          } else {
            // Allow normal navigation for non-transition combinations
            logoUtils.debug("Allowing normal link navigation", {
              from: this.currentPath,
              to: href
            });
            // Don't prevent default - let browser handle normally
          }
        }
      }
    });

    // Remove the periodic URL check as it can cause issues
    // The other event listeners should be sufficient
  },

  // Show suffix based on current page using utilities
  showSuffixForPage(pathname, isTransition = false) {
    const elements = logoUtils.getLogoElements();
    if (!elements) {
      logoUtils.debug("Cannot show suffix - logo elements not found");
      return;
    }

    const { svg } = elements;

    // Ensure BETA letters are always visible
    const betaLetters = logoUtils.getBetaElements(svg);
    if (betaLetters.length > 0) {
      const config = aniGlobalVars.animations;
      animationModules.setupElements(betaLetters, {
        y: config.visibleY,
        opacity: config.visible,
        transformOrigin: config.transformOrigin
      });
      logoUtils.debug("BETA letters ensured visible", betaLetters.length);
    }

    // Hide all suffixes first
    const allSuffixes = logoUtils.getSuffixElements(svg);
    logoUtils.debug("Found suffix elements", allSuffixes.length);
    animationModules.setupElements(allSuffixes, { display: "none" });

    // Find and show target suffix
    const targetSuffix = logoUtils.findTargetSuffix(svg, pathname);
    if (targetSuffix) {
      logoUtils.debug("Showing suffix for page", {
        pathname,
        suffix: targetSuffix.getAttribute("pagePath") || "(no pagePath attribute)",
        suffixClass: targetSuffix.getAttribute("class"),
        isTransition
      });
      this.animateSuffixIn(targetSuffix, isTransition);
    } else {
      logoUtils.debug("No suffix found for page - BETA will remain visible", {
        pathname,
        totalSuffixes: allSuffixes.length,
        availablePaths: allSuffixes.map((s) => s.getAttribute("pagePath"))
      });
      // Even without suffix, animate navbar and page wrapper
      const tl = gsap.timeline();
      tl.add(animationModules.createHeroSmallTitleAnimation("in"));
      tl.add(animationModules.createNavbarFadeAnimation("in"), "+=0.1");
      tl.add(animationModules.createPageWrapperFadeAnimation("in"), "+=0.05");
      // Fade in footer after main animation completes (increased delay)
      const footerEls = document.querySelectorAll(".footer");
      if (footerEls.length > 0) {
        tl.add(
          gsap.to(footerEls, {
            opacity: 1,
            duration: 0.4,
            ease: "power2.out"
          }),
          "+=2.8"
        );
      }
    }
  },

  // Animate suffix in using modular animations
  animateSuffixIn(suffix, isTransition = false) {
    console.log("saif Animating suffix in", suffix, { isTransition });

    const config = aniGlobalVars.animations;

    // Show suffix
    gsap.set(suffix, { display: "block" });

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

    // All pages use same simple animation - just stagger in
    logoUtils.debug("Using stagger in animation for page load", {
      currentPath: window.location.pathname
    });

    // Logo stagger in animation FIRST
    tl.add(animationModules.createEnterAnimation(letters));

    // Fade in hero small title AFTER letters animation completes
    tl.add(
      animationModules.createHeroSmallTitleAnimation("in"),
      `+=${config.heroSmallTitleEnterDelay}`
    );

    // Fade in navbar AFTER hero title animation completes
    tl.add(animationModules.createNavbarFadeAnimation("in"), "+=0.1");

    // Fade in page wrapper AFTER navbar fades in
    tl.add(animationModules.createPageWrapperFadeAnimation("in"), "+=0.05");

    // Animate the whole suffix container
    tl.add(animationModules.createSuffixAnimation(suffix, "in"), 0.1);

    // Fire custom event 1 second before animation completes (for hero image preparation)
    tl.call(
      () => {
        // Dispatch custom event for page animation completion
        const event = new CustomEvent("pageTransitionComplete", {
          detail: {
            pathname: window.location.pathname,
            isTransition: isTransition,
            isInitialLoad: !isTransition
          }
        });
        document.dispatchEvent(event);
        logoUtils.debug("Page animation complete event fired (1s early)", { isTransition });
      },
      null,
      "-=0.3"
    ); // Fire 0.3 second before timeline ends

    logoUtils.debug("Suffix animated in", { isTransition });
  },

  // Animate suffix out using modular animations
  animateSuffixOut(suffix, callback) {
    const letters = logoUtils.getLettersFromSuffix(suffix);

    // Create timeline for exit animation
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set(suffix, { display: "none" });
        logoUtils.debug("Suffix animated out");
        if (callback) callback();
      }
    });

    // Animate letters out with stagger
    tl.add(animationModules.createExitAnimation(letters));

    // Animate the whole suffix out
    tl.add(animationModules.createSuffixAnimation(suffix, "out"), 0.2);
  },

  // Animate current suffix with stagger up effect during transition
  animateStaggerUpTransition(suffix, callback) {
    const letters = logoUtils.getLettersFromSuffix(suffix);

    logoUtils.debug(
      "Starting page wrapper and hero small title fade out before logo stagger up transition"
    );

    // Create stagger up animation for current suffix
    const staggerUpTl = gsap.timeline({
      onComplete: () => {
        // Hide the suffix after stagger up animation
        gsap.set(suffix, { display: "none" });
        logoUtils.debug("Stagger up transition complete, suffix hidden");
        if (callback) callback();
      }
    });

    // Fade out hero small title FIRST (fastest)
    staggerUpTl.add(animationModules.createHeroSmallTitleAnimation("out"));

    // Fade out page wrapper shortly after
    staggerUpTl.add(animationModules.createPageWrapperFadeAnimation("out"), "+=0.05");

    // Apply stagger up animation to current letters AFTER page wrapper fades
    staggerUpTl.add(animationModules.createStaggerUpAnimation(letters), "+=0.1");

    // Fade out navbar AFTER logo stagger up completes
    staggerUpTl.add(animationModules.createNavbarFadeAnimation("out"), "+=0.1");
  }, // Handle page transitions using utilities
  transitionToPage(newPath) {
    logoUtils.debug("Starting controlled transition to page", newPath);

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
      logoUtils.debug(
        "Current suffix found, starting stagger up animation",
        currentSuffix.getAttribute("pagePath")
      );

      // Start the stagger up animation for current suffix
      this.animateStaggerUpTransition(currentSuffix, () => {
        // Navigate immediately when animation completes
        logoUtils.debug("Stagger up animation complete, navigating to new page");
        this.completeTransition(newPath);
      });
    } else {
      logoUtils.debug("No current suffix, navigating directly");
      // No current suffix, navigate immediately
      this.completeTransition(newPath);
    }
  },

  // Complete the actual navigation and show new page
  completeTransition(newPath) {
    logoUtils.debug("Completing transition to", newPath);

    // Clear any existing timeouts or animations that might interfere
    gsap.killTweensOf("*");

    // Update our internal state first
    this.currentPath = newPath;
    this.isTransitioning = false;
    this.pendingPath = null;

    // Add a flag to localStorage to prevent re-initialization issues
    localStorage.setItem("logoAnimationTransitioning", "true");

    // Small delay to ensure state is properly set before navigation
    setTimeout(() => {
      // Perform the actual page navigation
      window.location.href = newPath;
    }, 50);

    logoUtils.debug("Navigating to", newPath);
  },

  // Reset animation (useful for testing)
  reset() {
    if (this.timeline) {
      this.timeline.kill();
    }
    this.isInitialLoad = true; // Reset initial load state
    this.isTransitioning = false; // Reset transition state
    this.pendingPath = null; // Clear pending path
    logoUtils.debug("Animation reset");
    this.setupInitialState();
  },

  // Kill all animations
  killAnimations() {
    if (this.timeline) {
      this.timeline.kill();
    }
    gsap.killTweensOf("*");
    logoUtils.debug("All animations killed");
  },

  // Enable/disable debug mode
  setDebugMode(enabled) {
    aniGlobalVars.navigation.debugMode = enabled;
    logoUtils.debug("Debug mode", enabled ? "enabled" : "disabled");
  }
};

// Initialization module
const logoInitializer = {
  init() {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", () => {
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
if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
  logoAnimations.setDebugMode(true);
}

// Module exports
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    logoAnimations,
    aniGlobalVars,
    logoUtils,
    animationModules
  };
}

console.log("Logo animation script loaded");
