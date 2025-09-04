console.log("src/gradient-final.js - Client Ready Version");

// GLSL Gradient - Final Version for Client
// Professional gradient with anti-banding and smooth mouse interactions
//
// Usage in Webflow:
// 1. Add this HTML to your page:
// <canvas id="gradient-canvas"></canvas>
//
// 2. Add this CSS:
// #gradient-canvas {
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   z-index: -1;
//   pointer-events: none;
// }
//
// 3. Embed this JavaScript file

// WebGL Gradient Setup
class GradientCanvas {
  constructor() {
    this.canvas = document.getElementById('gradient-canvas');
    if (!this.canvas) {
      console.error('Canvas element with id "gradient-canvas" not found');
      return;
    }

    this.gl = this.canvas.getContext('webgl');
    if (!this.gl) {
      console.error('WebGL not supported');
      return;
    }

    this.mouse = { x: 0.5, y: 0.5 };
    this.targetMouse = { x: 0.5, y: 0.5 };
    this.isMobile = window.innerWidth <= 1024 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    this.time = 0;

    console.log('Gradient initialized - Window width:', window.innerWidth, 'isMobile:', this.isMobile);

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

    // Fragment Shader with anti-banding techniques
    const fragmentShaderSource = `
      precision mediump float;

      varying vec2 v_uv;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      uniform float u_time;
      uniform float u_isMobile;

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

        // Smooth interpolation (Hermite interpolation)
        vec2 u = f * f * (3.0 - 2.0 * f);

        return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }

      void main() {
        vec2 st = v_uv;
        vec2 mouse = u_mouse;

        // Base gradient - elegant diagonal flow
        float baseGradient = 1.0 - (st.x * 0.4 + st.y * 0.6);

        // Desktop mouse interaction - responsive and smooth
        float mouseInfluence = 0.0;
        if (u_isMobile < 0.5) {
          vec2 mouseOffset = st - mouse;

          // Directional influence for natural gradient shifts
          float directionalInfluence = (mouse.x - 0.5) * 0.2 + (mouse.y - 0.5) * 0.15;
          baseGradient += directionalInfluence;

          // Radial influence for localized effects
          float mouseDistance = length(mouseOffset);
          float radialInfluence = smoothstep(0.4, 0.0, mouseDistance) * 0.15;

          // Flow effects for organic movement
          float flowX = (st.x - mouse.x) * (mouse.y - 0.5) * 0.1;
          float flowY = (st.y - mouse.y) * (mouse.x - 0.5) * 0.08;

          mouseInfluence = radialInfluence + flowX + flowY;
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
        // 1. Subtle dithering to eliminate color bands
        float dither = (noise(st * 500.0) - 0.5) * 0.01;
        finalValue += dither;
        finalValue = clamp(finalValue, 0.0, 1.0);

        // 2. High-precision color palette with natural variations
        vec3 lightGrey = vec3(0.86, 0.865, 0.87);   // Subtle color variation
        vec3 mediumGrey = vec3(0.605, 0.61, 0.615); // Smooth intermediate tone
        vec3 darkGrey = vec3(0.34, 0.345, 0.35);    // Rich dark base

        // 3. Multi-zone interpolation for smooth transitions
        vec3 color;
        if (finalValue > 0.66) {
          // Light zone - smooth transition to brightest areas
          float t = (finalValue - 0.66) / 0.34;
          color = mix(mediumGrey, lightGrey, smoothstep(0.0, 1.0, t));
        } else if (finalValue > 0.33) {
          // Medium zone - balanced mid-tones
          float t = (finalValue - 0.33) / 0.33;
          color = mix(darkGrey, mediumGrey, smoothstep(0.0, 1.0, t));
        } else {
          // Dark zone - rich shadows
          float t = finalValue / 0.33;
          color = mix(darkGrey * 0.85, darkGrey, smoothstep(0.0, 1.0, t));
        }

        // 4. Micro color variations to prevent flatness
        color.r += sin(st.x * 20.0 + u_time * 0.1) * 0.003;
        color.g += cos(st.y * 15.0 + u_time * 0.08) * 0.002;
        color.b += sin((st.x + st.y) * 12.0 + u_time * 0.12) * 0.002;

        gl_FragColor = vec4(color, 1.0);
      }
    `;

    // Compile and setup shaders
    const vertexShader = this.createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = this.createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

    if (!vertexShader || !fragmentShader) {
      console.error('Failed to compile shaders');
      return;
    }

    this.program = this.createProgram(gl, vertexShader, fragmentShader);
    if (!this.program) {
      console.error('Failed to create shader program');
      return;
    }

    // Setup geometry - full screen quad
    const positions = new Float32Array([
      -1, -1,  1, -1, -1,  1,
      -1,  1,  1, -1,  1,  1,
    ]);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    // Get shader locations
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
    // Mouse tracking for desktop interaction
    if (!this.isMobile) {
      document.addEventListener('mousemove', (e) => {
        this.targetMouse.x = e.clientX / window.innerWidth;
        this.targetMouse.y = 1.0 - (e.clientY / window.innerHeight);
      });

      // Initialize mouse to center
      this.targetMouse.x = 0.5;
      this.targetMouse.y = 0.5;
    }

    // Handle window resize
    window.addEventListener('resize', () => {
      this.resize();
      const wasMobile = this.isMobile;
      this.isMobile = window.innerWidth <= 1024 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

      // Setup mouse tracking if switching to desktop
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
    if (!this.gl || !this.program) return;

    const gl = this.gl;
    this.time += 0.016; // ~60fps

    // Smooth mouse interpolation
    if (!this.isMobile) {
      this.mouse.x += (this.targetMouse.x - this.mouse.x) * 0.12;
      this.mouse.y += (this.targetMouse.y - this.mouse.y) * 0.12;
    } else {
      this.mouse.x = 0.5;
      this.mouse.y = 0.5;
    }

    // Render gradient
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

// Initialize gradient when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new GradientCanvas();
  });
} else {
  new GradientCanvas();
}
