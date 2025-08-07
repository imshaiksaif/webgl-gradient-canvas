import Gl from "./modules/gl/gl.js";
import GUI from "lil-gui";

(() => {
  class Gradient {
    constructor(params, preset, isTest) {

      this.call = {
        mode: (name) => {
          console.log("light mode", name);
          this.gl.scene.quad.mode(name);
        },
        swap: (name, params = { d: 0 }) => {
          console.log("swap", name, params);
          this.gl.scene.quad.swap(name, params);
        }
      };
    

      this.gl = new Gl("c", params, preset);      

      this.gl.applyPreset(0);

      if (isTest) this.initGui( params[preset] );
    }

      setUniforms() {
        this.gl.scene.quad.setUniforms();
      }

      initGui(data) {
        this.data = data;
        this.gui = new GUI();
        this.gui
          .add(this.data, "multx", 0, 10)
          .onChange(() => {this.setUniforms();}).listen();
        this.gui
          .add(this.data, "multy", 0, 10)
          .onChange(() => {this.setUniforms();}).listen();
        this.gui
          .add(this.data, "hue", 0, 1)
          .onChange(() => {this.setUniforms();}).listen();
        this.gui
          .add(this.data, "brightness", 0, 1, 0.01)
          .onChange(() => {this.setUniforms();}).listen();
        this.gui
          .add(this.data, "mouse", -1, 1)
          .onChange(() => {this.setUniforms();}).listen();
        this.gui
          .add(this.data, "scale", 0, 10)
          .onChange(() => {this.setUniforms();}).listen();
        this.gui
          .add(this.data, "noise", 0, 10)
          .onChange(() => {this.setUniforms();}).listen();
        this.gui
          .add(this.data, "bw", 0, 1)
          .onChange(() => {this.setUniforms();}).listen();
        this.gui.add(this.data, "time", 0, 1);
      }
  }

  let params = {
    0: {
      multx: 0.2,
      multy: 0.8,
      hue: 0,
      brightness: 0.74,
      mouse: 1,
      scale: 0.2,
      scale2: 0.2,
      noise: 1,
      color: [0.0, 0.33, 0.66],
      color2: [0.0, 0.0, 0.0],
      bw: 1,
      bw2: 1,
      time: 0.25
    },
    1: {
       multx: 0.2,
      multy: 0.8,
      hue: 0,
      brightness: 0.8,
      mouse: 1,
      scale: 0.2,
      scale2: 0.2,
      noise: 1,
      color: [0.0, 0.33, 0.66],
      color2: [0.0, 0.0, 0.0],
      bw: 0,
      bw2: 0,
      time: 1
    }
  };

  const gradient = new Gradient(params, 0, true);

  window.gradient = gradient;

})();

/** Interface */
// console.log(window.Gradient.call.mode("light"));

// document.onclick = () => {
//   window.Gradient.call.swap(null, { d: 1.2 });
// };
