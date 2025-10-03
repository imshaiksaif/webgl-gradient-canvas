# WebGl Parametrised Gradient

## Features

- **WebGL Gradient Background**: Professional gradient with anti-banding and smooth mouse interactions
- **Page Transitions**: Smooth page transitions with gradient overlay effects
- **Hero Title Animation**: Automatic animation of `[ss-ele='hero-small-title']` elements during page transitions
- **Responsive Design**: Works on both desktop and mobile devices

## Hero Small Title Animation

The system automatically animates elements with the `ss-ele='hero-small-title'` attribute during page transitions:

- **Fade Out**: Elements fade out and move up (-20px) when navigating away from a page
- **Fade In**: Elements fade in and move to position when loading a new page
- **Timing**: Hero titles animate out first (fastest), followed by other page elements

### Usage

Simply add the `ss-ele='hero-small-title'` attribute to any element you want animated:

```html
<h2 ss-ele="hero-small-title">Your Hero Title</h2>
<div ss-ele="hero-small-title">Another hero element</div>
```

## Basic Usage

```
  <body>
    <main></main>
    <canvas id="c"></canvas>

    <button id="testButton" onmouseenter="onMouseHover()" onmouseleave="onMouseHoverOut()"
      style="width: 200px; height: 60px; position: absolute; margin: 10px;">
      TEST BUTTON
    </button>

    <script src="dist/gradient-lib.js" type="module"></script>

    <script>
      function onMouseHover(e) {
        let hoverSettings = window.Gradient.params[1];
        window.Gradient.gl.scene.quad.tweenTo(hoverSettings, 1000);
      }
      function onMouseHoverOut(e) {
        let defaultSettings = window.Gradient.params[0];
        window.Gradient.gl.scene.quad.tweenTo(defaultSettings, 2000);
      }
      document.addEventListener("scroll", (event) => {
        var scrollTop = window.scrollY; // Current vertical scroll position
        var documentHeight = document.documentElement.scrollHeight; // Total height of the document
        var windowHeight = window.innerHeight; // Height of the visible window (viewport)

        // Calculate the scrollable distance
        var scrollableDistance = documentHeight - windowHeight;

        // Calculate the scroll percentage
        var scrollPercent = (scrollTop / scrollableDistance);

        if (window.Gradient)
          window.Gradient.setUniform( "bw", scrollPercent );
      })
    </script>


  </body>
  ```