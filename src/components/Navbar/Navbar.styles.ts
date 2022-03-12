import { IStyles } from "../../shared/interfaces/Styles.interfaces";
import theme from "../../theme";

export const NavbarStyles: IStyles = {
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: "15px 60px",
    position: "fixed",
    zIndex: "10",
    boxShadow: "rgb(219 219 219 / 25%) 0px 4px 4px",
  },
  menu: {
    display: "flex",
    alignItems: "center",
    flexWrap: "nowrap",
    paddingRight: "24px",
    justifyContent: "center",
  },
  navTab: {
    padding: "0 20px",
  },
  text: {
    color: theme.palette.text.secondary,
  },
  icon: {
    height: "50px",
    width: "100px",
  },
};
