import { CSSEffect,loadPlugin } from "@donkeyclip/motorcortex";
import LeonPlugin from "@donkeyclip/motorcortex-leonsans";
const LeonSans = loadPlugin(LeonPlugin);

export const scale = (value,selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        transform: {
          scale:value
        },
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );

  export const left = (value,selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        left:value
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );
  export const widthHeigh = (value,selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        height:value,
        width:value
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );

  export const width = (value,selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        width:value
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );

  export const top = (value,selector, duration, easing = "linear",delay=0) =>
  new CSSEffect(
    {
      animatedAttrs: {
        top:value
      },
    },
    {
      selector,
      duration,
      easing,
      delay
    }
  );

  export const blur = (selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        filter:"blur(0)"
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );
  export const opacity = (value,selector, duration, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        opacity:value
      },
    },
    {
      selector,
      duration,
      easing,
    }
  );

  export const bgColor = (value,selector, duration, delay=0) =>
  new CSSEffect(
    {
      animatedAttrs: {
        background:value
      },
    },
    {
      selector,
      duration,
      delay
    }
  );


  export const introClip = new LeonSans.Clip(
    {
      canvasId: "leonObj",
      sw: 1400,
      sh: 255,
      text: "LEON SANS",
      weight: 900,
      round: false,
      multiply: false,
      drawing: "drawing",
      color: [["#FFF"]],
      colorful: ["#64d3ce", "#2a92ce82", "#2a92ce40", "#2a92ce2e", "#2a92ce00"],
      pathGap: 10,
      patternWidth: 1,
      patternHeight: 1,
      speed: 1,
      tracking: 0,
      leading: 10,
      size: 255,
    },
    {
      selector: ".leon",
      containerParams: { width: "1400px", height: "355px" }
    }
  );
  export const wmc = new LeonSans.Clip(
    {
      canvasId: "leonObj",
      sw: 1340,
      sh: 355,
      text: "WELCOME TO MOTORCORTEX",
      weight: 500,
      round: false,
      multiply: false,
      drawing: "drawing",
      color: [["#FFF"]],
      colorful: ["#64d3ce", "#2a92ce82", "#2a92ce40", "#2a92ce2e", "#2a92ce00"],
      pathGap: 10,
      patternWidth: 1,
      patternHeight: 1,
      speed: 1,
      tracking: 0,
      leading: 10,
      size: 93,
    },
    {
      selector: ".wmc",
      containerParams: { width: "1340px", height: "355px" }
    }
  );


  export const inClip = new LeonSans.Clip(
    {
      canvasId: "leonObj",
      sw: 1340,
      sh: 600,
      text: "In this short clip\nwe will show some\nof the capabilityes\nof our library",
      weight: 500,
      round: true,
      multiply: true,
      drawing: "colorful",
      color: [["#FFF"]],
      // colorful: ["#001219", "#005F73", "#0A9396", "#94D2BD", "#E9D8A6","#EE9B00","#CA6702","#BB3E03","#AE2012","#9B2226"],
      pathGap: 10,
      patternWidth: 1,
      patternHeight: 1,
      speed: 1,
      tracking: 0,
      leading: 0,
      size: 93,
    },
    {
      selector: ".inclip",
      containerParams: { width: "1340px", height: "600px" }
    }
  );
  export const weightClip = new LeonSans.Clip(
    {
      canvasId: "leonObj",
      sw: 1340,
      sh: 600,
      text: "You can aniamate\nthe weight",
      weight: 100,
      round: true,
      multiply: true,
      drawing: "colorful",
      color: [["#FFF"]],
      // colorful: ["#001219", "#005F73", "#0A9396", "#94D2BD", "#E9D8A6","#EE9B00","#CA6702","#BB3E03","#AE2012","#9B2226"],
      pathGap: 10,
      patternWidth: 1,
      patternHeight: 1,
      speed: 1,
      tracking: 0,
      leading: 0,
      size: 63,
    },
    {
      selector: ".weight",
      containerParams: { width: "1340px", height: "600px" }
    }
  );

  export const trakingClip = new LeonSans.Clip(
    {
      canvasId: "leonObj",
      sw: 1340,
      sh: 600,
      text: "Traking leading",
      weight: 500,
      round: true,
      multiply: true,
      drawing: "colorful",
      color: [["#FFF"]],
      // colorful: ["#001219", "#005F73", "#0A9396", "#94D2BD", "#E9D8A6","#EE9B00","#CA6702","#BB3E03","#AE2012","#9B2226"],
      pathGap: 10,
      patternWidth: 1,
      patternHeight: 1,
      speed: 1,
      tracking: 0,
      leading: 0,
      size: 63,
    },
    {
      selector: ".traking-clip",
      containerParams: { width: "1340px", height: "600px" }
    }
  );

  export const staticClip = new LeonSans.Clip(
    {
      canvasId: "leonObj",
      sw: 1340,
      sh: 1000,
      text: "abcdefghijklm\nnopqrstuvwxyz\nABCDEFGHIJK\nLMNOPQRST\nUVWXYZ\n0123456789",
      weight: 100,
      round: true,
      multiply: true,
      drawing: "colorful",
      color: [["#FFF"]],
      // colorful: ["#001219", "#005F73", "#0A9396", "#94D2BD", "#E9D8A6","#EE9B00","#CA6702","#BB3E03","#AE2012","#9B2226"],
      pathGap: 10,
      patternWidth: 1,
      patternHeight: 1,
      speed: 1,
      tracking: 0,
      leading: 0,
      size: 93,
    },
    {
      selector: ".static-clip",
      containerParams: { width: "1340px", height: "1500px" }
    }
  );
  

  export const moreClip = new LeonSans.Clip(
    {
      canvasId: "leonObj2",
      sw: 1340,
      sh: 600,
      text: "  More beautiful\nthings are coming",
      weight: 500,
      round: false,
      multiply: false,
      drawing: "drawing",
      color: [["#FFF"]],
      // colorful: ["#001219", "#005F73", "#0A9396", "#94D2BD", "#E9D8A6","#EE9B00","#CA6702","#BB3E03","#AE2012","#9B2226"],
      pathGap: 10,
      patternWidth: 1,
      patternHeight: 1,
      speed: 1,
      tracking: 0,
      leading: 0,
      size: 120,
    },
    {
      selector: ".more",
      containerParams: { width: "1340px", height: "600px" }
    }
  );


  export const subscribeClip = new LeonSans.Clip(
    {
      canvasId: "leonObj2",
      sw: 1340,
      sh: 600,
      text: "Subscribe Now",
      weight: 200,
      round: false,
      multiply: false,
      drawing: "drawing",
      color: [["#FFF"]],
      // colorful: ["#001219", "#005F73", "#0A9396", "#94D2BD", "#E9D8A6","#EE9B00","#CA6702","#BB3E03","#AE2012","#9B2226"],
      pathGap: 10,
      patternWidth: 1,
      patternHeight: 1,
      speed: 1,
      tracking: 0,
      leading: 0,
      size: 90,
    },
    {
      selector: ".subscribe",
      containerParams: { width: "1340px", height: "600px" }
    }
  );



  export const completionIncident = (selector,start,end) => new LeonSans.LeonIncident(
    {
      animatedAttrs: {
        LeonAttrs: {
          completion_rate: end,
        },
      },
      initialValues: {
          LeonAttrs: {
            completion_rate: start,
          },
        },
      },
    {
      duration: 1000,
      selector,
      easing:"easeOutCirc"
    }
  );

  export const introIncident2 = new LeonSans.LeonIncident(
    {
      animatedAttrs: {
        LeonAttrs: {
          weight: 100,
      },
    },
    },
    {
      duration: 1000,
      selector: "!#leonObj",
      easing:"easeOutCirc"
    }
  );


  export const weight = (start,end) => new LeonSans.LeonIncident(
    {
      animatedAttrs: {
        LeonAttrs: {
          weight: end,
        },
      },
      initialValues: {
        LeonAttrs: {
          weight: start,
        },
      },
    },
    {
      duration: 1000,
      selector: "!#leonObj",
      easing:"easeOutCirc"
    }
  );


  export const leading2 = new LeonSans.LeonIncident(
    {
      animatedAttrs: {
        LeonAttrs: {
          leading: 2,
      },
    },
    },
    {
      duration: 1000,
      selector: "!#leonObj",
      easing:"easeOutCirc"
    }
  );


  export const tracking2 = new LeonSans.LeonIncident(
    {
      animatedAttrs: {
        LeonAttrs: {
          tracking: 2,
      },
    },
    },
    {
      duration: 1000,
      selector: "!#leonObj",
      easing:"easeOutCirc"
    }
  );


  export const size = new LeonSans.LeonIncident(
    {
      animatedAttrs: {
        LeonAttrs: {
          size: 102,
      },
    },
    },
    {
      duration: 1000,
      selector: "!#leonObj",
      easing:"easeOutCirc"
    }
  );



  export const pathGap = new LeonSans.LeonIncident(
    {
      animatedAttrs: {
        LeonAttrs: {
          pathGap: 5,
      },
    },
    },
    {
      duration: 1000,
      selector: "!#leonObj",
      easing:"easeOutCirc"
    }
  );
  