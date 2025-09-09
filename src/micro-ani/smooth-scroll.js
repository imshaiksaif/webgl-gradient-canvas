/*
- Smooth scroll implementation for Webflow
- Easy to include and configure
- Works with GSAP ScrollTrigger
*/

class SmoothScroll {
  constructor(options = {}) {
    this.options = {
      // Smooth scroll settings
      ease: 0.1,        // Lower = smoother, Higher = faster response
      speed: 1,         // Scroll speed multiplier

      // Mobile settings
      disableOnMobile: true,  // Disable on mobile for better performance
      mobileBreakpoint: 768,

      // Performance settings
      resizeDelay: 150,

      // Debug
      debug: false,

      ...options
    };

    this.scroll = {
      ease: this.options.ease,
      current: 0,
      target: 0,
      last: 0
    };

    this.data = {
      ease: this.options.ease,
      current: 0,
      target: 0,
      last: 0
    };

    this.isScrolling = false;
    this.isResizing = false;
    this.isMobile = false;

    this.init();
  }

  init() {
    // Check if we should disable on mobile
    this.checkMobile();
    
    if (this.isMobile && this.options.disableOnMobile) {
      this.log('Smooth scroll disabled on mobile');
      return;
    }

    // Check for Lenis first, load if not available
    if (typeof Lenis === 'undefined') {
      this.log('Lenis not found, loading from CDN...');
      this.loadLenis().then(() => {
        this.initWithLenis();
      }).catch(() => {
        this.log('Failed to load Lenis, falling back to custom smooth scroll');
        this.initCustomSmooth();
      });
    } else {
      this.log('Lenis found, initializing...');
      this.initWithLenis();
    }
  }

  loadLenis() {
    return new Promise((resolve, reject) => {
      // Check if script already exists
      if (document.querySelector('script[src*="lenis"]')) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://unpkg.com/@studio-freight/lenis@1.0.42/dist/lenis.min.js';
      script.onload = () => {
        this.log('Lenis CDN loaded successfully');
        resolve();
      };
      script.onerror = () => {
        this.log('Failed to load Lenis CDN');
        reject();
      };
      document.head.appendChild(script);
    });
  }

  initWithLenis() {
    this.log('Initializing with Lenis smooth scroll');
    
    // Initialize Lenis
    this.lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false
    });

    // Connect with GSAP if available
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      this.lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add((time) => {
        this.lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
      this.log('Lenis connected with GSAP ScrollTrigger');
    } else {
      // Fallback RAF
      const raf = (time) => {
        this.lenis.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
      this.log('Lenis initialized without GSAP');
    }
  }

  initCustomSmooth() {
    // Check for GSAP
    if (typeof gsap === 'undefined') {
      console.warn('SmoothScroll: GSAP not found, using fallback');
      this.initFallback();
      return;
    }

    this.log('Initializing custom smooth scroll');
    this.setupDOM();
    this.bindEvents();
    this.startRAF();
  }  checkMobile() {
    this.isMobile = window.innerWidth <= this.options.mobileBreakpoint;
    this.log(`Mobile check: ${this.isMobile ? 'Mobile' : 'Desktop'}`);
  }

  setupDOM() {
    // Create smooth scroll container
    this.body = document.body;
    this.scrollElement = document.documentElement;

    // Set body height to enable scrolling
    this.setBodyHeight();

    // Fix body to enable smooth scroll
    gsap.set(this.body, {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%'
    });
  }

  setBodyHeight() {
    // Calculate total content height
    this.data.height = this.scrollElement.scrollHeight;

    // Set body height to match content
    this.body.style.height = `${this.data.height}px`;

    this.log(`Body height set to: ${this.data.height}px`);
  }

  bindEvents() {
    // Scroll event
    window.addEventListener('scroll', this.onScroll.bind(this));

    // Resize event with debounce
    window.addEventListener('resize', this.onResize.bind(this));

    // Wheel event for custom scroll speed
    window.addEventListener('wheel', this.onWheel.bind(this), { passive: false });

    this.log('Events bound');
  }

  onScroll() {
    this.scroll.target = window.pageYOffset || this.scrollElement.scrollTop;
  }

  onWheel(e) {
    // Custom wheel handling for smoother experience
    if (!this.options.speed || this.options.speed === 1) return;

    e.preventDefault();

    const delta = e.deltaY * this.options.speed;
    this.scroll.target += delta;

    // Clamp scroll within bounds
    this.scroll.target = Math.max(0, Math.min(this.scroll.target, this.data.height - window.innerHeight));

    // Update actual scroll position
    window.scrollTo(0, this.scroll.target);
  }

  onResize() {
    if (this.isResizing) return;

    this.isResizing = true;

    setTimeout(() => {
      this.checkMobile();

      if (this.isMobile && this.options.disableOnMobile) {
        this.destroy();
        return;
      }

      this.setBodyHeight();
      this.updateScrollTrigger();
      this.isResizing = false;

      this.log('Resize handled');
    }, this.options.resizeDelay);
  }

  updateScrollTrigger() {
    // Refresh ScrollTrigger if available
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.refresh();
      this.log('ScrollTrigger refreshed');
    }
  }

  startRAF() {
    this.raf = this.raf.bind(this);
    this.raf();
  }

  raf() {
    // Calculate smooth scroll
    this.scroll.current += (this.scroll.target - this.scroll.current) * this.scroll.ease;

    // Round to avoid sub-pixel rendering
    this.scroll.current = Math.round(this.scroll.current * 100) / 100;

    // Only update if there's a meaningful change
    if (Math.abs(this.scroll.current - this.scroll.last) > 0.1) {
      this.updateElements();
      this.scroll.last = this.scroll.current;
    }

    requestAnimationFrame(this.raf);
  }

  updateElements() {
    // Update body position for smooth scroll effect
    gsap.set(this.body, {
      y: -this.scroll.current
    });

    // Update ScrollTrigger's scroll position
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.update();
    }
  }

  // Fallback for when GSAP is not available
  initFallback() {
    this.log('Using CSS smooth scroll fallback');

    // Use CSS smooth scroll
    document.documentElement.style.scrollBehavior = 'smooth';

    // Add some custom easing if supported
    if (CSS.supports('scroll-behavior', 'smooth')) {
      this.log('Native smooth scroll enabled');
    }
  }

  // Public methods
  scrollTo(target, duration = 1) {
    if (this.lenis) {
      // Use Lenis scrollTo
      this.lenis.scrollTo(target, { duration: duration * 1000 });
      return;
    }

    if (typeof gsap === 'undefined') {
      // Fallback scroll
      window.scrollTo({
        top: target,
        behavior: 'smooth'
      });
      return;
    }

    // GSAP scroll
    gsap.to(this.scroll, {
      target: target,
      duration: duration,
      ease: "power2.out",
      onUpdate: () => {
        window.scrollTo(0, this.scroll.target);
      }
    });
  }

  enable() {
    if (this.isMobile && this.options.disableOnMobile) return;

    this.init();
    this.log('Smooth scroll enabled');
  }

  disable() {
    this.destroy();
    this.log('Smooth scroll disabled');
  }

  destroy() {
    // Destroy Lenis if it exists
    if (this.lenis) {
      this.lenis.destroy();
      this.lenis = null;
      this.log('Lenis destroyed');
    }

    // Remove RAF
    if (this.raf) {
      cancelAnimationFrame(this.raf);
    }

    // Reset body styles if they were modified
    if (this.body && typeof gsap !== 'undefined') {
      gsap.set(this.body, {
        clearProps: "all"
      });
      this.body.style.height = 'auto';
    }

    // Remove event listeners
    if (this.onScroll) {
      window.removeEventListener('scroll', this.onScroll);
    }
    if (this.onResize) {
      window.removeEventListener('resize', this.onResize);
    }
    if (this.onWheel) {
      window.removeEventListener('wheel', this.onWheel);
    }

    this.log('Smooth scroll destroyed');
  }

  log(message) {
    if (this.options.debug) {
      console.log(`[SmoothScroll] ${message}`);
    }
  }
}

// Simple initialization function
function initSmoothScroll(options = {}) {
  return new SmoothScroll(options);
}

// Auto-initialize with default settings
function autoInitSmoothScroll() {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      window.smoothScrollInstance = initSmoothScroll({
        debug: true
      });
    });
  } else {
    window.smoothScrollInstance = initSmoothScroll({
      debug: true
    });
  }
}

// Export for global use
if (typeof window !== 'undefined') {
  window.SmoothScroll = SmoothScroll;
  window.initSmoothScroll = initSmoothScroll;
  window.autoInitSmoothScroll = autoInitSmoothScroll;
}

// Auto-initialize (can be disabled by setting window.disableSmoothScroll = true)
if (typeof window !== 'undefined' && !window.disableSmoothScroll) {
  autoInitSmoothScroll();
}
