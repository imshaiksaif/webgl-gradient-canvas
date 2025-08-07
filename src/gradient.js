import Gl from "./modules/gl/gl.js";
import GUI from "lil-gui";


  export class Gradient {
    constructor(params, preset, isTest) {

      this.params = params;

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

      presets = {
        "Preset 0": () => {
          this.gl.applyPreset(0)
          this.initGui( this.params[0] );
        },
        "Preset 1": () => {
          this.gl.applyPreset(1)
          this.initGui( this.params[1] );
        }
      }

      setUniforms() {
        this.gl.scene.quad.setUniforms();        
      }

      initGui(data) {
        this.data = data;
        this.gui = new GUI();
        this.gui.add(this.presets, "Preset 0")
        this.gui.add(this.presets, "Preset 1")
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



/** Interface */
// console.log(window.Gradient.call.mode("light"));

// document.onclick = () => {
//   window.Gradient.call.swap(null, { d: 1.2 });
// };
