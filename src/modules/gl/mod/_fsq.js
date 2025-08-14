import {
  createBufferInfoFromArrays,
  createProgramInfo,
  drawBufferInfo,
  setBuffersAndAttributes,
  setUniforms
} from "twgl.js";


import shaders from "../mat/fsq";


export default class {
  constructor(gl, data = {}) {
    this.gl = gl;
    this.data = data;
    this.shaders = shaders;
    this.programInfo = createProgramInfo(this.gl, this.shaders);
    // console.log(this.data);

    // if (this.data.test) this.initGui();

    this.a = {
      mode: 0,
      swap: 0
    };

    this.gl.useProgram(this.programInfo.program);
    this.setBuffAtt();
    this.setUniforms();
  }

  setBuffAtt() {
    const arrays = {
      position: [-1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0]
    };
    this.bufferInfo = createBufferInfoFromArrays(this.gl, arrays);
  }

  applyPreset(data) {

    this.data = data;
    this.setUniforms();
    console.log("Current background params:", this.data);

  }

  hexToRgb(hex) {
    // Remove '#' if present
    let hexValue = hex.startsWith('#') ? hex.slice(1) : hex;

    // Handle shorthand hex codes (e.g., #abc)
    if (hexValue.length === 3) {
      hexValue = hexValue[0] + hexValue[0] + 
                hexValue[1] + hexValue[1] + 
                hexValue[2] + hexValue[2];
    }

    // Parse the R, G, and B components
    const r = parseInt(hexValue.substring(0, 2), 16) / 255;
    const g = parseInt(hexValue.substring(2, 4), 16) / 255;
    const b = parseInt(hexValue.substring(4, 6), 16) / 255;

    return [ r, g, b ]; // Returns an object with r, g, b properties
  }

  setUniforms() {

    let color = this.hexToRgb(this.data.color);
    let color2 = this.hexToRgb(this.data.color2);

    this.uniforms = {
      u_res: [this.gl.canvas.width, this.gl.canvas.height],
      u_time: 0,
      u_params: [this.data.multx, this.data.multy, this.data.hue, this.data.brightness],
      u_params2: [this.data.mouse, this.data.scale, this.data.noise, this.data.bw],
      u_altparams: [this.data.scale2, this.data.bw2, 0, 0],
      u_color: color,
      u_color2: color2,
      u_mode: this.a.mode,
      u_swap: this.a.swap
    };

    this.gl.useProgram(this.programInfo.program);
    setUniforms(this.programInfo, this.uniforms);
  }

  render(t, { x, y }) {
    this.gl.useProgram(this.programInfo.program);
    setBuffersAndAttributes(this.gl, this.programInfo, this.bufferInfo);
    setUniforms(this.programInfo, {
      u_time: t * this.data.time,
      u_mouse: [x, y],
      u_mode: this.a.mode,
      u_swap: this.a.swap
    });

    drawBufferInfo(this.gl, this.bufferInfo);
    // this.gl.LINES
  }

  resize(gl) {
    this.gl = gl;

    this.gl.useProgram(this.programInfo.program);
    setUniforms(this.programInfo, {
      u_res: [this.gl.canvas.width, this.gl.canvas.height]
    });
  }



  mode(mode) {
    if (mode === "light") {
      this.a.mode = 1;
    } else if (mode === "dark") {
      this.a.mode = 0;
    } else {
      if (this.a.mode === 0) {
        this.a.mode = 1;
      } else {
        this.a.mode = 0;
      }
    }

    console.log(mode, this.uniforms.u_mode);
    this.setUniforms();
  }

  swap(mode, { d }) {
    let target = 0;

    if (mode === 0) {
      target = 0;
    } else if (mode === 1) {
      target = 1;
    } else {
      if (this.a.swap === 0) {
        target = 1;
      } else {
        target = 0;
      }
    }

    // Tween.to(this.a, {
    //   swap: target,
    //   duration: d
    // });

    // console.log(mode, this.uniforms.u_mode);
    this.setUniforms();
  }
}
