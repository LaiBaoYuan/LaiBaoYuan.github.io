// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import "./theme.css";

export default {
  // root component to wrap each page
  ...DefaultTheme,

  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
  },

  setup() {},
};
