import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    cityInput: {
      width: 150,
      margin: 20,
      backgroundColor: 'transparent',
      border: 0,
      borderBottom: '4px solid #fff4de',
      outline: 0,
    },
    buttons: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    submitButton: {
      width: 120,
      height: 120,
      borderRadius: '100%',
      margin: 20,
      backgroundColor: '#fff4de',
      border: '4px solid white',
      whiteSpace: 'normal',
      outline: 0,
    },
    weatherList: {
      '& >*': {
        display: 'inline-block',
        margin: 20,
        padding: 10,
        border: '4px solid #fff4de',
        backgroundColor: 'rgba(255,255,255,0.8)',
      }
    }
  });

  export default useStyles;