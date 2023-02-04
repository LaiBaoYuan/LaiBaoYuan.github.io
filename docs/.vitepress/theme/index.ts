// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import VPTeamMembers from './VPTeamMembers.vue'
import { Theme } from "vitepress";
import "./theme.css";

export default {
  // root component to wrap each page
  ...DefaultTheme,

  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    ctx.app.component('VPTeamMembers',VPTeamMembers)
  },

  setup() {},
} as Theme

