// Configuration
const CURSOR_CONFIG = {
  size: 22, // Cursor size in pixels
  color: "#fff", // Cursor color
  blendMode: "difference", // CSS blend mode
  // Higher = snappier / less lag. Try values between 0.3 - 0.7. Set to 1 for instant follow.
  easeSpeed: 0.7,
  hoverScale: 1.5, // Scale multiplier on hover
  hoverOpacity: 0.6 // Opacity on hover
};

// Runtime override helper: you can set one of these from the console to test without editing
// window.CURSOR_EASE_SPEED = 0.5
// window.cursorEaseSpeed = 0.5
// window.__CURSOR_CONFIG = { easeSpeed: 0.5 }
function getEaseSpeed() {
  try {
    if (typeof window !== "undefined") {
      if (typeof window.CURSOR_EASE_SPEED === "number") return window.CURSOR_EASE_SPEED;
      if (typeof window.cursorEaseSpeed === "number") return window.cursorEaseSpeed;
      if (window.__CURSOR_CONFIG && typeof window.__CURSOR_CONFIG.easeSpeed === "number")
        return window.__CURSOR_CONFIG.easeSpeed;
    }
  } catch (e) {
    // ignore access errors in exotic environments
  }
  return CURSOR_CONFIG.easeSpeed;
}

// Inject CSS styles for the cursor
function injectCursorStyles() {
  // Check if styles already exist
  if (document.getElementById("custom-cursor-styles")) return;

  const style = document.createElement("style");
  style.id = "custom-cursor-styles";
  style.textContent = `
    .cursor {
      position: fixed;
      top: 0;
      left: 0;
      width: ${CURSOR_CONFIG.size}px;
      height: ${CURSOR_CONFIG.size}px;
      background: ${CURSOR_CONFIG.color};
      transform-origin: center;
      pointer-events: none;
      mix-blend-mode: ${CURSOR_CONFIG.blendMode};
      opacity: 0;
    /* Remove transform transition so JS-driven positioning isn't double-smoothed.
      Keep only opacity transitioning for fades. */
    transition: opacity .12s ease-out;
      will-change: transform, opacity;
      z-index: 9999;
    }

    /* Hover state for links/buttons — fast, subtle */
    .cursor--hover {
      --cursor-scale: ${CURSOR_CONFIG.hoverScale};
      opacity: ${CURSOR_CONFIG.hoverOpacity};
    }

    /* Reduce motion respect */
    @media (prefers-reduced-motion: reduce) {
      .cursor {
        transition: none !important;
      }
    }
  `;
  document.head.appendChild(style);
}

// Create cursor element if it doesn't exist
function createCursorElement() {
  let cursor = document.querySelector(".cursor");

  if (!cursor) {
    cursor = document.createElement("div");
    cursor.className = "cursor";
    document.body.appendChild(cursor);
  }

  return cursor;
}

// Initialize immediately if DOM is ready, otherwise wait
function initCursor() {
  // Inject styles first
  injectCursorStyles();

  // Create or get cursor element
  const cursor = createCursorElement();

  if (!cursor) {
    console.warn("Custom cursor: Failed to create cursor element.");
    return;
  }

  // Start safely off-screen to avoid flashes
  cursor.style.transform = "translate(-100px, -100px) scale(var(--cursor-scale, 1))";
  cursor.style.opacity = "0";

  // Smooth, low-lag follow using rAF with interpolation
  let mx = -100,
    my = -100;
  let currentX = -100,
    currentY = -100;
  let rafId = null;
  let isActive = false;

  // Cache easing to avoid calling getter each frame. Call refreshCursorEase() to update.
  let cachedEase = (function () {
    let e = getEaseSpeed();
    if (!Number.isFinite(e)) e = CURSOR_CONFIG.easeSpeed;
    return Math.max(0, Math.min(1, e));
  })();

  function refreshCachedEase() {
    let v = getEaseSpeed();
    if (!Number.isFinite(v)) v = CURSOR_CONFIG.easeSpeed;
    v = Math.max(0, Math.min(1, v));
    cachedEase = v;
    return cachedEase;
  }

  try {
    if (typeof window !== "undefined") {
      window.refreshCursorEase = refreshCachedEase;
      window.setCursorEase = function (v) {
        window.cursorEaseSpeed = v;
        return refreshCachedEase();
      };
    }
  } catch (e) {
    // ignore
  }

  function tick() {
    // Smooth interpolation for organic feel (uses cached value for performance)
    currentX += (mx - currentX) * cachedEase;
    currentY += (my - currentY) * cachedEase;

    // Use transform to position the cursor
    cursor.style.transform = `translate(${currentX}px, ${currentY}px) scale(var(--cursor-scale, 1))`;

    // Continue animation loop while cursor is active
    if (isActive) {
      rafId = requestAnimationFrame(tick);
    }
  }

  function onMove(e) {
    mx = e.clientX;
    my = e.clientY;

    // Show cursor on first move
    if (cursor.style.opacity !== "1") {
      cursor.style.opacity = "1";
      currentX = mx;
      currentY = my;
    }

    // Start animation loop if not already running
    if (!isActive) {
      isActive = true;
      tick();
    }
  }

  // Pointer events are a bit snappier than mouse events
  document.addEventListener("pointermove", onMove, { passive: true });

  // Global hover state (fast) — attach directly to elements to reduce delegation lag
  const HOVER_SELECTOR = 'a, button, [role="button"], [data-cursor="hover"]';
  function attachHoverHandlers(root = document) {
    root.querySelectorAll(HOVER_SELECTOR).forEach((el) => {
      // avoid double-binding
      if (el._cursorBound) return;
      el._cursorBound = true;
      el.addEventListener("pointerenter", () => cursor.classList.add("cursor--hover"), {
        passive: true
      });
      el.addEventListener("pointerleave", () => cursor.classList.remove("cursor--hover"), {
        passive: true
      });
    });
  }
  attachHoverHandlers();

  // If Webflow/AJAX injects new links, observe and attach quickly
  const mo = new MutationObserver((muts) => {
    for (const m of muts) {
      m.addedNodes &&
        m.addedNodes.forEach((node) => {
          if (node.nodeType === 1) {
            // element
            if (node.matches && node.matches(HOVER_SELECTOR))
              attachHoverHandlers(node.parentNode || document);
            else attachHoverHandlers(node);
          }
        });
    }
  });
  mo.observe(document.documentElement, { childList: true, subtree: true });

  // Optional: hide when leaving window, re-show on enter
  window.addEventListener(
    "mouseleave",
    () => {
      cursor.style.opacity = "0";
      isActive = false; // Stop animation loop
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    },
    { passive: true }
  );
  window.addEventListener(
    "mouseenter",
    (e) => {
      mx = e.clientX;
      my = e.clientY;
      currentX = mx;
      currentY = my;
      cursor.style.opacity = "1";
      if (!isActive) {
        isActive = true;
        tick();
      }
    },
    { passive: true }
  );
}

// Handle both deferred script loading and normal execution
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initCursor);
} else {
  // DOM is already ready (script loaded with defer or after page load)
  initCursor();
}
