import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./clip.html";
import css from "!!raw-loader!./clip.css";
import { introClip, completionIncident, introIncident2, left, scale, top , blur, height, wmc, widthHeigh, inClip, opacity, bgColor} from "./incidents";
import {  initParams } from "./initParams";

export const clip = new HTMLClip({
  html,
  css,
  host: document.getElementById("clip"),

  initParams: initParams[0].value,
  containerParams: {
    width: "1920px",
    height: "1080px",
  },
});



clip.addIncident(introClip, 0);
clip.addIncident(wmc, 0);
introClip.addIncident(completionIncident("!#leonObj",1,1), 0);
wmc.addIncident(completionIncident("!#leonObj2",1,1), 0);
clip.addIncident(top("0px",".leon,.wmc",1000,"easeInOutExpo"),0) 
clip.addIncident(widthHeigh("2500px",".transition",1000,"easeInOutExpo"),1500) 
clip.addIncident(inClip,2500)
inClip.addIncident(completionIncident("!#leonObj2",0,1), 0);
clip.addIncident(opacity(1,".inclip-wrapper",1),2500)
clip.addIncident(bgColor("@pattern(#c5d73f,#9d529c,#49a9db,#fec330,#5eb96e,#fc5356,#f38f31)",".box",500,"@stagger(0, 800)"),2500)
