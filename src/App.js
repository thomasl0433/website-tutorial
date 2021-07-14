import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";
import "./App.css";
import NavBar from "./components/Navbar";

const theme = createMuiTheme({
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

function App() {
  const classes = styles();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar />
      </ThemeProvider>
    </div>
  );
}

export default App;
