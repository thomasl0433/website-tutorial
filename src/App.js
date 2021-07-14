import "./App.css";
import NavBar from "./components/NavBar";
import Grid from "./components/Grid";
// Material UI imports
import { ThemeProvider, makeStyles } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core";
import SecurityIcon from "@material-ui/icons/Security";
import EventNoteIcon from "@material-ui/icons/EventNote";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import ComputerIcon from "@material-ui/icons/Computer";
import HttpIcon from "@material-ui/icons/Http";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2e1667",
    },
    secondary: {
      main: "#c7d8ed",
    },
  },
  typography: {
    fontFamily: ["Roboto"],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: "2rem",
    },
    h5: {
      fontWeight: 100,
      lineHeight: "2rem",
    },
    useNextVariants: true,
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center",
  },
  bigSpace: {
    marginTop: "5rem",
  },
  littleSpace: {
    marginTop: "2.5rem",
  },
  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
});


// paused video at 15:52
function App() {
  const classes = styles();
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar />
        <Grid
          icon={
            <SecurityIcon
              style={{ fill: "#4360a6", height: "125", width: "125" }}
            />
          }
          title="Malone"
          btnTitle="Ebekeneezer"
        />
        <Grid
          icon={
            <EventNoteIcon
              style={{ fill: "#449a76", height: "125", width: "125" }}
            />
          }
          title="Bahammy"
          btnTitle="Best"
        />
        <Grid
          icon={
            <TrendingUpIcon
              style={{ fill: "#d05b2d", height: "125", width: "125" }}
            />
          }
          title="K'shiest"
          btnTitle="M'Neezer"
        />
      </ThemeProvider>
    </div>
  );
}

// function App() {
//   //const classes = styles();
//   return (
//     <div className="App">
//       <NavBar />
//     </div>
//   );
// }

export default App;
