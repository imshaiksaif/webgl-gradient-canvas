console.log("Page Transition with V3 Gradient");
console.log("🎛️  Control influence points: window.transitionsMouses = 1 or 2");
console.log("Current setting:", window.transitionsMouses || "1 (default)");

// Set default if not specified
if (typeof window.transitionsMouses === 'undefined') {
  window.transitionsMouses = 1;
}

class PageTransitionV3 {
  constructor() {
    this.canvas = null;
    this.gl = null;
    this.program = null;
    this.transitionProgress = 0;
    this.pendingUrl = null;
    this.animationId = null;
    this.mouse = { x: 0.5, y: 0.5 };
    this.targetMouse = { x: 0.5, y: 0.5 };
    this.time = 0;
    this.isMobile = false; // Auto-animation works for all devices

    this.init();
    this.setupPageInterception();
    this.setupPageLoad();
  }

  init() {
    // Create canvas with specific ID to exclude from body fade
    this.canvas = document.createElement('canvas');
    this.canvas.id = 'gradient-canvas';
    this.canvas.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 9999;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease;
    `;
    document.body.appendChild(this.canvas);

    // Get WebGL context
    this.gl = this.canvas.getContext('webgl');
    if (!this.gl) {
      console.error('WebGL not supported');
      return;
    }

    this.setupShaders();
    this.setupGeometry();
    this.setupEventListeners();
    this.resize();
  }

  setupShaders() {
    const gl = this.gl;

    const vertexShaderSource = `
      attribute vec2 a_position;
      varying vec2 v_uv;
      void main() {
        v_uv = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    // EXACT V3 gradient shader with transition
    const fragmentShaderSource = `
      precision mediump float;

      varying vec2 v_uv;
      uniform vec2 u_mouse;
      uniform vec2 u_mouse2;
      uniform float u_time;
      uniform float u_isMobile;
      uniform float u_progress;
      uniform float u_dualMouse;

      // High-quality noise function for anti-banding
      float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
      }

      float noise(vec2 st) {
        vec2 i = floor(st);
        vec2 f = fract(st);

        float a = random(i);
        float b = random(i + vec2(1.0, 0.0));
        float c = random(i + vec2(0.0, 1.0));
        float d = random(i + vec2(1.0, 1.0));

        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }

      void main() {
        vec2 st = v_uv;
        vec2 mouse = u_mouse;
        vec2 mouse2 = u_mouse2;

        // Base gradient - elegant diagonal flow
        float baseGradient = 1.0 - (st.x * 0.4 + st.y * 0.6);

        // Desktop mouse interaction - dynamic influence count
        float mouseInfluence = 0.0;
        if (u_isMobile < 0.5) {
          // First influence point (always active)
          vec2 mouseOffset = st - mouse;
          float directionalInfluence = (mouse.x - 0.5) * 0.25 + (mouse.y - 0.5) * 0.18;
          baseGradient += directionalInfluence;

          float mouseDistance = length(mouseOffset);
          float radialInfluence = smoothstep(0.35, 0.0, mouseDistance) * 0.2;
          float flowX = (st.x - mouse.x) * (mouse.y - 0.5) * 0.12;
          float flowY = (st.y - mouse.y) * (mouse.x - 0.5) * 0.1;
          
          mouseInfluence = radialInfluence + flowX + flowY;

          // Second influence point (conditional based on u_dualMouse)
          if (u_dualMouse > 0.5) {
            vec2 mouseOffset2 = st - mouse2;
            float directionalInfluence2 = (mouse2.x - 0.5) * 0.2 + (mouse2.y - 0.5) * 0.15;
            
            float mouseDistance2 = length(mouseOffset2);
            float radialInfluence2 = smoothstep(0.3, 0.0, mouseDistance2) * 0.15;
            float flowX2 = (st.x - mouse2.x) * (mouse2.y - 0.5) * 0.08;
            float flowY2 = (st.y - mouse2.y) * (mouse2.x - 0.5) * 0.06;
            
            float secondInfluence = radialInfluence2 + flowX2 + flowY2;
            mouseInfluence += secondInfluence + directionalInfluence2;
          }
        }

        // Mobile animation - subtle breathing effect
        if (u_isMobile > 0.5) {
          float slowTime = u_time * 0.25;

          // Organic breathing pattern with multiple frequencies
          float wave1 = sin(slowTime) * 0.12;
          float wave2 = cos(slowTime * 0.7) * 0.08;
          float wave3 = sin(slowTime * 1.3) * 0.05;

          // Positional variation for natural feel
          float posVariation = sin(st.x * 2.0 + slowTime * 0.5) * 0.02;

          float mobileAnimation = wave1 + wave2 + wave3 + posVariation;
          baseGradient += mobileAnimation;
        }

        // Combine all influences
        float finalValue = baseGradient + mouseInfluence;
        finalValue = clamp(finalValue, 0.0, 1.0);

        // Anti-banding techniques for smooth gradients
        float dither = (noise(st * 500.0) - 0.5) * 0.01;
        finalValue += dither;
        finalValue = clamp(finalValue, 0.0, 1.0);

        // EXACT V3 color palette - slightly darkened
        vec3 lightGrey = vec3(0.8, 0.81, 0.82);     // Slightly darker light grey
        vec3 mediumGrey = vec3(0.55, 0.56, 0.57);   // Slightly darker medium grey
        vec3 darkGrey = vec3(0.28, 0.29, 0.3);      // Slightly darker dark grey    

        // Multi-zone interpolation for smooth transitions
        vec3 color;
        if (finalValue > 0.66) {
          float t = (finalValue - 0.66) / 0.34;
          color = mix(mediumGrey, lightGrey, smoothstep(0.0, 1.0, t));
        } else if (finalValue > 0.33) {
          float t = (finalValue - 0.33) / 0.33;
          color = mix(darkGrey, mediumGrey, smoothstep(0.0, 1.0, t));
        } else {
          float t = finalValue / 0.33;
          color = mix(darkGrey * 0.85, darkGrey, smoothstep(0.0, 1.0, t));
        }

        // Micro color variations to prevent flatness
        color.r += sin(st.x * 20.0 + u_time * 0.1) * 0.003;
        color.g += cos(st.y * 15.0 + u_time * 0.08) * 0.002;
        color.b += sin((st.x + st.y) * 12.0 + u_time * 0.12) * 0.002;

        gl_FragColor = vec4(color, 1.0);
      }
    `;

    // Compile shaders
    const vertexShader = this.createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = this.createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
    this.program = this.createProgram(gl, vertexShader, fragmentShader);

    // Get locations
    this.mouseLocation = gl.getUniformLocation(this.program, 'u_mouse');
    this.mouse2Location = gl.getUniformLocation(this.program, 'u_mouse2');
    this.timeLocation = gl.getUniformLocation(this.program, 'u_time');
    this.isMobileLocation = gl.getUniformLocation(this.program, 'u_isMobile');
    this.progressLocation = gl.getUniformLocation(this.program, 'u_progress');
    this.dualMouseLocation = gl.getUniformLocation(this.program, 'u_dualMouse');
    this.positionLocation = gl.getAttribLocation(this.program, 'a_position');
  }

  setupGeometry() {
    const gl = this.gl;
    const positions = new Float32Array([
      -1, -1,  1, -1, -1,  1,
      -1,  1,  1, -1,  1,  1,
    ]);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
  }

  setupEventListeners() {
    // Auto-animate mouse position with organic movement
    // No actual mouse tracking - pure automatic animation
    
    // Resize handler
    window.addEventListener('resize', () => {
      this.resize();
    });
  }

  setupPageInterception() {
    // Intercept all internal links
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (!link) return;

      const href = link.getAttribute('href');

      // Only handle internal links
      if (!href ||
          href.startsWith('#') ||
          href.startsWith('mailto:') ||
          href.startsWith('tel:') ||
          href.includes('://') && !href.includes(window.location.hostname)) {
        return;
      }

      // Prevent default navigation
      e.preventDefault();

      // Start transition - THIS IS WHERE startTransition IS CALLED
      this.startTransition(href);
    });

    // Handle browser back/forward buttons
    window.addEventListener('popstate', (e) => {
      this.startTransition(window.location.href);
    });
  }

  startTransition(url) {
    this.pendingUrl = url;
    
    // Show gradient transition overlay IMMEDIATELY
    this.canvas.style.opacity = '1';
    this.canvas.style.pointerEvents = 'auto';
    
    // Start gradient animation right away
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      this.transitionProgress = Math.min(elapsed / 3000, 1); // 3 seconds
      this.time += 0.016;
      
        // Auto-animate TWO mouse positions with organic movement during transition
        const slowTime = this.time * 0.6;   // Slower base speed
        const mediumTime = this.time * 0.9;  // Slower medium speed
        const fastTime = this.time * 1.3;    // Slower top speed

        // First influence point - primary movement
        this.targetMouse.x = 0.5 + 
          Math.sin(slowTime) * 0.25 + 
          Math.sin(mediumTime * 1.4) * 0.12 + 
          Math.sin(fastTime * 0.8) * 0.08;
        
        this.targetMouse.y = 0.5 + 
          Math.cos(slowTime * 0.9) * 0.2 + 
          Math.cos(mediumTime * 1.2) * 0.1 + 
          Math.cos(fastTime * 1.1) * 0.06;

        // Dynamic mouse influence based on window.transitionsMouses
        const useSecondMouse = window.transitionsMouses === 2;

        // Second influence point - counter movement
        if (useSecondMouse) {
          if (!this.secondMouse) {
            this.secondMouse = { x: 0.5, y: 0.5 };
            this.targetSecondMouse = { x: 0.5, y: 0.5 };
          }

          this.targetSecondMouse.x = 0.5 + 
            Math.cos(slowTime * 1.3) * 0.2 + 
            Math.sin(mediumTime * 0.7) * 0.1 + 
            Math.cos(fastTime * 1.5) * 0.06;
          
          this.targetSecondMouse.y = 0.5 + 
            Math.sin(slowTime * 1.1) * 0.18 + 
            Math.cos(mediumTime * 0.9) * 0.08 + 
            Math.sin(fastTime * 0.6) * 0.05;
        }              // Smooth interpolation - dynamic based on mouse count
        this.mouse.x += (this.targetMouse.x - this.mouse.x) * 0.08;
        this.mouse.y += (this.targetMouse.y - this.mouse.y) * 0.08;
        
        if (useSecondMouse && this.secondMouse) {
          this.secondMouse.x += (this.targetSecondMouse.x - this.secondMouse.x) * 0.06;
          this.secondMouse.y += (this.targetSecondMouse.y - this.secondMouse.y) * 0.06;
        }
      
      this.render();
      
      if (this.transitionProgress < 1) {
        this.animationId = requestAnimationFrame(animate);
      } else {
        // Navigate to new page
        this.navigateToNewPage();
      }
    };
    
    requestAnimationFrame(animate);
  }

  navigateToNewPage() {
    // Navigate to new page
    window.location.href = this.pendingUrl;
  }

  setupPageLoad() {
    // Handle new page fade-in
    window.addEventListener('load', () => {
      // Hide transition canvas
      this.canvas.style.opacity = '0';
      this.canvas.style.pointerEvents = 'none';
      
      // Fade in new page content (excluding the canvas)
      const pageContent = document.querySelectorAll('body > *:not(#gradient-canvas)');
      pageContent.forEach(element => {
        element.style.opacity = '0';
        element.style.transition = 'opacity 0.8s ease-in';
        
        // Fade in each element
        setTimeout(() => {
          element.style.opacity = '1';
        }, 200);
      });
    });
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
  }

  render() {
    const gl = this.gl;
    
    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    
    gl.useProgram(this.program);
    gl.enableVertexAttribArray(this.positionLocation);
    gl.vertexAttribPointer(this.positionLocation, 2, gl.FLOAT, false, 0, 0);
    
    gl.uniform2f(this.mouseLocation, this.mouse.x, this.mouse.y);
    gl.uniform2f(this.mouse2Location, this.secondMouse ? this.secondMouse.x : 0.5, this.secondMouse ? this.secondMouse.y : 0.5);
    gl.uniform1f(this.timeLocation, this.time);
    gl.uniform1f(this.isMobileLocation, this.isMobile ? 1.0 : 0.0);
    gl.uniform1f(this.progressLocation, this.transitionProgress);
    gl.uniform1f(this.dualMouseLocation, window.transitionsMouses === 2 ? 1.0 : 0.0);
    
    gl.drawArrays(gl.TRIANGLES, 0, 6);
  }

  createShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error('Shader error:', gl.getShaderInfoLog(shader));
      return null;
    }
    return shader;
  }

  createProgram(gl, vertexShader, fragmentShader) {
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program error:', gl.getProgramInfoLog(program));
      return null;
    }
    return program;
  }
}

// Initialize
new PageTransitionV3();
