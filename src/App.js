import { Fragment } from "react";
import "./App.css";
import NavBars from "./Component/NavBar/NavBars";
import Home from "./Page/Home/Home";

function App() {
  return (
    <Fragment>
      <NavBars />
      <Home />
    </Fragment>
  );
}

export default App;
