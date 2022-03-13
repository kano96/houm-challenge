import { IStyles } from "../../shared/interfaces/Styles.interfaces";
import theme from "../../theme";

export const AboutStyles: IStyles = {
  container: {
    backgroundColor: theme.palette.background.paper,
    paddingTop: "120px",
    textAlign: "center",
  },
  title: {
    paddingBottom: "50px",
  },
  icon: {
    paddingTop: "100px",
    height: "100px",
    width: "200px",
  },
};
