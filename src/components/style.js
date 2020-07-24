import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    cityInput: {
      width: 150,
      margin: 20,
    },
    buttons: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    submitButton: {
      width: 150,
      height: 150,
      borderRadius: "100%",
      margin: 20,
    },
  });

  export default useStyles;