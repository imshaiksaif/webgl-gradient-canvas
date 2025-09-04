console.log("src/gradient-v2.js");


// <canvas id="gradient-canvas"></canvas>
// <style>
// #gradient-canvas {
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   z-index: -1;
//   pointer-events: none;
// }
// </style>


// WebGL Gradient Setup
class GradientCanvas {
  constructor() {
    this.canvas = document.getElementById('gradient-canvas');
    this.gl = this.canvas.getContext('webgl');
    this.mouse = { x: 0.5, y: 0.5 };
    this.targetMouse = { x: 0.5, y: 0.5 };
    this.isMobile = window.innerWidth <= 1024 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    this.time = 0;

    console.log('Window width:', window.innerWidth, 'isMobile:', this.isMobile);
    console.log('User Agent:', navigator.userAgent);

    this.init();
    this.setupEventListeners();
    this.render();
  }

  init() {
    const gl = this.gl;

    // Vertex Shader
    const vertexShaderSource = `
      attribute vec2 a_position;
      varying vec2 v_uv;

      void main() {
        v_uv = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    // Fragment Shader
    const fragmentShaderSource = `
      precision mediump float;

      varying vec2 v_uv;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      uniform float u_time;
      uniform float u_isMobile;

      // Improved noise function for smoother gradients
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

        // Smooth interpolation (Hermite interpolation)
        vec2 u = f * f * (3.0 - 2.0 * f);

        return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }

      // Fractal Brownian Motion for sophisticated texture
      float fbm(vec2 st) {
        float value = 0.0;
        float amplitude = 0.5;
        float frequency = 0.0;

        for (int i = 0; i < 4; i++) {
          value += amplitude * noise(st);
          st *= 2.0;
          amplitude *= 0.5;
        }
        return value;
      }

      void main() {
        vec2 st = v_uv;
        vec2 mouse = u_mouse;

        // Simple base gradient - light to dark from top-left to bottom-right
        float baseGradient = 1.0 - (st.x * 0.4 + st.y * 0.6);

        // Mouse interaction (desktop only) - creates dynamic gradient shift
        float mouseInfluence = 0.0;
        if (u_isMobile < 0.5) {
          // Create a more directional gradient influence instead of circular
          vec2 mouseOffset = st - mouse;
          
          // Reduced directional influence to prevent extreme contrasts
          float directionalInfluence = (mouse.x - 0.5) * 0.2 + (mouse.y - 0.5) * 0.15;
          baseGradient += directionalInfluence;
          
          // Add subtle radial component for local variation
          float mouseDistance = length(mouseOffset);
          float radialInfluence = smoothstep(0.4, 0.0, mouseDistance) * 0.15;
          
          // Reduced flow influence to maintain overall balance
          float flowX = (st.x - mouse.x) * (mouse.y - 0.5) * 0.1;
          float flowY = (st.y - mouse.y) * (mouse.x - 0.5) * 0.08;
          
          mouseInfluence = radialInfluence + flowX + flowY;
        }

        // Mobile animation - slow, organic movement
        if (u_isMobile > 0.5) {
          float slowTime = u_time * 0.25; // Faster for more visible movement
          
          // Create organic breathing pattern with multiple frequencies
          float wave1 = sin(slowTime) * 0.12;
          float wave2 = cos(slowTime * 0.7) * 0.08;
          float wave3 = sin(slowTime * 1.3) * 0.05; // Add subtle variation
          
          // Add slight positional variation for more natural feel
          float posVariation = sin(st.x * 2.0 + slowTime * 0.5) * 0.02;
          
          float mobileAnimation = wave1 + wave2 + wave3 + posVariation;
          baseGradient += mobileAnimation;
        }

        // Combine influences
        float finalValue = baseGradient + mouseInfluence;
        finalValue = clamp(finalValue, 0.0, 1.0);

        // Simple grey gradient - light to dark
        vec3 lightGrey = vec3(0.85, 0.85, 0.85);
        vec3 darkGrey = vec3(0.35, 0.35, 0.35);

        vec3 color = mix(darkGrey, lightGrey, finalValue);

        gl_FragColor = vec4(color, 1.0);
      }
    `;

    // Compile shaders
    const vertexShader = this.createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = this.createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

    // Create program
    this.program = this.createProgram(gl, vertexShader, fragmentShader);

    // Setup geometry
    const positions = new Float32Array([
      -1, -1,  1, -1, -1,  1,
      -1,  1,  1, -1,  1,  1,
    ]);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    // Get attribute and uniform locations
    this.positionLocation = gl.getAttribLocation(this.program, 'a_position');
    this.resolutionLocation = gl.getUniformLocation(this.program, 'u_resolution');
    this.mouseLocation = gl.getUniformLocation(this.program, 'u_mouse');
    this.timeLocation = gl.getUniformLocation(this.program, 'u_time');
    this.isMobileLocation = gl.getUniformLocation(this.program, 'u_isMobile');

    this.resize();
  }

  createShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error('Shader compile error:', gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
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
      console.error('Program link error:', gl.getProgramInfoLog(program));
      gl.deleteProgram(program);
      return null;
    }

    return program;
  }

  setupEventListeners() {
    // Mouse tracking (desktop only)
    if (!this.isMobile) {
      document.addEventListener('mousemove', (e) => {
        this.targetMouse.x = e.clientX / window.innerWidth;
        this.targetMouse.y = 1.0 - (e.clientY / window.innerHeight);
      });

      // Initialize mouse position to center
      this.targetMouse.x = 0.5;
      this.targetMouse.y = 0.5;
    }

    // Resize handling
    window.addEventListener('resize', () => {
      this.resize();
      const wasMobile = this.isMobile;
      this.isMobile = window.innerWidth <= 1024 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

      console.log('Resize - Window width:', window.innerWidth, 'isMobile:', this.isMobile);

      // If switching to desktop, re-setup mouse tracking
      if (wasMobile && !this.isMobile) {
        document.addEventListener('mousemove', (e) => {
          this.targetMouse.x = e.clientX / window.innerWidth;
          this.targetMouse.y = 1.0 - (e.clientY / window.innerHeight);
        });
      }
    });
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
  }

  render() {
    const gl = this.gl;
    this.time += 0.016; // ~60fps

    // More responsive mouse interpolation - less easing
    if (!this.isMobile) {
      this.mouse.x += (this.targetMouse.x - this.mouse.x) * 0.12;
      this.mouse.y += (this.targetMouse.y - this.mouse.y) * 0.12;
    } else {
      // Keep mouse centered on mobile
      this.mouse.x = 0.5;
      this.mouse.y = 0.5;
    }

    // Render
    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.useProgram(this.program);

    gl.enableVertexAttribArray(this.positionLocation);
    gl.vertexAttribPointer(this.positionLocation, 2, gl.FLOAT, false, 0, 0);

    gl.uniform2f(this.resolutionLocation, this.canvas.width, this.canvas.height);
    gl.uniform2f(this.mouseLocation, this.mouse.x, this.mouse.y);
    gl.uniform1f(this.timeLocation, this.time);
    gl.uniform1f(this.isMobileLocation, this.isMobile ? 1.0 : 0.0);

    gl.drawArrays(gl.TRIANGLES, 0, 6);

    requestAnimationFrame(() => this.render());
  }
}

  new GradientCanvas();

