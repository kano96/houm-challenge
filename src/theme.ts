import { createTheme } from "@mui/material/styles";

const Palette = {
  primary: {
    main: "#FF452B",
  },
  secondary: {
    main: "#263238",
  },
  background: {
    default: "#ffdbd0",
    paper: "#ffffff",
  },
  text: {
    primary: "#FF452B",
    secondary: "#263238",
    disabled: "#B4B9BE",
  },
};
const ThemeFonts = {
  screenxl: {
    h1: 40,
    h2: 32,
    h3: 28,
    h4: 24,
    h5: 20,
    h6: 16,
    body1: 18,
    body2: 16,
  },
  screenlg: {
    h1: 38,
    h2: 30,
    h3: 26,
    h4: 22,
    h5: 18,
    h6: 16,
    body1: 18,
    body2: 16,
  },
  screenmd: {
    h1: 28,
    h2: 24,
    h3: 22,
    h4: 20,
    h5: 18,
    h6: 16,
    body1: 17,
    body2: 16,
  },
  screensm: {
    h1: 23,
    h2: 21,
    h3: 20,
    h4: 19,
    h5: 18,
    h6: 16,
    body1: 16,
    body2: 14,
  },
};
const breakpoints = {
  values: {
    xs: 0,
    sm: 360,
    mm: 630,
    md: 960,
    lg: 1280,
    xl: 1600,
  },
};

const theme = createTheme({
  palette: {
    primary: {
      main: Palette.primary.main,
    },
    secondary: {
      main: Palette.secondary.main,
    },
    background: {
      default: Palette.background.default,
      paper: Palette.background.paper,
    },
    text: {
      primary: Palette.text.primary,
      secondary: Palette.text.secondary,
      disabled: Palette.text.disabled,
    },
  },
  breakpoints,
  typography: {
    fontFamily: "Nunito, sans-serif",
    h1: {
      fontSize: ThemeFonts.screenxl.h1 + `px`,
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "120%",
      letterSpacing: "-0.015em",
      [`@media screen and (max-width: ${breakpoints.values.lg}px)`]: {
        fontSize: ThemeFonts.screenlg.h1 + `px`,
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.h1 + `px`,
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.h1 + `px`,
      },
    },
    h2: {
      fontSize: ThemeFonts.screenxl.h2 + `px`,
      fontWeight: 500,
      lineHeight: "120%",
      fontStyle: "normal",
      letterSpacing: "-0.015em",
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenlg.h2 + `px`,
        fontWeight: "500",
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.h2 + `px`,
        fontWeight: "500",
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.h2 + `px`,
        fontWeight: "500",
      },
    },
    h3: {
      fontSize: ThemeFonts.screenxl.h3 + `px`,
      fontWeight: 600,
      lineHeight: "120%",
      fontStyle: "normal",
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenlg.h3 + `px`,
        fontWeight: "500",
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.h3 + `px`,
        fontWeight: "500",
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.h3 + `px`,
        fontWeight: "500",
      },
    },
    h4: {
      fontSize: ThemeFonts.screenxl.h4 + `px`,
      fontWeight: 500,
      lineHeight: "120%",
      fontStyle: "normal",
      letterSpacing: "0.0025em",
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenlg.h4 + `px`,
        fontWeight: "500",
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.h4 + `px`,
        fontWeight: "500",
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.h4 + `px`,
        fontWeight: "500",
      },
    },
    h5: {
      fontSize: ThemeFonts.screenxl.h5 + `px`,
      fontWeight: 500,
      lineHeight: "140%",
      fontStyle: "normal",
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenlg.h5 + `px`,
        fontWeight: "500",
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.h5 + `px`,
        fontWeight: "500",
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.h5 + `px`,
        fontWeight: "500",
      },
    },
    h6: {
      fontSize: ThemeFonts.screenxl.h6 + `px`,
      fontWeight: 400,
      lineHeight: "120%",
      fontStyle: "normal",
      letterSpacing: "0.0015em",
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenlg.h6 + `px`,
        fontWeight: "500",
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.h6 + `px`,
        fontWeight: "500",
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.h6 + `px`,
        fontWeight: "500",
      },
    },
    body1: {
      fontSize: ThemeFonts.screenxl.body1 + `px`,
      fontWeight: "normal",
      lineHeight: "150%",
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenlg.body1 + `px`,
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.body1 + `px`,
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.body1 + `px`,
      },
    },
    body2: {
      fontSize: ThemeFonts.screenxl.body2 + `px`,
      fontWeight: "normal",
      lineHeight: "150%",
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenlg.body2 + `px`,
      },
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: ThemeFonts.screenmd.body2 + `px`,
      },
      [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
        fontSize: ThemeFonts.screensm.body2 + `px`,
      },
    },
  },
});

export default theme;
