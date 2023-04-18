import { HTMLClip, setCSSCore } from "@donkeyclip/motorcortex";
import html from "./clip.html";
import css from "!!raw-loader!./clip.css";
import {
  introClip,
  completionIncident,
  introIncident2,
  left,
  scale,
  top,
  blur,
  height,
  wmc,
  widthHeigh,
  inClip,
  opacity,
  bgColor,
  leading4,
  weight,
  weightClip,
  staticClip,
  trakingClip,
  trackingLeading4,
  tracking2,
  leading2,
  pathGap,
  moreClip,
  subscribeClip,
} from "./incidents";
import { initParams } from "./initParams";
import initParamsValidationRules from "./initParamsValidationRules";
import AnimePluginDefinition from "@donkeyclip/motorcortex-anime";
// setCSSCore(AnimePluginDefinition.CSSEffect);

export const clip = new HTMLClip({
  html,
  css,
  host: document.getElementById("clip"),
  initParamsValidationRules,
  initParams: initParams[0].value,
  containerParams: {
    width: "1920px",
    height: "1080px",
  },
});

clip.addIncident(introClip, 0);
clip.addIncident(wmc, 0);
introClip.addIncident(completionIncident("!#leonObj", 1, 1), 0);
wmc.addIncident(completionIncident("!#leonObj", 1, 1), 0);
clip.addIncident(top("0px", ".leon,.wmc", 1000, "easeInOutExpo"), 0);
clip.addIncident(
  widthHeigh("2500px", ".transition", 1000, "easeInOutExpo"),
  1500
);
clip.addIncident(inClip, 2500);
inClip.addIncident(completionIncident("!#leonObj", 0, 1), 0);
clip.addIncident(weightClip, 0);
clip.addIncident(trakingClip, 0);
clip.addIncident(staticClip, 0);
clip.addIncident(moreClip, 0);
clip.addIncident(subscribeClip, 0);
weightClip.addIncident(completionIncident("!#leonObj", 1, 1), 0);
trakingClip.addIncident(completionIncident("!#leonObj", 1, 1), 0);
staticClip.addIncident(completionIncident("!#leonObj", 1, 1), 0);
weightClip.addIncident(weight(100, 500), 2200);

clip.addIncident(opacity(1, ".inclip-wrapper", 1), 2500);
clip.addIncident(top("-100%", ".inclip", 2500, "easeInOutExpo"), 4500);
clip.addIncident(
  bgColor(
    "@pattern(#c5d73f,#9d529c,#49a9db,#fec330,#5eb96e,#fc5356,#f38f31)",
    ".box",
    500,
    "@stagger(0, 800)"
  ),
  2500
);
clip.addIncident(
  top("-100%", ".box", 2500, "easeInOutExpo", "@stagger(0, 200)", {
    top: "40%",
  }),
  4500
);
clip.addIncident(top("2%", ".weight", 2500, "easeInOutExpo"), 4500);
clip.addIncident(top("0%", ".weight-line", 2500, "easeInOutExpo"), 4500);
clip.addIncident(top("0%", ".static-clip", 2500, "easeInOutExpo"), 4300);
staticClip.addIncident(weight(100, 900), 6900);
clip.addIncident(top("20%", ".traking-clip", 2500, "easeInOutExpo"), 7900);
clip.addIncident(top("18%", ".traking-line", 2500, "easeInOutExpo"), 7900);
staticClip.addIncident(tracking2, 10200);
staticClip.addIncident(leading2, 11200);
staticClip.addIncident(completionIncident("!#leonObj", 1, 0), 12200);
trakingClip.addIncident(completionIncident("!#leonObj", 1, 0), 12200);
weightClip.addIncident(completionIncident("!#leonObj", 1, 0), 12200);
clip.addIncident(
  widthHeigh("0px", ".gradient-line", 1000, "easeInOutExpo"),
  12200
);
clip.addIncident(
  opacity(0, ".inclip-wrapper,.transition,.intro-wrapper", 1),
  13000
);
moreClip.addIncident(completionIncident("!#leonObj2", 0, 1), 13000);
subscribeClip.addIncident(completionIncident("!#leonObj2", 0, 1), 13000);
clip.addIncident(opacity(1, ".subscribe-button", 200), 13000);
