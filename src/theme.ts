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
    dark: "#263238",
    secondary: "#0DC298",
    disabled: "#B4B9BE",
    white: "#FFFFFF",
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
      //@ts-ignore
      dark: Palette.text.dark,
      secondary: Palette.text.secondary,
      disabled: Palette.text.disabled,
      white: Palette.text.white,
    },
  },
});

export default theme;
