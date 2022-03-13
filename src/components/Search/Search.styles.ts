import { IStyles } from "../../shared/interfaces/Styles.interfaces";

export const FormStyles: object = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "16px",
};

export const SeatchStyles: IStyles = {
  container: {
    paddingTop: "15px",
    flexDirection: "column",
    gap: "20px",
  },
  searchContainer: {
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "15px",
  },
  textField: {
    borderRadius: "50px",
    minWidth: "250px",
    width: "50%",
    outline: "none",
    marginTop: "5px",
  },
  button: {
    width: "100px",
    "&:hover": {
      backgroundColor: "#B2301E",
    },
  },
};
