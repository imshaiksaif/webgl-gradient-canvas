import { Gradient } from "./src/gradient";

let params = {
    0: {
      multx: 0.2,
      multy: 0.8,
      hue: 0,
      brightness: 0.74,
      mouse: 1,
      scale: 0.29,
      scale2: 0.2,
      noise: 1,
      color: [0.0, 0.33, 0.66],
      color2: [0.0, 0.0, 0.0],
      bw: 1,
      bw2: 1,
      time: 0.5
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